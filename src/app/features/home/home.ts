import {
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  OnInit,
  afterNextRender,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectsService } from '../../core/services/projects.service';
import { AcademicProjectsService } from '../../core/services/academic-projects.service';
import { CertificationsService } from '../../core/services/certifications.service';
import { Project } from '../../core/models/project.model';
import { Certifications } from '../certifications/certifications';
import { Globe } from './components/globe/globe';
import { StatCounter } from './components/stat-counter/stat-counter';

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
  imports: [RouterLink, Certifications, Globe, StatCounter],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private readonly projectsService = inject(ProjectsService);
  private readonly academicProjectsService = inject(AcademicProjectsService);
  private readonly certificationsService = inject(CertificationsService);
  private readonly el = inject(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  readonly projects = this.projectsService.featuredProjects;
  readonly loading = this.projectsService.loading;
  readonly error = this.projectsService.error;

  /**
   * Compteurs de la barre de statistiques. Ce sont des `computed` de services :
   * aucune valeur n'est écrite en dur dans le template, donc les compteurs
   * suivent automatiquement le contenu des fichiers JSON (ajout ou suppression
   * d'un projet / d'une certification).
   */
  readonly projectsCount = this.projectsService.projectsCount;
  readonly academicProjectsCount = this.academicProjectsService.projectsCount;
  readonly certificationsCount = this.certificationsService.certificationsCount;
  readonly organizationsCount = this.certificationsService.organizationsCount;

  readonly year = new Date().getFullYear();

  /**
   * Technologies de la bande défilante. Le template (home.html) écrit
   * cette liste DEUX fois (deux `.marquee-group` identiques) pour la
   * boucle infinie sans couture — pour en ajouter une, c'est ici.
   */
  readonly techList = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'RxJS',
    'HTML5',
    'CSS3',
    'Bootstrap',
    'Node.js',
    'PHP',
    'Python',
    'Django / Flask',
    'MySQL',
    'MongoDB',
    'SQLite',
    'REST API',
    'HTTP',
    'EmailJS',
    'Git / GitHub',
    'VS Code',
    'Vercel',
  ];

  private particlesCanvas?: HTMLCanvasElement;
  private ctx?: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private particleAnimationFrame?: number;
  private typingTimeout?: ReturnType<typeof setTimeout>;
  private cursorGlow?: HTMLElement;
  private reducedMotion = false;
  private readonly roles = [
    'Développeur Web',
    'Créateur d’interfaces modernes',
    'Ancien chef d’équipe terrain',
    'Basé à Douala, Cameroun',
  ];

  private revealObserver?: IntersectionObserver;
  private readonly revealSeen = new WeakSet<Element>();
  private readonly tiltSeen = new WeakSet<Element>();
  private domObserver?: MutationObserver;
  private scanFrame?: number;

  constructor() {
    afterNextRender(() => {
      this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.initScrollReveal();
      this.watchDynamicContent();

      // Le typing est le contenu principal du Hero : il doit toujours tourner.
      // Auparavant il était bloqué par prefers-reduced-motion (texte statique).
      this.initTyping();

      if (this.reducedMotion) {
        return;
      }

      this.initParticles();
      this.initCursorGlow();
    });

    this.destroyRef.onDestroy(() => this.disposeVisualEffects());
  }

  ngOnInit(): void {
    // Les trois sources alimentent la barre de statistiques.
    this.projectsService.load();
    this.academicProjectsService.load();
    this.certificationsService.load();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.resizeCanvas();
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    if (this.reducedMotion) return;

    const glow = this.cursorGlow;
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
    this.revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.revealObserver?.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0 }
    );
    this.scanDynamicContent();
  }

  private watchDynamicContent(): void {
    this.domObserver = new MutationObserver(() => {
      if (this.scanFrame !== undefined) return;
      this.scanFrame = requestAnimationFrame(() => {
        this.scanFrame = undefined;
        this.scanDynamicContent();
      });
    });
    this.domObserver.observe(this.el.nativeElement, { childList: true, subtree: true });
  }

  private scanDynamicContent(): void {
    const root = this.el.nativeElement as HTMLElement;
    if (this.revealObserver) {
      const reveals = root.querySelectorAll<HTMLElement>('.reveal');
      reveals.forEach((el) => {
        if (!this.revealSeen.has(el)) {
          this.revealSeen.add(el);
          this.revealObserver!.observe(el);
        }
      });
    }
    if (!this.reducedMotion) {
      const tiltCards = root.querySelectorAll<HTMLElement>('[data-tilt]');
      tiltCards.forEach((el) => {
        if (this.tiltSeen.has(el)) return;
        this.tiltSeen.add(el);
        this.bindTilt(el);
      });
    }
  }

  private bindTilt(card: HTMLElement): void {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${y * -10}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) translateY(0)';
    });
  }

  private initTyping(): void {
    const el = this.el.nativeElement.querySelector('#typing-text') as HTMLElement | null;
    if (!el) return;

    // .hero-typing porte la classe .reveal (opacity: 0 tant que .visible est
    // ajouté par l'IntersectionObserver) : on garantit la visibilité sinon le
    // texte est tapé dans un élément totalement transparent.
    el.closest('.hero-typing')?.classList.add('visible');

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
    this.revealObserver?.disconnect();
    this.domObserver?.disconnect();
    if (this.scanFrame !== undefined) {
      cancelAnimationFrame(this.scanFrame);
    }
    if (this.particleAnimationFrame) {
      cancelAnimationFrame(this.particleAnimationFrame);
    }
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }
    this.cursorGlow?.remove();
  }
}
