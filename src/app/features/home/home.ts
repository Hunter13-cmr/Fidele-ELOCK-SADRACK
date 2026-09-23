import {
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  OnInit,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectsService } from '../../core/services/projects.service';
import { Project } from '../../core/models/project.model';
import { Certifications } from '../certifications/certifications';
import { ProfileCard } from './components/profile-card/profile-card';
import { Globe } from './components/globe/globe';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, Certifications, ProfileCard, Globe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private readonly projectsService = inject(ProjectsService);
  private readonly el = inject(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  readonly projects = this.projectsService.featuredProjects;
  readonly loading = this.projectsService.loading;
  readonly error = this.projectsService.error;

  readonly year = new Date().getFullYear();
  readonly showProfileIntro = signal(true);
  private particlesCanvas?: HTMLCanvasElement;
  private ctx?: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private particleAnimationFrame?: number;
  private typingTimeout?: ReturnType<typeof setTimeout>;
  private profileIntroTimeout?: ReturnType<typeof setTimeout>;
  private cursorGlow?: HTMLElement;
  private reducedMotion = false;
  private readonly roles = [
    'Développeur Front-End Angular',
    'Full Stack Junior',
    "Créateur d'interfaces modernes",
    'Basé à Douala, Cameroun',
  ];

  readonly mouseX = signal(0);
  readonly mouseY = signal(0);

  constructor() {
    afterNextRender(() => {
      this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.profileIntroTimeout = setTimeout(() => this.showProfileIntro.set(false), 2000);
      this.initScrollReveal();
      this.initCounter();

      if (this.reducedMotion) {
        this.setStaticRole();
        return;
      }

      this.initParticles();
      this.initTilt();
      this.initTyping();
      this.initCursorGlow();
    });

    this.destroyRef.onDestroy(() => this.disposeVisualEffects());
  }

  ngOnInit(): void {
    this.projectsService.load();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.resizeCanvas();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.initScrollReveal();
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    if (this.reducedMotion) return;

    this.mouseX.set(e.clientX);
    this.mouseY.set(e.clientY);
    const glow = document.querySelector('.cursor-glow') as HTMLElement | null;
    if (glow) {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    }
  }

  private initParticles(): void {
    const canvas = this.el.nativeElement.querySelector('#particles-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    this.particlesCanvas = canvas;
    this.ctx = canvas.getContext('2d')!;
    this.resizeCanvas();
    const count = Math.min(80, Math.floor(window.innerWidth / 18));
    this.particles = Array.from({ length: count }, () => ({
      x: Math.random() * this.particlesCanvas!.width,
      y: Math.random() * this.particlesCanvas!.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 0.4,
      color: ['#F0A93E', '#4EC9A0', '#7AA2F7', '#C44DFF'][Math.floor(Math.random() * 4)],
      alpha: Math.random() * 0.5 + 0.2,
    }));
    this.animateParticles();
  }

  private resizeCanvas(): void {
    if (!this.particlesCanvas) return;
    const parent = this.particlesCanvas.parentElement;
    if (!parent) return;
    this.particlesCanvas.width = parent.clientWidth;
    this.particlesCanvas.height = parent.clientHeight;
  }

  private animateParticles(): void {
    if (!this.particlesCanvas || !this.ctx) return;
    const ctx = this.ctx;
    const canvas = this.particlesCanvas;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < this.particles.length; i++) {
        for (let j = i + 1; j < this.particles.length; j++) {
          const a = this.particles[i];
          const b = this.particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(240, 169, 62, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      for (const p of this.particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      this.particleAnimationFrame = requestAnimationFrame(draw);
    };

    draw();
  }

  private initScrollReveal(): void {
    const els: HTMLElement[] = this.el.nativeElement.querySelectorAll('.reveal');
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.88 && rect.bottom > 0) {
        el.classList.add('visible');
      }
    });
  }

  private initTilt(): void {
    const cards: HTMLElement[] = this.el.nativeElement.querySelectorAll('[data-tilt]');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${y * -10}deg) translateY(-4px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) translateY(0)';
      });
    });
  }

  private initTyping(): void {
    const el = this.el.nativeElement.querySelector('#typing-text') as HTMLElement | null;
    if (!el) return;

    let role = 0;
    let char = 0;
    let del = false;

    const type = () => {
      const txt = this.roles[role];
      el.textContent = del ? txt.substring(0, char - 1) : txt.substring(0, char + 1);
      del ? char-- : char++;

      let speed = del ? 40 : 75;
      if (!del && char === txt.length) {
        speed = 2000;
        del = true;
      } else if (del && char === 0) {
        del = false;
        role = (role + 1) % this.roles.length;
        speed = 500;
      }
      this.typingTimeout = setTimeout(type, speed);
    };

    this.typingTimeout = setTimeout(type, 800);
  }

  onProjectImageLoad(event: Event): void {
    const image = event.currentTarget as HTMLImageElement;
    image.classList.add('is-loaded');
  }

  getProjectImages(project: Project): string[] {
    return project.images ?? [];
  }

  private initCounter(): void {
    const counters: HTMLElement[] = this.el.nativeElement.querySelectorAll('[data-counter]');
    counters.forEach((el) => {
      const target = parseInt(el.getAttribute('data-counter') || '0', 10);
      if (!target) return;
      const suffix = el.getAttribute('data-suffix') || '+';
      const dur = 2000;
      const start = performance.now();

      const update = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target) + suffix;
        if (p < 1) requestAnimationFrame(update);
      };

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              requestAnimationFrame(update);
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      obs.observe(el);
    });
  }

  private initCursorGlow(): void {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.setAttribute('aria-hidden', 'true');
    document.body.appendChild(glow);
    this.cursorGlow = glow;
  }

  private setStaticRole(): void {
    const el = this.el.nativeElement.querySelector('#typing-text') as HTMLElement | null;
    if (el) {
      el.textContent = this.roles[0];
    }
  }

  private disposeVisualEffects(): void {
    if (this.particleAnimationFrame) {
      cancelAnimationFrame(this.particleAnimationFrame);
    }
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }
    if (this.profileIntroTimeout) {
      clearTimeout(this.profileIntroTimeout);
    }
    this.cursorGlow?.remove();
  }
}
