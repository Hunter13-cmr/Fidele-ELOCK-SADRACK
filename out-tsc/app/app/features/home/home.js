import { Component, DestroyRef, ElementRef, HostListener, afterNextRender, inject, signal, } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectsService } from '../../core/services/projects.service';
import { Certifications } from '../certifications/certifications';
import { ProfileCard } from './components/profile-card/profile-card';
import { Globe } from './components/globe/globe';
import * as i0 from "@angular/core";
const _c0 = a0 => ["/projects", a0];
const _forTrack0 = ($index, $item) => $item.id;
function Home_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelement(1, "app-profile-card");
    i0.ɵɵelementEnd();
} }
function Home_Conditional_414_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 91);
    i0.ɵɵtext(1, "Chargement des projets\u2026");
    i0.ɵɵelementEnd();
} }
function Home_Conditional_415_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 92);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function Home_Conditional_416_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 91);
    i0.ɵɵtext(1, "Aucun projet \u00E0 afficher pour le moment.");
    i0.ɵɵelementEnd();
} }
function Home_Conditional_417_For_2_Conditional_3_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 128)(1, "img", 129);
    i0.ɵɵlistener("load", function Home_Conditional_417_For_2_Conditional_3_For_2_Template_img_load_1_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.onProjectImageLoad($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const image_r3 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    const project_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", image_r3, i0.ɵɵsanitizeUrl)("alt", project_r5.title + " - image " + ($index_r4 + 1));
} }
function Home_Conditional_417_For_2_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 122);
    i0.ɵɵrepeaterCreate(1, Home_Conditional_417_For_2_Conditional_3_For_2_Template, 2, 2, "div", 128, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const project_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.getProjectImages(project_r5));
} }
function Home_Conditional_417_For_2_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 123);
    i0.ɵɵtext(1, "Aper\u00E7u \u00E0 ajouter");
    i0.ɵɵelementEnd();
} }
function Home_Conditional_417_For_2_For_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tech_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(tech_r6);
} }
function Home_Conditional_417_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 119);
    i0.ɵɵelement(1, "div", 120);
    i0.ɵɵelementStart(2, "div", 121);
    i0.ɵɵconditionalCreate(3, Home_Conditional_417_For_2_Conditional_3_Template, 3, 0, "div", 122)(4, Home_Conditional_417_For_2_Conditional_4_Template, 2, 0, "span", 123);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 124)(6, "span", 125);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h3");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 126);
    i0.ɵɵrepeaterCreate(13, Home_Conditional_417_For_2_For_14_Template, 2, 1, "span", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "a", 127);
    i0.ɵɵtext(16, " Voir l'\u00E9tude de cas \u2192 ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const project_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background", "radial-gradient(circle at 50% 50%, var(--color-primary-glow), transparent 70%)");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(project_r5.image ? 3 : 4);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(project_r5.category);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(project_r5.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(project_r5.shortDescription);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(project_r5.technologies);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(7, _c0, project_r5.slug));
} }
function Home_Conditional_417_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 93);
    i0.ɵɵrepeaterCreate(1, Home_Conditional_417_For_2_Template, 17, 9, "article", 119, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.projects());
} }
export class Home {
    projectsService = inject(ProjectsService);
    el = inject(ElementRef);
    destroyRef = inject(DestroyRef);
    projects = this.projectsService.featuredProjects;
    loading = this.projectsService.loading;
    error = this.projectsService.error;
    year = new Date().getFullYear();
    showProfileIntro = signal(true, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "showProfileIntro" }] : /* istanbul ignore next */ []));
    particlesCanvas;
    ctx;
    particles = [];
    particleAnimationFrame;
    typingTimeout;
    profileIntroTimeout;
    cursorGlow;
    reducedMotion = false;
    roles = [
        'Développeur Front-End Angular',
        'Full Stack Junior',
        "Créateur d'interfaces modernes",
        'Basé à Douala, Cameroun',
    ];
    mouseX = signal(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "mouseX" }] : /* istanbul ignore next */ []));
    mouseY = signal(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "mouseY" }] : /* istanbul ignore next */ []));
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
    ngOnInit() {
        this.projectsService.load();
    }
    onResize() {
        this.resizeCanvas();
    }
    onScroll() {
        this.initScrollReveal();
    }
    onMouseMove(e) {
        if (this.reducedMotion)
            return;
        this.mouseX.set(e.clientX);
        this.mouseY.set(e.clientY);
        const glow = document.querySelector('.cursor-glow');
        if (glow) {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        }
    }
    initParticles() {
        const canvas = this.el.nativeElement.querySelector('#particles-canvas');
        if (!canvas)
            return;
        this.particlesCanvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.resizeCanvas();
        const count = Math.min(80, Math.floor(window.innerWidth / 18));
        this.particles = Array.from({ length: count }, () => ({
            x: Math.random() * this.particlesCanvas.width,
            y: Math.random() * this.particlesCanvas.height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            radius: Math.random() * 1.8 + 0.4,
            color: ['#F0A93E', '#4EC9A0', '#7AA2F7', '#C44DFF'][Math.floor(Math.random() * 4)],
            alpha: Math.random() * 0.5 + 0.2,
        }));
        this.animateParticles();
    }
    resizeCanvas() {
        if (!this.particlesCanvas)
            return;
        const parent = this.particlesCanvas.parentElement;
        if (!parent)
            return;
        this.particlesCanvas.width = parent.clientWidth;
        this.particlesCanvas.height = parent.clientHeight;
    }
    animateParticles() {
        if (!this.particlesCanvas || !this.ctx)
            return;
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
                if (p.x < 0 || p.x > canvas.width)
                    p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height)
                    p.vy *= -1;
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
    initScrollReveal() {
        const els = this.el.nativeElement.querySelectorAll('.reveal');
        els.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.88 && rect.bottom > 0) {
                el.classList.add('visible');
            }
        });
    }
    initTilt() {
        const cards = this.el.nativeElement.querySelectorAll('[data-tilt]');
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
    initTyping() {
        const el = this.el.nativeElement.querySelector('#typing-text');
        if (!el)
            return;
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
            }
            else if (del && char === 0) {
                del = false;
                role = (role + 1) % this.roles.length;
                speed = 500;
            }
            this.typingTimeout = setTimeout(type, speed);
        };
        this.typingTimeout = setTimeout(type, 800);
    }
    onProjectImageLoad(event) {
        const image = event.currentTarget;
        image.classList.add('is-loaded');
    }
    getProjectImages(project) {
        return project.images ?? [];
    }
    initCounter() {
        const counters = this.el.nativeElement.querySelectorAll('[data-counter]');
        counters.forEach((el) => {
            const target = parseInt(el.getAttribute('data-counter') || '0', 10);
            if (!target)
                return;
            const suffix = el.getAttribute('data-suffix') || '+';
            const dur = 2000;
            const start = performance.now();
            const update = (now) => {
                const p = Math.min((now - start) / dur, 1);
                el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target) + suffix;
                if (p < 1)
                    requestAnimationFrame(update);
            };
            const obs = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        requestAnimationFrame(update);
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            obs.observe(el);
        });
    }
    initCursorGlow() {
        const glow = document.createElement('div');
        glow.className = 'cursor-glow';
        glow.setAttribute('aria-hidden', 'true');
        document.body.appendChild(glow);
        this.cursorGlow = glow;
    }
    setStaticRole() {
        const el = this.el.nativeElement.querySelector('#typing-text');
        if (el) {
            el.textContent = this.roles[0];
        }
    }
    disposeVisualEffects() {
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
    static ɵfac = function Home_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Home)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Home, selectors: [["app-home"]], hostBindings: function Home_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("resize", function Home_resize_HostBindingHandler() { return ctx.onResize(); }, i0.ɵɵresolveWindow)("scroll", function Home_scroll_HostBindingHandler() { return ctx.onScroll(); }, i0.ɵɵresolveWindow)("mousemove", function Home_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); }, i0.ɵɵresolveWindow);
        } }, decls: 521, vars: 4, consts: [["aria-label", "Chargement du portfolio", 1, "profile-intro"], [1, "hero"], ["aria-hidden", "true", 1, "orb", "orb-1"], ["aria-hidden", "true", 1, "orb", "orb-2"], ["aria-hidden", "true", 1, "orb", "orb-3"], ["id", "particles-canvas", "aria-hidden", "true"], [1, "container", "hero-grid"], [1, "hero-content"], [1, "hero-badge", "reveal"], [1, "pulse-dot"], [1, "eyebrow"], [1, "hero-title", "reveal", "reveal-delay-1"], [1, "hero-name", "gradient-text"], [1, "hero-name-line", "hero-first-name"], [1, "hero-name-line", "hero-last-name"], [1, "hero-typing", "reveal", "reveal-delay-2"], [1, "typing-prefix"], ["id", "typing-text", 1, "typing-text"], [1, "typing-cursor", "blink-cursor"], [1, "typing-suffix"], [1, "hero-pitch", "reveal", "reveal-delay-3"], [1, "hero-actions", "reveal", "reveal-delay-4"], ["routerLink", "/projects", 1, "btn", "btn-primary"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none"], ["d", "M2 8h11M9 3l5 5-5 5", "stroke", "currentColor", "stroke-width", "1.6", "stroke-linecap", "round", "stroke-linejoin", "round"], ["routerLink", "/contact", 1, "btn", "btn-ghost"], ["d", "M8 1v14M1 8h14", "stroke", "currentColor", "stroke-width", "1.6", "stroke-linecap", "round"], [1, "hero-links", "reveal", "reveal-delay-5"], ["href", "https://github.com/Hunter13-cmr", "target", "_blank", "rel", "noopener noreferrer"], ["width", "15", "height", "15", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"], ["href", "https://linkedin.com/in/esf1305", "target", "_blank", "rel", "noopener noreferrer"], ["d", "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"], [1, "hero-location"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11z"], ["cx", "12", "cy", "10", "r", "2.5"], [1, "hero-visual", "reveal", "reveal-delay-3"], [1, "profile-photo-frame"], [1, "profile-photo-placeholder"], ["src", "assets/images/projects/le-calao-dore.PNG", "alt", "Aper\u00E7u du projet Le Calao Dor\u00E9", 1, "profile-photo"], [1, "scroll-indicator"], [1, "scroll-mouse"], [1, "scroll-wheel"], [1, "scroll-text"], [1, "tech-marquee", "marquee"], [1, "marquee-track"], [1, "sep"], [1, "stats-bar"], [1, "container", "stats-grid"], ["data-tilt", "", 1, "stat", "reveal"], ["data-counter", "3", "data-suffix", "+", 1, "stat-num"], [1, "stat-label"], ["data-tilt", "", 1, "stat", "reveal", "reveal-delay-1"], ["data-counter", "6", "data-suffix", "+", 1, "stat-num"], ["data-tilt", "", 1, "stat", "reveal", "reveal-delay-2"], ["data-counter", "7", "data-suffix", "+", 1, "stat-num"], ["data-tilt", "", 1, "stat", "reveal", "reveal-delay-3"], ["data-counter", "2", "data-suffix", "", 1, "stat-num"], ["id", "about-preview", 1, "section", "about-section"], [1, "section-accent"], [1, "container", "about-grid"], [1, "reveal"], ["routerLink", "/about", 1, "btn", "btn-ghost"], ["data-tilt", "", 1, "seeking-box", "card-shimmer", "reveal", "reveal-delay-2"], ["id", "skills", 1, "section"], [1, "container"], [1, "section-head", "reveal"], [1, "skills-grid"], ["data-tilt", "", 1, "skill-cat", "reveal"], [1, "skill-list"], [1, "skill-row"], [1, "lvl"], [1, "skill-bar"], [2, "width", "85%"], [2, "width", "80%"], [2, "width", "78%"], [2, "width", "70%"], ["data-tilt", "", 1, "skill-cat", "reveal", "reveal-delay-1"], [2, "width", "72%"], [2, "width", "65%"], [2, "width", "50%"], [2, "width", "45%"], ["data-tilt", "", 1, "skill-cat", "reveal", "reveal-delay-2"], [2, "width", "75%"], [2, "width", "55%"], [2, "width", "73%"], [2, "width", "90%"], [2, "width", "88%"], [2, "width", "60%"], ["id", "projects-preview", 1, "section"], [1, "state-msg"], [1, "state-msg", "state-error"], [1, "project-grid"], [1, "see-all", "reveal"], [1, "section", 2, "border-bottom", "none"], [1, "process-list"], ["data-tilt", "", 1, "process-item", "reveal"], [1, "process-num"], [1, "process-icon"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8"], ["cx", "12", "cy", "12", "r", "9"], ["d", "M12 8v8M8 12h8"], ["data-tilt", "", 1, "process-item", "reveal", "reveal-delay-1"], ["x", "3", "y", "3", "width", "7", "height", "7", "rx", "1"], ["x", "14", "y", "3", "width", "7", "height", "7", "rx", "1"], ["x", "3", "y", "14", "width", "7", "height", "7", "rx", "1"], ["x", "14", "y", "14", "width", "7", "height", "7", "rx", "1"], ["data-tilt", "", 1, "process-item", "reveal", "reveal-delay-2"], ["d", "M3 21l6-6M9 15l6-6M15 9l6-6M3 21h18"], ["d", "M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z"], ["d", "M9 12l2 2 4-4"], ["d", "M21 12a9 9 0 1 1-2.6-6.3M21 3v6h-6"], [1, "arch-strip", "reveal"], [1, "arch-label"], [1, "node"], [1, "arrow"], ["data-tilt", "", 1, "project-card", "card-shimmer", "reveal"], [1, "project-glow"], [1, "project-thumb"], [1, "project-slides"], [1, "project-visual-missing"], [1, "project-body"], [1, "cat"], [1, "stack-tags"], [1, "btn", "btn-ghost", "project-detail-link", 3, "routerLink"], [1, "project-slide"], ["loading", "eager", 1, "thumb-image", 3, "load", "src", "alt"]], template: function Home_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, Home_Conditional_0_Template, 2, 0, "div", 0);
            i0.ɵɵelementStart(1, "section", 1);
            i0.ɵɵelement(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "app-globe")(6, "canvas", 5);
            i0.ɵɵelementStart(7, "div", 6)(8, "div", 7)(9, "div", 8);
            i0.ɵɵelement(10, "span", 9);
            i0.ɵɵelementStart(11, "span", 10);
            i0.ɵɵtext(12, "Angular Talent Lab 2026 \u00B7 Orange Digital Center");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "h1", 11)(14, "span", 12)(15, "span", 13);
            i0.ɵɵtext(16, "FIDELE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "span", 14);
            i0.ɵɵtext(18, "ELOCK SADRACK");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(19, "div", 15)(20, "span", 16);
            i0.ɵɵtext(21);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(22, "span", 17);
            i0.ɵɵelementStart(23, "span", 18);
            i0.ɵɵtext(24, "|");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "span", 19);
            i0.ɵɵtext(26);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "p", 20);
            i0.ɵɵtext(28, " Certifi\u00E9 ");
            i0.ɵɵelementStart(29, "strong");
            i0.ɵɵtext(30, "Software Engineering");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(31, " chez ALX et premi\u00E8re cohorte de l'");
            i0.ɵɵelementStart(32, "strong");
            i0.ɵɵtext(33, "Angular Talent Lab 2026");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(34, " \u2014 je transforme le support terrain en interfaces web structur\u00E9es, pens\u00E9es pour les vrais usages. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "div", 21)(36, "a", 22);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(37, "svg", 23);
            i0.ɵɵelement(38, "path", 24);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(39, " Voir mes projets ");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(40, "a", 25);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(41, "svg", 23);
            i0.ɵɵelement(42, "path", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(43, " Parlons de votre projet ");
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(44, "div", 27)(45, "a", 28);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(46, "svg", 29);
            i0.ɵɵelement(47, "path", 30);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(48, " GitHub ");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(49, "a", 31);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(50, "svg", 29);
            i0.ɵɵelement(51, "path", 32);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(52, " LinkedIn ");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(53, "span", 33);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(54, "svg", 34);
            i0.ɵɵelement(55, "path", 35)(56, "circle", 36);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(57, " Douala, Cameroun ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(58, "div", 37)(59, "div", 38)(60, "div", 39);
            i0.ɵɵelement(61, "img", 40);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(62, "div", 41)(63, "span", 42);
            i0.ɵɵelement(64, "span", 43);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "span", 44);
            i0.ɵɵtext(66, "scroll");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(67, "div", 45)(68, "div", 46)(69, "span");
            i0.ɵɵtext(70, "Angular");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(71, "span", 47);
            i0.ɵɵtext(72, "\u2726");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(73, "span");
            i0.ɵɵtext(74, "TypeScript");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(75, "span", 47);
            i0.ɵɵtext(76, "\u2726");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(77, "span");
            i0.ɵɵtext(78, "RxJS");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(79, "span", 47);
            i0.ɵɵtext(80, "\u2726");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(81, "span");
            i0.ɵɵtext(82, "HTML5");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(83, "span", 47);
            i0.ɵɵtext(84, "\u2726");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(85, "span");
            i0.ɵɵtext(86, "CSS3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(87, "span", 47);
            i0.ɵɵtext(88, "\u2726");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(89, "span");
            i0.ɵɵtext(90, "Node.js");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(91, "span", 47);
            i0.ɵɵtext(92, "\u2726");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(93, "span");
            i0.ɵɵtext(94, "MySQL");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(95, "span", 47);
            i0.ɵɵtext(96, "\u2726");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(97, "span");
            i0.ɵɵtext(98, "REST API");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(99, "span", 47);
            i0.ɵɵtext(100, "\u2726");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(101, "span");
            i0.ɵɵtext(102, "Git");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(103, "span", 47);
            i0.ɵɵtext(104, "\u2726");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(105, "span");
            i0.ɵɵtext(106, "Vercel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(107, "span", 47);
            i0.ɵɵtext(108, "\u2726");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(109, "span");
            i0.ɵɵtext(110, "Angular");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(111, "span", 47);
            i0.ɵɵtext(112, "\u2726");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(113, "span");
            i0.ɵɵtext(114, "TypeScript");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(115, "span", 47);
            i0.ɵɵtext(116, "\u2726");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(117, "span");
            i0.ɵɵtext(118, "RxJS");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(119, "span", 47);
            i0.ɵɵtext(120, "\u2726");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(121, "span");
            i0.ɵɵtext(122, "HTML5");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(123, "span", 47);
            i0.ɵɵtext(124, "\u2726");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(125, "span");
            i0.ɵɵtext(126, "CSS3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(127, "span", 47);
            i0.ɵɵtext(128, "\u2726");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(129, "span");
            i0.ɵɵtext(130, "Node.js");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(131, "span", 47);
            i0.ɵɵtext(132, "\u2726");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(133, "span");
            i0.ɵɵtext(134, "MySQL");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(135, "span", 47);
            i0.ɵɵtext(136, "\u2726");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(137, "span");
            i0.ɵɵtext(138, "REST API");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(139, "span", 47);
            i0.ɵɵtext(140, "\u2726");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(141, "span");
            i0.ɵɵtext(142, "Git");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(143, "span", 47);
            i0.ɵɵtext(144, "\u2726");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(145, "span");
            i0.ɵɵtext(146, "Vercel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(147, "span", 47);
            i0.ɵɵtext(148, "\u2726");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(149, "section", 48)(150, "div", 49)(151, "div", 50)(152, "span", 51);
            i0.ɵɵtext(153, "0+");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(154, "span", 52);
            i0.ɵɵtext(155, "Projets r\u00E9alis\u00E9s");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(156, "div", 53)(157, "span", 54);
            i0.ɵɵtext(158, "0+");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(159, "span", 52);
            i0.ɵɵtext(160, "Projets acad\u00E9miques");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(161, "div", 55)(162, "span", 56);
            i0.ɵɵtext(163, "0+");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(164, "span", 52);
            i0.ɵɵtext(165, "Certifications obtenues");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(166, "div", 57)(167, "span", 58);
            i0.ɵɵtext(168, "0");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(169, "span", 52);
            i0.ɵɵtext(170, "Organisations certifiantes");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(171, "section", 59);
            i0.ɵɵelement(172, "div", 60);
            i0.ɵɵelementStart(173, "div", 61)(174, "div", 62)(175, "span", 10);
            i0.ɵɵtext(176, "\u00C0 propos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(177, "h2");
            i0.ɵɵtext(178, "D'un poste de support \u00E0 la conception d'interfaces");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(179, "p");
            i0.ɵɵtext(180, " Avant de d\u00E9velopper, j'ai pass\u00E9 du temps ");
            i0.ɵɵelementStart(181, "strong");
            i0.ɵɵtext(182, "sur le terrain et au support");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(183, " \u2014 \u00E0 diagnostiquer des pannes, configurer des postes, accompagner des utilisateurs. Cette exp\u00E9rience m'a appris \u00E0 comprendre un probl\u00E8me avant d'y r\u00E9pondre. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(184, "p");
            i0.ɵɵtext(185, " Aujourd'hui, je d\u00E9veloppe avec ");
            i0.ɵɵelementStart(186, "strong");
            i0.ɵɵtext(187, "Angular");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(188, " dans le cadre de la premi\u00E8re cohorte de l'");
            i0.ɵɵelementStart(189, "strong");
            i0.ɵɵtext(190, "Angular Talent Lab 2026");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(191, " \u00E0 l'Orange Digital Center Cameroun. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(192, "a", 63);
            i0.ɵɵtext(193, "En savoir plus \u2192");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(194, "div", 64)(195, "h3");
            i0.ɵɵtext(196, "Ce que je cherche");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(197, "ul")(198, "li");
            i0.ɵɵtext(199, "Une opportunit\u00E9 junior en d\u00E9veloppement Front-End / Angular");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(200, "li");
            i0.ɵɵtext(201, "Une \u00E9quipe o\u00F9 le code est relu, discut\u00E9, am\u00E9lior\u00E9");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(202, "li");
            i0.ɵɵtext(203, "Un environnement pour progresser rapidement et durablement");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(204, "li");
            i0.ɵɵtext(205, "La possibilit\u00E9 d'apporter aussi une culture support / IT");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(206, "section", 65);
            i0.ɵɵelement(207, "div", 60);
            i0.ɵɵelementStart(208, "div", 66)(209, "div", 67)(210, "span", 10);
            i0.ɵɵtext(211, "Comp\u00E9tences");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(212, "h2");
            i0.ɵɵtext(213, "Ce que j'utilise, dans le contexte des projets");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(214, "div", 68)(215, "div", 69)(216, "span", 10);
            i0.ɵɵtext(217, "Front-End");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(218, "h3");
            i0.ɵɵtext(219, "Angular & interface");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(220, "div", 70)(221, "div", 71)(222, "span");
            i0.ɵɵtext(223, "Angular");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(224, "span", 72);
            i0.ɵɵtext(225, "projet");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(226, "div", 73);
            i0.ɵɵelement(227, "span", 74);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(228, "div", 71)(229, "span");
            i0.ɵɵtext(230, "TypeScript");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(231, "span", 72);
            i0.ɵɵtext(232, "projet");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(233, "div", 73);
            i0.ɵɵelement(234, "span", 75);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(235, "div", 71)(236, "span");
            i0.ɵɵtext(237, "JavaScript");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(238, "span", 72);
            i0.ɵɵtext(239, "projet");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(240, "div", 73);
            i0.ɵɵelement(241, "span", 76);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(242, "div", 71)(243, "span");
            i0.ɵɵtext(244, "HTML5 / CSS3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(245, "span", 72);
            i0.ɵɵtext(246, "projet");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(247, "div", 73);
            i0.ɵɵelement(248, "span", 74);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(249, "div", 71)(250, "span");
            i0.ɵɵtext(251, "Bootstrap");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(252, "span", 72);
            i0.ɵɵtext(253, "projet");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(254, "div", 73);
            i0.ɵɵelement(255, "span", 77);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(256, "div", 78)(257, "span", 10);
            i0.ɵɵtext(258, "Back-End");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(259, "h3");
            i0.ɵɵtext(260, "Serveur & logique");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(261, "div", 70)(262, "div", 71)(263, "span");
            i0.ɵɵtext(264, "Node.js");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(265, "span", 72);
            i0.ɵɵtext(266, "projet");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(267, "div", 73);
            i0.ɵɵelement(268, "span", 79);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(269, "div", 71)(270, "span");
            i0.ɵɵtext(271, "PHP");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(272, "span", 72);
            i0.ɵɵtext(273, "projet");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(274, "div", 73);
            i0.ɵɵelement(275, "span", 80);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(276, "div", 71)(277, "span");
            i0.ɵɵtext(278, "Python");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(279, "span", 72);
            i0.ɵɵtext(280, "notions");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(281, "div", 73);
            i0.ɵɵelement(282, "span", 81);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(283, "div", 71)(284, "span");
            i0.ɵɵtext(285, "Django / Flask");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(286, "span", 72);
            i0.ɵɵtext(287, "notions");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(288, "div", 73);
            i0.ɵɵelement(289, "span", 82);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(290, "div", 83)(291, "span", 10);
            i0.ɵɵtext(292, "Data");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(293, "h3");
            i0.ɵɵtext(294, "Bases de donn\u00E9es");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(295, "div", 70)(296, "div", 71)(297, "span");
            i0.ɵɵtext(298, "MySQL");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(299, "span", 72);
            i0.ɵɵtext(300, "projet");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(301, "div", 73);
            i0.ɵɵelement(302, "span", 84);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(303, "div", 71)(304, "span");
            i0.ɵɵtext(305, "MongoDB");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(306, "span", 72);
            i0.ɵɵtext(307, "notions");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(308, "div", 73);
            i0.ɵɵelement(309, "span", 82);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(310, "div", 71)(311, "span");
            i0.ɵɵtext(312, "SQLite");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(313, "span", 72);
            i0.ɵɵtext(314, "notions");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(315, "div", 73);
            i0.ɵɵelement(316, "span", 85);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(317, "div", 69)(318, "span", 10);
            i0.ɵɵtext(319, "API & Architecture");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(320, "h3");
            i0.ɵɵtext(321, "Communication");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(322, "div", 70)(323, "div", 71)(324, "span");
            i0.ɵɵtext(325, "REST API");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(326, "span", 72);
            i0.ɵɵtext(327, "projet");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(328, "div", 73);
            i0.ɵɵelement(329, "span", 76);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(330, "div", 71)(331, "span");
            i0.ɵɵtext(332, "HTTP");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(333, "span", 72);
            i0.ɵɵtext(334, "projet");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(335, "div", 73);
            i0.ɵɵelement(336, "span", 84);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(337, "div", 71)(338, "span");
            i0.ɵɵtext(339, "Donn\u00E9es asynchrones");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(340, "span", 72);
            i0.ɵɵtext(341, "projet");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(342, "div", 73);
            i0.ɵɵelement(343, "span", 86);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(344, "div", 78)(345, "span", 10);
            i0.ɵɵtext(346, "Outils");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(347, "h3");
            i0.ɵɵtext(348, "Environnement dev");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(349, "div", 70)(350, "div", 71)(351, "span");
            i0.ɵɵtext(352, "Git / GitHub");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(353, "span", 72);
            i0.ɵɵtext(354, "r\u00E9gulier");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(355, "div", 73);
            i0.ɵɵelement(356, "span", 75);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(357, "div", 71)(358, "span");
            i0.ɵɵtext(359, "VS Code");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(360, "span", 72);
            i0.ɵɵtext(361, "r\u00E9gulier");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(362, "div", 73);
            i0.ɵɵelement(363, "span", 74);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(364, "div", 71)(365, "span");
            i0.ɵɵtext(366, "Vercel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(367, "span", 72);
            i0.ɵɵtext(368, "projet");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(369, "div", 73);
            i0.ɵɵelement(370, "span", 77);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(371, "div", 83)(372, "span", 10);
            i0.ɵɵtext(373, "IT & Support");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(374, "h3");
            i0.ɵɵtext(375, "Terrain");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(376, "div", 70)(377, "div", 71)(378, "span");
            i0.ɵɵtext(379, "Support utilisateur");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(380, "span", 72);
            i0.ɵɵtext(381, "exp\u00E9rience");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(382, "div", 73);
            i0.ɵɵelement(383, "span", 87);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(384, "div", 71)(385, "span");
            i0.ɵɵtext(386, "Diagnostic mat\u00E9riel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(387, "span", 72);
            i0.ɵɵtext(388, "exp\u00E9rience");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(389, "div", 73);
            i0.ɵɵelement(390, "span", 88);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(391, "div", 71)(392, "span");
            i0.ɵɵtext(393, "R\u00E9seaux (LAN, Wi-Fi, DNS)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(394, "span", 72);
            i0.ɵɵtext(395, "notions");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(396, "div", 73);
            i0.ɵɵelement(397, "span", 89);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(398, "div", 71)(399, "span");
            i0.ɵɵtext(400, "Windows / M365");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(401, "span", 72);
            i0.ɵɵtext(402, "exp\u00E9rience");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(403, "div", 73);
            i0.ɵɵelement(404, "span", 74);
            i0.ɵɵelementEnd()()()()()()();
            i0.ɵɵelement(405, "app-certifications");
            i0.ɵɵelementStart(406, "section", 90);
            i0.ɵɵelement(407, "div", 60);
            i0.ɵɵelementStart(408, "div", 66)(409, "div", 67)(410, "span", 10);
            i0.ɵɵtext(411, "Projets");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(412, "h2");
            i0.ɵɵtext(413, "3 projets, 3 probl\u00E8mes, 3 solutions");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(414, Home_Conditional_414_Template, 2, 0, "p", 91)(415, Home_Conditional_415_Template, 2, 1, "p", 92)(416, Home_Conditional_416_Template, 2, 0, "p", 91)(417, Home_Conditional_417_Template, 3, 0, "div", 93);
            i0.ɵɵelementStart(418, "div", 94)(419, "a", 22);
            i0.ɵɵtext(420, "Tous les projets");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(421, "section", 95);
            i0.ɵɵelement(422, "div", 60);
            i0.ɵɵelementStart(423, "div", 66)(424, "div", 67)(425, "span", 10);
            i0.ɵɵtext(426, "M\u00E9thode");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(427, "h2");
            i0.ɵɵtext(428, "Comment je travaille");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(429, "div", 96)(430, "div", 97)(431, "div", 98);
            i0.ɵɵtext(432, "01");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(433, "div", 99);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(434, "svg", 100);
            i0.ɵɵelement(435, "circle", 101)(436, "path", 102);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(437, "h3");
            i0.ɵɵtext(438, "Comprendre");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(439, "p");
            i0.ɵɵtext(440, "Cerner le probl\u00E8me r\u00E9el avant d'\u00E9crire une ligne de code.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(441, "div", 103)(442, "div", 98);
            i0.ɵɵtext(443, "02");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(444, "div", 99);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(445, "svg", 100);
            i0.ɵɵelement(446, "rect", 104)(447, "rect", 105)(448, "rect", 106)(449, "rect", 107);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(450, "h3");
            i0.ɵɵtext(451, "Structurer");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(452, "p");
            i0.ɵɵtext(453, "D\u00E9couper la solution en composants et services clairs.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(454, "div", 108)(455, "div", 98);
            i0.ɵɵtext(456, "03");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(457, "div", 99);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(458, "svg", 100);
            i0.ɵɵelement(459, "path", 109);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(460, "h3");
            i0.ɵɵtext(461, "Construire");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(462, "p");
            i0.ɵɵtext(463, "D\u00E9velopper proprement, avec un typage rigoureux.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(464, "div", 97)(465, "div", 98);
            i0.ɵɵtext(466, "04");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(467, "div", 99);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(468, "svg", 100);
            i0.ɵɵelement(469, "path", 110)(470, "circle", 111);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(471, "h3");
            i0.ɵɵtext(472, "Tester");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(473, "p");
            i0.ɵɵtext(474, "V\u00E9rifier le comportement, pas seulement le rendu visuel.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(475, "div", 103)(476, "div", 98);
            i0.ɵɵtext(477, "05");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(478, "div", 99);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(479, "svg", 100);
            i0.ɵɵelement(480, "path", 112)(481, "path", 113);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(482, "h3");
            i0.ɵɵtext(483, "D\u00E9ployer");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(484, "p");
            i0.ɵɵtext(485, "Mettre en ligne sur Vercel, avec un build v\u00E9rifi\u00E9.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(486, "div", 108)(487, "div", 98);
            i0.ɵɵtext(488, "06");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(489, "div", 99);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(490, "svg", 100);
            i0.ɵɵelement(491, "path", 114);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(492, "h3");
            i0.ɵɵtext(493, "Am\u00E9liorer");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(494, "p");
            i0.ɵɵtext(495, "Revenir sur le code une fois qu'il est utilis\u00E9.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(496, "div", 115)(497, "span", 116);
            i0.ɵɵtext(498, "Architecture Angular");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(499, "span", 117);
            i0.ɵɵtext(500, "Component");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(501, "span", 118);
            i0.ɵɵtext(502, "\u2192");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(503, "span", 117);
            i0.ɵɵtext(504, "Service");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(505, "span", 118);
            i0.ɵɵtext(506, "\u2192");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(507, "span", 117);
            i0.ɵɵtext(508, "HttpClient");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(509, "span", 118);
            i0.ɵɵtext(510, "\u2192");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(511, "span", 117);
            i0.ɵɵtext(512, "RxJS");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(513, "span", 118);
            i0.ɵɵtext(514, "\u2192");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(515, "span", 117);
            i0.ɵɵtext(516, "Signal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(517, "span", 118);
            i0.ɵɵtext(518, "\u2192");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(519, "span", 117);
            i0.ɵɵtext(520, "UI");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.showProfileIntro() ? 0 : -1);
            i0.ɵɵadvance(21);
            i0.ɵɵtextInterpolate("{");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate("}");
            i0.ɵɵadvance(388);
            i0.ɵɵconditional(ctx.loading() ? 414 : ctx.error() ? 415 : ctx.projects().length === 0 ? 416 : 417);
        } }, dependencies: [RouterLink, Certifications, ProfileCard, Globe], styles: ["\n.profile-intro[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 200;\n  display: grid;\n  place-items: center;\n  padding: 24px;\n  background: var(--%NS%color-bg);\n  animation: _ngcontent-%COMP%_profile-intro-out .2s ease 1.8s forwards;\n}\n\n.profile-intro[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%] {\n  visibility: hidden;\n  pointer-events: none;\n}\n\n.profile-intro[_ngcontent-%COMP%]   app-profile-card[_ngcontent-%COMP%] {\n  display: block;\n  width: min(420px, 100%);\n  animation: _ngcontent-%COMP%_profile-intro-in .8s cubic-bezier(.16, 1, .3, 1) both;\n}\n\n@keyframes _ngcontent-%COMP%_profile-intro-in {\n  from { opacity: 0; transform: translateY(18px) scale(.72); }\n  to { opacity: 1; transform: translateY(0) scale(1); }\n}\n\n@keyframes _ngcontent-%COMP%_profile-intro-out {\n  to { opacity: 0; visibility: hidden; pointer-events: none; }\n}\n\n\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 92vh;\n  display: flex;\n  align-items: center;\n  padding: 0px 0 0px;\n  overflow: hidden;\n  background:\n    radial-gradient(ellipse 80% 60% at 50% -10%, rgba(240, 169, 62, 0.08), transparent),\n    radial-gradient(ellipse 60% 50% at 90% 50%, rgba(196, 77, 255, 0.05), transparent),\n    radial-gradient(ellipse 50% 50% at 10% 80%, rgba(78, 201, 160, 0.06), transparent);\n}\n\n\n.hero[_ngcontent-%COMP%]   app-globe[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n  pointer-events: none;\n  overflow: hidden;\n}\n\n.hero[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(240, 169, 62, 0.03) 1px, transparent 1px),\n    linear-gradient(90deg, rgba(240, 169, 62, 0.03) 1px, transparent 1px);\n  background-size: 56px 56px;\n  mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent);\n  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent);\n  pointer-events: none;\n}\n\n.hero-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.1fr 0.9fr;\n  gap: 60px;\n  align-items: center;\n  width: 90%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.hero-content[_ngcontent-%COMP%] { position: relative; z-index: 2; }\n\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(240, 169, 62, 0.06);\n  border: 1px solid rgba(240, 169, 62, 0.18);\n  border-radius: 100px;\n  padding: 8px 18px;\n  margin-bottom: 28px;\n  backdrop-filter: blur(8px);\n}\n\n.pulse-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--%NS%color-primary);\n  position: relative;\n  flex-shrink: 0;\n}\n.pulse-dot[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  inset: -4px;\n  border-radius: 50%;\n  background: var(--%NS%color-primary);\n  opacity: 0.4;\n  animation: _ngcontent-%COMP%_pulse-ring 2s cubic-bezier(.4, 0, .2, 1) infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse-ring {\n  0% { transform: scale(0.5); opacity: 0.6; }\n  100% { transform: scale(2.2); opacity: 0; }\n}\n\n.hero-title[_ngcontent-%COMP%] {\n  font-size: clamp(2.6rem, 6vw, 4.6rem);\n  line-height: 1.02;\n  letter-spacing: -0.03em;\n  margin-bottom: 18px;\n}\n\n.hero-name[_ngcontent-%COMP%] {\n  display: block;\n  background: linear-gradient(135deg, #F0A93E 0%, #FF6B6B 40%, #C44DFF 80%);\n  background-size: 200% 200%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  animation: _ngcontent-%COMP%_gradient-shift 6s ease infinite;\n}\n\n.hero-name-line[_ngcontent-%COMP%] {\n  display: block;\n  line-height: 1;\n}\n\n.hero-first-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.hero-last-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.75em;\n  opacity: 0.9;\n}\n@keyframes _ngcontent-%COMP%_gradient-shift {\n  0%, 100% { background-position: 0% 50%; }\n  50% { background-position: 100% 50%; }\n}\n\n.hero-typing[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-family: var(--%NS%font-mono);\n  font-size: clamp(1rem, 2vw, 1.35rem);\n  color: var(--%NS%color-secondary);\n  margin-bottom: 24px;\n  min-height: 32px;\n}\n\n.typing-prefix[_ngcontent-%COMP%], .typing-suffix[_ngcontent-%COMP%] { color: var(--%NS%color-text-faint); }\n.typing-text[_ngcontent-%COMP%] { color: var(--%NS%color-text); font-weight: 500; }\n\n.typing-cursor[_ngcontent-%COMP%] {\n  color: var(--%NS%color-primary);\n  font-weight: 700;\n}\n\n.blink-cursor[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_blink-cursor 1s steps(1) infinite;\n}\n@keyframes _ngcontent-%COMP%_blink-cursor {\n  50% { opacity: 0; }\n}\n\n.hero-pitch[_ngcontent-%COMP%] {\n  color: var(--%NS%color-text-muted);\n  font-size: 1.1rem;\n  max-width: 48ch;\n  margin-bottom: 36px;\n  line-height: 1.7;\n}\n.hero-pitch[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: var(--%NS%color-text); font-weight: 600; }\n\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-bottom: 36px;\n}\n\n.hero-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  flex-wrap: wrap;\n  font-family: var(--%NS%font-mono);\n  font-size: 0.8rem;\n  color: var(--%NS%color-text-faint);\n}\n\n.hero-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  transition: color .2s ease, transform .2s ease;\n}\n.hero-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--%NS%color-primary);\n  transform: translateY(-2px);\n}\n\n.hero-location[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  color: var(--%NS%color-text-faint);\n}\n\n\n.hero-visual[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 520px;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n\n.hero-visual[_ngcontent-%COMP%]   app-profile-card[_ngcontent-%COMP%] {\n  flex: 1 1 280px;\n  max-width: 420px;\n  min-width: 260px;\n}\n\n\n.profile-photo-frame[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(360px, 100%);\n  height: 460px;\n  border-radius: 16px;\n  border: 1px solid rgba(240, 169, 62, 0.25);\n  background:\n    radial-gradient(circle at 50% 30%, rgba(240, 169, 62, 0.08), transparent 60%),\n    linear-gradient(160deg, rgba(21, 28, 38, 0.9), rgba(15, 20, 28, 0.95));\n  box-shadow:\n    0 20px 60px -20px rgba(0, 0, 0, 0.6),\n    0 0 40px -16px var(--%NS%color-primary-glow),\n    inset 0 1px 0 rgba(255, 255, 255, 0.04);\n  backdrop-filter: blur(16px);\n  overflow: hidden;\n  flex-shrink: 0;\n  transition: border-color .3s ease, box-shadow .3s ease, transform .3s ease;\n  order: 0;\n}\n\n.profile-photo-frame[_ngcontent-%COMP%]:hover {\n  border-color: rgba(240, 169, 62, 0.5);\n  box-shadow:\n    0 24px 70px -20px rgba(0, 0, 0, 0.7),\n    0 0 50px -12px var(--%NS%color-primary-glow),\n    inset 0 1px 0 rgba(255, 255, 255, 0.06);\n  transform: translateY(-4px);\n}\n\n.profile-photo-frame[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -60%;\n  width: 50%;\n  height: 100%;\n  background: linear-gradient(105deg, transparent, rgba(255, 255, 255, 0.04), transparent);\n  animation: _ngcontent-%COMP%_shimmer-sweep 4s ease-in-out infinite;\n  pointer-events: none;\n  z-index: 1;\n}\n\n.profile-photo-frame[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  inset: 0;\n  border-radius: 16px;\n  border: 1px solid transparent;\n  background: linear-gradient(135deg, rgba(240, 169, 62, 0.15), transparent 40%, rgba(78, 201, 160, 0.1)) border-box;\n  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n  pointer-events: none;\n  z-index: 1;\n}\n\n.profile-photo-placeholder[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n}\n\n.profile-initials[_ngcontent-%COMP%] {\n  font-family: var(--%NS%font-display);\n  font-size: 3.2rem;\n  font-weight: 700;\n  background: linear-gradient(135deg, #F0A93E 0%, #FF6B6B 50%, #C44DFF 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  letter-spacing: -0.02em;\n  line-height: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n\n.profile-initials[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 500;\n  opacity: 0.85;\n}\n\n\n.profile-photo-frame[_ngcontent-%COMP%]   .profile-photo[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 16px;\n  z-index: 2;\n}\n\n.code-card[_ngcontent-%COMP%] {\n  background: rgba(21, 28, 38, 0.85);\n  border: 1px solid rgba(240, 169, 62, 0.15);\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow:\n    0 30px 80px -20px rgba(0, 0, 0, 0.7),\n    0 0 60px -20px rgba(240, 169, 62, 0.15),\n    inset 0 1px 0 rgba(255, 255, 255, 0.04);\n  backdrop-filter: blur(20px);\n  transform-style: preserve-3d;\n}\n\n.code-card[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -60%;\n  width: 50%;\n  height: 100%;\n  background: linear-gradient(105deg, transparent, rgba(255, 255, 255, 0.03), transparent);\n  animation: _ngcontent-%COMP%_shimmer-sweep 4s ease-in-out infinite;\n  pointer-events: none;\n}\n@keyframes _ngcontent-%COMP%_shimmer-sweep {\n  0% { left: -60%; }\n  50%, 100% { left: 120%; }\n}\n\n.code-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  background: rgba(15, 20, 28, 0.9);\n  border-bottom: 1px solid var(--%NS%color-border);\n}\n\n.code-dots[_ngcontent-%COMP%] { display: flex; gap: 6px; }\n.code-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.code-dot.red[_ngcontent-%COMP%] { background: #FF5F57; }\n.code-dot.yellow[_ngcontent-%COMP%] { background: #FEBC2E; }\n.code-dot.green[_ngcontent-%COMP%] { background: #28C840; }\n\n.code-file[_ngcontent-%COMP%] {\n  flex: 1;\n  font-family: var(--%NS%font-mono);\n  font-size: 0.75rem;\n  color: var(--%NS%color-text-muted);\n  text-align: center;\n}\n\n.code-status[_ngcontent-%COMP%] {\n  font-family: var(--%NS%font-mono);\n  font-size: 0.65rem;\n  color: var(--%NS%color-secondary);\n  background: rgba(78, 201, 160, 0.1);\n  padding: 3px 10px;\n  border-radius: 100px;\n}\n\n.code-body[_ngcontent-%COMP%] {\n  padding: 26px 20px 20px;\n  overflow-x: auto;\n}\n\n.code-body[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-family: var(--%NS%font-mono);\n  font-size: 0.8rem;\n  line-height: 1.9;\n  color: var(--%NS%color-text-muted);\n  white-space: pre;\n}\n\n.code-comment[_ngcontent-%COMP%] { color: var(--%NS%color-text-faint); font-style: italic; }\n.code-keyword[_ngcontent-%COMP%] { color: #C792EA; }\n.code-string[_ngcontent-%COMP%] { color: var(--%NS%color-primary); }\n.code-property[_ngcontent-%COMP%] { color: var(--%NS%color-accent); }\n.code-punctuation[_ngcontent-%COMP%] { color: var(--%NS%color-text-faint); }\n\n.code-cursor[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: var(--%NS%color-primary);\n  animation: _ngcontent-%COMP%_blink-cursor 1s steps(1) infinite;\n  margin-left: 2px;\n}\n\n.code-card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 12px 18px;\n  border-top: 1px solid var(--%NS%color-border);\n  background: rgba(15, 20, 28, 0.6);\n}\n\n.code-lint[_ngcontent-%COMP%] {\n  font-family: var(--%NS%font-mono);\n  font-size: 0.65rem;\n  color: var(--%NS%color-text-faint);\n}\n.code-lint.success[_ngcontent-%COMP%] {\n  color: var(--%NS%color-secondary);\n  margin-left: auto;\n}\n\n\n.float-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-family: var(--%NS%font-mono);\n  font-size: 0.7rem;\n  color: var(--%NS%color-text);\n  background: rgba(21, 28, 38, 0.9);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: 100px;\n  padding: 8px 14px;\n  backdrop-filter: blur(12px);\n  box-shadow: 0 8px 32px -8px rgba(0, 0, 0, 0.5);\n  animation: _ngcontent-%COMP%_float-badge 5s ease-in-out infinite;\n  z-index: 3;\n}\n\n.badge-angular[_ngcontent-%COMP%] { top: 8%; left: -30px; animation-delay: 0s; }\n.badge-typescript[_ngcontent-%COMP%] { bottom: 18%; right: -25px; animation-delay: -1.5s; }\n.badge-rxjs[_ngcontent-%COMP%] { bottom: -15px; left: 18%; animation-delay: -3s; }\n\n@keyframes _ngcontent-%COMP%_float-badge {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-10px); }\n}\n\n\n.scroll-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 24px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  z-index: 3;\n  opacity: 0.7;\n}\n\n.scroll-mouse[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 42px;\n  border: 2px solid var(--%NS%color-text-faint);\n  border-radius: 16px;\n  display: flex;\n  justify-content: center;\n  padding-top: 7px;\n}\n\n.scroll-wheel[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 8px;\n  border-radius: 4px;\n  background: var(--%NS%color-primary);\n  animation: _ngcontent-%COMP%_scroll-wheel 1.8s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_scroll-wheel {\n  0% { transform: translateY(0); opacity: 1; }\n  70% { transform: translateY(14px); opacity: 0; }\n  100% { transform: translateY(0); opacity: 0; }\n}\n\n.scroll-text[_ngcontent-%COMP%] {\n  font-family: var(--%NS%font-mono);\n  font-size: 0.6rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--%NS%color-text-faint);\n}\n\n\n.tech-marquee[_ngcontent-%COMP%] {\n  padding: 28px 0;\n  border-top: 1px solid var(--%NS%color-border);\n  border-bottom: 1px solid var(--%NS%color-border);\n  background: rgba(15, 20, 28, 0.6);\n  backdrop-filter: blur(12px);\n  overflow: hidden;\n  position: relative;\n}\n\n.tech-marquee[_ngcontent-%COMP%]   .marquee-track[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: max-content;\n  flex-shrink: 0;\n  gap: 48px;\n  padding-right: 0;\n  animation: _ngcontent-%COMP%_marquee-right 18s linear infinite;\n  will-change: transform;\n}\n\n.tech-marquee[_ngcontent-%COMP%]   .marquee-track[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: var(--%NS%font-mono);\n  font-size: 0.9rem;\n  color: var(--%NS%color-text-muted);\n  letter-spacing: 0.06em;\n  white-space: nowrap;\n}\n\n.tech-marquee[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%] { color: var(--%NS%color-primary); opacity: 0.6; }\n\n\n@keyframes _ngcontent-%COMP%_marquee-right {\n  0% { transform: translate3d(-50%, 0, 0); }\n  100% { transform: translate3d(0, 0, 0); }\n}\n\n\n.stats-bar[_ngcontent-%COMP%] {\n  padding: 48px 0;\n  border-bottom: 1px solid var(--%NS%color-border);\n  background: linear-gradient(135deg, rgba(240, 169, 62, 0.03), rgba(78, 201, 160, 0.03));\n}\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n\n.stat[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 28px 20px;\n  border-radius: 12px;\n  background: rgba(21, 28, 38, 0.5);\n  border: 1px solid var(--%NS%color-border);\n  transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease;\n  will-change: transform;\n}\n.stat[_ngcontent-%COMP%]:hover {\n  border-color: rgba(240, 169, 62, 0.4);\n  box-shadow: 0 12px 40px -12px var(--%NS%color-primary-glow);\n}\n\n.stat-num[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--%NS%font-display);\n  font-size: 2.6rem;\n  font-weight: 700;\n  background: linear-gradient(135deg, var(--%NS%color-primary), #FF6B6B);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  font-family: var(--%NS%font-mono);\n  font-size: 0.72rem;\n  color: var(--%NS%color-text-muted);\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n\n.about-section[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(ellipse 50% 40% at 80% 50%, rgba(78, 201, 160, 0.04), transparent),\n    radial-gradient(ellipse 50% 40% at 10% 50%, rgba(240, 169, 62, 0.04), transparent);\n}\n\n.about-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.4fr 1fr;\n  gap: 64px;\n  align-items: start;\n}\n\n.about-grid[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(1.6rem, 3vw, 2.2rem);\n  margin-top: 12px;\n  margin-bottom: 8px;\n}\n\n.about-grid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--%NS%color-text-muted);\n  margin: 16px 0;\n  font-size: 1.02rem;\n  line-height: 1.8;\n}\n.about-grid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--%NS%color-text);\n  font-weight: 600;\n}\n\n.about-grid[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] { margin-top: 12px; }\n\n.seeking-box[_ngcontent-%COMP%] {\n  background: var(--%NS%color-surface);\n  border: 1px solid var(--%NS%color-border);\n  border-left: 3px solid var(--%NS%color-primary);\n  border-radius: var(--%NS%radius);\n  padding: 30px 28px;\n  align-self: start;\n  transition: border-color .3s ease, box-shadow .3s ease;\n}\n.seeking-box[_ngcontent-%COMP%]:hover {\n  border-color: rgba(240, 169, 62, 0.4);\n  box-shadow: 0 16px 60px -20px var(--%NS%color-primary-glow);\n}\n\n.seeking-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  margin-bottom: 16px;\n  color: var(--%NS%color-text);\n}\n\n.seeking-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  color: var(--%NS%color-text-muted);\n  padding: 9px 0;\n  border-top: 1px dashed var(--%NS%color-border);\n  position: relative;\n  padding-left: 20px;\n}\n\n.seeking-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child { border-top: none; }\n\n.seeking-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: '\u2192';\n  position: absolute;\n  left: 0;\n  color: var(--%NS%color-primary);\n  font-family: var(--%NS%font-mono);\n  font-size: 0.8rem;\n}\n\n\n.skills-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\n.skill-cat[_ngcontent-%COMP%] {\n  background: var(--%NS%color-surface);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius);\n  padding: 28px 26px;\n  transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease;\n  will-change: transform;\n}\n\n.skill-cat[_ngcontent-%COMP%]:hover {\n  border-color: rgba(240, 169, 62, 0.3);\n  box-shadow: 0 12px 44px -16px var(--%NS%color-primary-glow);\n}\n\n.skill-cat[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  margin-top: 10px;\n  font-family: var(--%NS%font-body);\n  font-weight: 600;\n}\n\n.skill-list[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.skill-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 8px 12px;\n  font-size: 0.88rem;\n  align-items: center;\n}\n\n.skill-row[_ngcontent-%COMP%]   .lvl[_ngcontent-%COMP%] {\n  font-family: var(--%NS%font-mono);\n  font-size: 0.65rem;\n  color: var(--%NS%color-text-faint);\n  text-transform: capitalize;\n}\n\n.skill-bar[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  height: 3px;\n  background: var(--%NS%color-border);\n  border-radius: 3px;\n  overflow: hidden;\n}\n\n.skill-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  background: linear-gradient(90deg, var(--%NS%color-primary), var(--%NS%color-secondary));\n  border-radius: 3px;\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform 1.2s cubic-bezier(.16, 1, .3, 1);\n}\n\n.skill-cat[_ngcontent-%COMP%]:hover   .skill-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.reveal.visible[_ngcontent-%COMP%]   .skill-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transform: scaleX(1);\n}\n\n\n.state-msg[_ngcontent-%COMP%] {\n  color: var(--%NS%color-text-muted);\n  font-size: 0.95rem;\n  text-align: center;\n  padding: 40px 0;\n}\n.state-error[_ngcontent-%COMP%] { color: var(--%NS%color-danger); }\n\n.project-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n\n.project-card[_ngcontent-%COMP%] {\n  background: var(--%NS%color-surface);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius-lg);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  transition: transform .3s cubic-bezier(.4, 0, .2, 1), border-color .3s ease, box-shadow .3s ease;\n  position: relative;\n  will-change: transform;\n}\n\n.project-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(240, 169, 62, 0.4);\n  box-shadow: 0 20px 60px -20px rgba(0, 0, 0, 0.6), 0 0 40px -16px var(--%NS%color-primary-glow);\n}\n\n.project-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  opacity: 1;\n  transition: opacity .4s ease;\n  pointer-events: none;\n  z-index: 0;\n}\n\n.project-card[_ngcontent-%COMP%]:hover   .project-glow[_ngcontent-%COMP%] { opacity: 1; }\n\n.project-thumb[_ngcontent-%COMP%] {\n  height: 170px;\n  background:\n    radial-gradient(circle at 50% 50%, rgba(240, 169, 62, 0.08), transparent 60%),\n    linear-gradient(135deg, var(--%NS%color-bg-alt) 0%, var(--%NS%color-surface-raised) 100%);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 1px solid var(--%NS%color-border);\n  overflow: hidden;\n}\n\n.project-visual-missing[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  padding: 7px 10px;\n  border: 1px dashed var(--%NS%color-text-faint);\n  border-radius: 999px;\n  color: var(--%NS%color-text-muted);\n  font-family: var(--%NS%font-mono);\n  font-size: 0.7rem;\n}\n\n.project-slides[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  width: 400%;\n  flex: 0 0 400%;\n  height: 100%;\n  animation: _ngcontent-%COMP%_project-slides 9s ease-in-out infinite !important;\n  animation-play-state: running !important;\n  will-change: transform;\n}\n\n.project-slide[_ngcontent-%COMP%] {\n  position: relative;\n  width: 25%;\n  height: 100%;\n  flex: 0 0 25%;\n  overflow: hidden;\n}\n\n.project-thumb[_ngcontent-%COMP%]   .thumb-image[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  z-index: 1;\n  opacity: 1;\n  transform: scale(1.08);\n  transition: opacity .6s ease;\n}\n\n.project-thumb[_ngcontent-%COMP%]   .thumb-image.is-loaded[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n@keyframes _ngcontent-%COMP%_project-slides {\n  0%, 22.2222% { transform: translateX(0); }\n  33.3333%, 55.5555% { transform: translateX(-25%); }\n  66.6666%, 88.8888% { transform: translateX(-50%); }\n  100% { transform: translateX(-75%); }\n}\n\n.slide-label[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  bottom: 12px;\n  z-index: 2;\n  padding: 5px 9px;\n  border: 1px solid rgba(255, 255, 255, 0.22);\n  border-radius: 999px;\n  background: rgba(10, 14, 20, 0.72);\n  color: var(--%NS%color-text);\n  font-family: var(--%NS%font-mono);\n  font-size: 0.65rem;\n  letter-spacing: 0.04em;\n}\n\n.project-thumb[_ngcontent-%COMP%]   .thumb-icon[_ngcontent-%COMP%], \n.project-thumb[_ngcontent-%COMP%]   .thumb-cat[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n\n.project-thumb[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -60%;\n  width: 50%;\n  height: 100%;\n  background: linear-gradient(105deg, transparent, rgba(255, 255, 255, 0.03), transparent);\n  animation: _ngcontent-%COMP%_shimmer-sweep 4.5s ease-in-out infinite;\n}\n\n.thumb-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  background: rgba(240, 169, 62, 0.1);\n  border: 1px solid rgba(240, 169, 62, 0.2);\n  color: var(--%NS%color-primary);\n  margin-bottom: 14px;\n}\n\n.thumb-cat[_ngcontent-%COMP%] {\n  font-family: var(--%NS%font-mono);\n  font-size: 0.7rem;\n  color: var(--%NS%color-text-faint);\n  letter-spacing: 0.08em;\n}\n\n.project-body[_ngcontent-%COMP%] {\n  padding: 24px 24px 26px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  z-index: 1;\n}\n\n.project-body[_ngcontent-%COMP%]   .cat[_ngcontent-%COMP%] {\n  font-family: var(--%NS%font-mono);\n  font-size: 0.7rem;\n  color: var(--%NS%color-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-weight: 500;\n}\n\n.project-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-top: 10px;\n  transition: color .2s ease;\n}\n.project-card[_ngcontent-%COMP%]:hover   .project-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { color: var(--%NS%color-primary); }\n\n.project-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--%NS%color-text-muted);\n  font-size: 0.9rem;\n  margin-top: 12px;\n  flex: 1;\n  line-height: 1.7;\n}\n\n.stack-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n  margin-top: 18px;\n}\n\n.stack-tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: var(--%NS%font-mono);\n  font-size: 0.65rem;\n  color: var(--%NS%color-text-muted);\n  border: 1px solid var(--%NS%color-border);\n  padding: 4px 9px;\n  border-radius: 100px;\n  background: rgba(21, 28, 38, 0.5);\n  transition: border-color .2s ease, color .2s ease;\n}\n.stack-tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  border-color: var(--%NS%color-primary);\n  color: var(--%NS%color-primary);\n}\n\n.project-detail-link[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  align-self: flex-start;\n}\n\n.see-all[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 48px;\n}\n\n\n.process-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin-top: 8px;\n}\n\n.process-item[_ngcontent-%COMP%] {\n  background: var(--%NS%color-surface);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius);\n  padding: 30px 26px;\n  position: relative;\n  transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease;\n  will-change: transform;\n}\n\n.process-item[_ngcontent-%COMP%]:hover {\n  border-color: rgba(240, 169, 62, 0.3);\n  box-shadow: 0 12px 44px -16px var(--%NS%color-primary-glow);\n}\n\n.process-num[_ngcontent-%COMP%] {\n  font-family: var(--%NS%font-mono);\n  color: var(--%NS%color-primary);\n  font-size: 0.8rem;\n  letter-spacing: 0.1em;\n}\n\n.process-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: rgba(240, 169, 62, 0.08);\n  border: 1px solid rgba(240, 169, 62, 0.15);\n  color: var(--%NS%color-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 16px;\n  margin-bottom: 14px;\n}\n\n.process-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-family: var(--%NS%font-body);\n  font-weight: 600;\n  color: var(--%NS%color-text);\n}\n\n.process-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--%NS%color-text-muted);\n  margin-top: 8px;\n  line-height: 1.6;\n}\n\n\n.arch-strip[_ngcontent-%COMP%] {\n  font-family: var(--%NS%font-mono);\n  font-size: 0.8rem;\n  color: var(--%NS%color-text-muted);\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  background: var(--%NS%color-surface);\n  border: 1px solid var(--%NS%color-border);\n  border-radius: var(--%NS%radius);\n  padding: 24px 28px;\n  margin-top: 40px;\n}\n\n.arch-label[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n  color: var(--%NS%color-text-faint);\n  margin-right: 8px;\n}\n\n.arch-strip[_ngcontent-%COMP%]   span.node[_ngcontent-%COMP%] {\n  color: var(--%NS%color-text);\n  border: 1px solid var(--%NS%color-border);\n  padding: 7px 14px;\n  border-radius: 8px;\n  background: var(--%NS%color-bg);\n  transition: border-color .2s ease, color .2s ease, transform .2s ease;\n}\n\n.arch-strip[_ngcontent-%COMP%]   span.node[_ngcontent-%COMP%]:hover {\n  border-color: var(--%NS%color-primary);\n  color: var(--%NS%color-primary);\n  transform: translateY(-2px);\n}\n\n.arch-strip[_ngcontent-%COMP%]   span.arrow[_ngcontent-%COMP%] { color: var(--%NS%color-text-faint); }\n\n\n@media (max-width: 900px) {\n  .hero[_ngcontent-%COMP%] { padding: 120px 0 100px; }\n  .hero-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; gap: 48px; width: 90%; }\n  .hero-visual[_ngcontent-%COMP%] { max-width: 520px; margin: 0 auto; width: 100%; }\n\n  .badge-angular[_ngcontent-%COMP%] { left: -10px; }\n  .badge-typescript[_ngcontent-%COMP%] { right: -10px; }\n\n  .profile-photo-frame[_ngcontent-%COMP%] { width: min(320px, 100%); height: 410px; }\n\n  .about-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; gap: 40px; }\n  .skills-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr 1fr; }\n  .project-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr 1fr; gap: 16px; }\n  .process-list[_ngcontent-%COMP%] { grid-template-columns: 1fr 1fr; }\n  .stats-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); gap: 12px; }\n  .stat-num[_ngcontent-%COMP%] { font-size: 2rem; }\n}\n\n@media (max-width: 640px) {\n  .hero[_ngcontent-%COMP%] { padding: 110px 0 120px; min-height: 100svh; }\n  .hero[_ngcontent-%COMP%]   app-globe[_ngcontent-%COMP%] { display: none; }\n  .hero-grid[_ngcontent-%COMP%] { width: 92%; }\n  .hero-title[_ngcontent-%COMP%] { font-size: clamp(2rem, 9vw, 2.6rem); }\n\n  .hero-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] { width: 100%; justify-content: center; }\n\n  .hero-links[_ngcontent-%COMP%] { gap: 14px; flex-direction: column; align-items: flex-start; }\n\n  .hero-visual[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 0;\n    flex-direction: column;\n    align-items: center;\n    gap: 24px;\n  }\n  .hero-visual[_ngcontent-%COMP%]   app-profile-card[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n    max-width: 420px;\n  }\n  .profile-photo-frame[_ngcontent-%COMP%] { width: min(240px, 100%); height: 310px; }\n  .profile-initials[_ngcontent-%COMP%] { font-size: 2.4rem; }\n\n  .code-body[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] { font-size: 0.7rem; }\n\n  .badge-angular[_ngcontent-%COMP%] { top: 4%; left: -5px; }\n  .badge-typescript[_ngcontent-%COMP%] { bottom: 12%; right: -5px; }\n  .badge-rxjs[_ngcontent-%COMP%] { bottom: -10px; left: 10%; }\n\n  .scroll-indicator[_ngcontent-%COMP%] { display: none; }\n\n  .stats-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; gap: 10px; }\n  .skills-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .project-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .process-list[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n\n  .arch-strip[_ngcontent-%COMP%] { flex-direction: column; align-items: flex-start; gap: 8px; }\n  .arch-strip[_ngcontent-%COMP%]   span.arrow[_ngcontent-%COMP%] { transform: rotate(90deg); }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Home, [{
        type: Component,
        args: [{ selector: 'app-home', standalone: true, imports: [RouterLink, Certifications, ProfileCard, Globe], template: "@if (showProfileIntro()) {\n  <div class=\"profile-intro\" aria-label=\"Chargement du portfolio\">\n    <app-profile-card />\n  </div>\n}\n\n<!-- ============ HERO SECTION ============ -->\n<section class=\"hero\">\n  <div class=\"orb orb-1\" aria-hidden=\"true\"></div>\n  <div class=\"orb orb-2\" aria-hidden=\"true\"></div>\n  <div class=\"orb orb-3\" aria-hidden=\"true\"></div>\n  <app-globe />\n  <canvas id=\"particles-canvas\" aria-hidden=\"true\"></canvas>\n\n  <div class=\"container hero-grid\">\n    <div class=\"hero-content\">\n      <div class=\"hero-badge reveal\">\n        <span class=\"pulse-dot\"></span>\n        <span class=\"eyebrow\">Angular Talent Lab 2026 \u00B7 Orange Digital Center</span>\n      </div>\n\n        <h1 class=\"hero-title reveal reveal-delay-1\">\n          <span class=\"hero-name gradient-text\">\n            <span class=\"hero-name-line hero-first-name\">FIDELE</span>\n            <span class=\"hero-name-line hero-last-name\">ELOCK SADRACK</span>\n          </span>\n        </h1>\n\n      <div class=\"hero-typing reveal reveal-delay-2\">\n        <span class=\"typing-prefix\">{{ '{' }}</span>\n        <span id=\"typing-text\" class=\"typing-text\"></span>\n        <span class=\"typing-cursor blink-cursor\">|</span>\n        <span class=\"typing-suffix\">{{ '}' }}</span>\n      </div>\n\n      <p class=\"hero-pitch reveal reveal-delay-3\">\n        Certifi\u00E9 <strong>Software Engineering</strong> chez ALX et premi\u00E8re cohorte de\n        l'<strong>Angular Talent Lab 2026</strong> \u2014 je transforme le support terrain\n        en interfaces web structur\u00E9es, pens\u00E9es pour les vrais usages.\n      </p>\n\n      <div class=\"hero-actions reveal reveal-delay-4\">\n        <a routerLink=\"/projects\" class=\"btn btn-primary\">\n          <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\">\n            <path d=\"M2 8h11M9 3l5 5-5 5\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n          </svg>\n          Voir mes projets\n        </a>\n        <a routerLink=\"/contact\" class=\"btn btn-ghost\">\n          <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\">\n            <path d=\"M8 1v14M1 8h14\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n          </svg>\n          Parlons de votre projet\n        </a>\n      </div>\n\n      <div class=\"hero-links reveal reveal-delay-5\">\n        <a href=\"https://github.com/Hunter13-cmr\" target=\"_blank\" rel=\"noopener noreferrer\">\n          <svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n            <path d=\"M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z\"/>\n          </svg>\n          GitHub\n        </a>\n        <a href=\"https://linkedin.com/in/esf1305\" target=\"_blank\" rel=\"noopener noreferrer\">\n          <svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n            <path d=\"M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z\"/>\n          </svg>\n          LinkedIn\n        </a>\n        <span class=\"hero-location\">\n          <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n            <path d=\"M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11z\"/>\n            <circle cx=\"12\" cy=\"10\" r=\"2.5\"/>\n          </svg>\n          Douala, Cameroun\n        </span>\n      </div>\n    </div>\n\n    <!-- Photo Frame (left) + Profile Card -->\n    <div class=\"hero-visual reveal reveal-delay-3\">\n      <div class=\"profile-photo-frame\">\n        <div class=\"profile-photo-placeholder\">\n          <img\n            src=\"assets/images/projects/le-calao-dore.PNG\"\n            alt=\"Aper\u00E7u du projet Le Calao Dor\u00E9\"\n            class=\"profile-photo\"\n          />\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Scroll indicator -->\n  <div class=\"scroll-indicator\">\n    <span class=\"scroll-mouse\">\n      <span class=\"scroll-wheel\"></span>\n    </span>\n    <span class=\"scroll-text\">scroll</span>\n  </div>\n</section>\n\n<!-- ============ TECH MARQUEE ============ -->\n<div class=\"tech-marquee marquee\">\n  <div class=\"marquee-track\">\n    <span>Angular</span><span class=\"sep\">\u2726</span>\n    <span>TypeScript</span><span class=\"sep\">\u2726</span>\n    <span>RxJS</span><span class=\"sep\">\u2726</span>\n    <span>HTML5</span><span class=\"sep\">\u2726</span>\n    <span>CSS3</span><span class=\"sep\">\u2726</span>\n    <span>Node.js</span><span class=\"sep\">\u2726</span>\n    <span>MySQL</span><span class=\"sep\">\u2726</span>\n    <span>REST API</span><span class=\"sep\">\u2726</span>\n    <span>Git</span><span class=\"sep\">\u2726</span>\n    <span>Vercel</span><span class=\"sep\">\u2726</span>\n    <span>Angular</span><span class=\"sep\">\u2726</span>\n    <span>TypeScript</span><span class=\"sep\">\u2726</span>\n    <span>RxJS</span><span class=\"sep\">\u2726</span>\n    <span>HTML5</span><span class=\"sep\">\u2726</span>\n    <span>CSS3</span><span class=\"sep\">\u2726</span>\n    <span>Node.js</span><span class=\"sep\">\u2726</span>\n    <span>MySQL</span><span class=\"sep\">\u2726</span>\n    <span>REST API</span><span class=\"sep\">\u2726</span>\n    <span>Git</span><span class=\"sep\">\u2726</span>\n    <span>Vercel</span><span class=\"sep\">\u2726</span>\n  </div>\n</div>\n\n<!-- ============ STATS BAR ============ -->\n<section class=\"stats-bar\">\n  <div class=\"container stats-grid\">\n    <div class=\"stat reveal\" data-tilt>\n      <span class=\"stat-num\" data-counter=\"3\" data-suffix=\"+\">0+</span>\n      <span class=\"stat-label\">Projets r\u00E9alis\u00E9s</span>\n    </div>\n    <div class=\"stat reveal reveal-delay-1\" data-tilt>\n      <span class=\"stat-num\" data-counter=\"6\" data-suffix=\"+\">0+</span>\n      <span class=\"stat-label\">Projets acad\u00E9miques</span>\n    </div>\n    <div class=\"stat reveal reveal-delay-2\" data-tilt>\n      <span class=\"stat-num\" data-counter=\"7\" data-suffix=\"+\">0+</span>\n      <span class=\"stat-label\">Certifications obtenues</span>\n    </div>\n    <div class=\"stat reveal reveal-delay-3\" data-tilt>\n      <span class=\"stat-num\" data-counter=\"2\" data-suffix=\"\">0</span>\n      <span class=\"stat-label\">Organisations certifiantes</span>\n    </div>\n  </div>\n</section>\n\n<!-- ============ \u00C0 PROPOS (aper\u00E7u) ============ -->\n<section class=\"section about-section\" id=\"about-preview\">\n  <div class=\"section-accent\"></div>\n  <div class=\"container about-grid\">\n    <div class=\"reveal\">\n      <span class=\"eyebrow\">\u00C0 propos</span>\n      <h2>D'un poste de support \u00E0 la conception d'interfaces</h2>\n      <p>\n        Avant de d\u00E9velopper, j'ai pass\u00E9 du temps <strong>sur le terrain et au support</strong> \u2014\n        \u00E0 diagnostiquer des pannes, configurer des postes, accompagner des utilisateurs.\n        Cette exp\u00E9rience m'a appris \u00E0 comprendre un probl\u00E8me avant d'y r\u00E9pondre.\n      </p>\n      <p>\n        Aujourd'hui, je d\u00E9veloppe avec <strong>Angular</strong> dans le cadre de la premi\u00E8re\n        cohorte de l'<strong>Angular Talent Lab 2026</strong> \u00E0 l'Orange Digital Center Cameroun.\n      </p>\n      <a routerLink=\"/about\" class=\"btn btn-ghost\">En savoir plus \u2192</a>\n    </div>\n\n    <div class=\"seeking-box card-shimmer reveal reveal-delay-2\" data-tilt>\n      <h3>Ce que je cherche</h3>\n      <ul>\n        <li>Une opportunit\u00E9 junior en d\u00E9veloppement Front-End / Angular</li>\n        <li>Une \u00E9quipe o\u00F9 le code est relu, discut\u00E9, am\u00E9lior\u00E9</li>\n        <li>Un environnement pour progresser rapidement et durablement</li>\n        <li>La possibilit\u00E9 d'apporter aussi une culture support / IT</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n<!-- ============ COMP\u00C9TENCES ============ -->\n<section class=\"section\" id=\"skills\">\n  <div class=\"section-accent\"></div>\n  <div class=\"container\">\n    <div class=\"section-head reveal\">\n      <span class=\"eyebrow\">Comp\u00E9tences</span>\n      <h2>Ce que j'utilise, dans le contexte des projets</h2>\n    </div>\n\n    <div class=\"skills-grid\">\n      <div class=\"skill-cat reveal\" data-tilt>\n        <span class=\"eyebrow\">Front-End</span>\n        <h3>Angular & interface</h3>\n        <div class=\"skill-list\">\n          <div class=\"skill-row\"><span>Angular</span><span class=\"lvl\">projet</span><div class=\"skill-bar\"><span style=\"width:85%\"></span></div></div>\n          <div class=\"skill-row\"><span>TypeScript</span><span class=\"lvl\">projet</span><div class=\"skill-bar\"><span style=\"width:80%\"></span></div></div>\n          <div class=\"skill-row\"><span>JavaScript</span><span class=\"lvl\">projet</span><div class=\"skill-bar\"><span style=\"width:78%\"></span></div></div>\n          <div class=\"skill-row\"><span>HTML5 / CSS3</span><span class=\"lvl\">projet</span><div class=\"skill-bar\"><span style=\"width:85%\"></span></div></div>\n          <div class=\"skill-row\"><span>Bootstrap</span><span class=\"lvl\">projet</span><div class=\"skill-bar\"><span style=\"width:70%\"></span></div></div>\n        </div>\n      </div>\n      <div class=\"skill-cat reveal reveal-delay-1\" data-tilt>\n        <span class=\"eyebrow\">Back-End</span>\n        <h3>Serveur & logique</h3>\n        <div class=\"skill-list\">\n          <div class=\"skill-row\"><span>Node.js</span><span class=\"lvl\">projet</span><div class=\"skill-bar\"><span style=\"width:72%\"></span></div></div>\n          <div class=\"skill-row\"><span>PHP</span><span class=\"lvl\">projet</span><div class=\"skill-bar\"><span style=\"width:65%\"></span></div></div>\n          <div class=\"skill-row\"><span>Python</span><span class=\"lvl\">notions</span><div class=\"skill-bar\"><span style=\"width:50%\"></span></div></div>\n          <div class=\"skill-row\"><span>Django / Flask</span><span class=\"lvl\">notions</span><div class=\"skill-bar\"><span style=\"width:45%\"></span></div></div>\n        </div>\n      </div>\n      <div class=\"skill-cat reveal reveal-delay-2\" data-tilt>\n        <span class=\"eyebrow\">Data</span>\n        <h3>Bases de donn\u00E9es</h3>\n        <div class=\"skill-list\">\n          <div class=\"skill-row\"><span>MySQL</span><span class=\"lvl\">projet</span><div class=\"skill-bar\"><span style=\"width:75%\"></span></div></div>\n          <div class=\"skill-row\"><span>MongoDB</span><span class=\"lvl\">notions</span><div class=\"skill-bar\"><span style=\"width:45%\"></span></div></div>\n          <div class=\"skill-row\"><span>SQLite</span><span class=\"lvl\">notions</span><div class=\"skill-bar\"><span style=\"width:55%\"></span></div></div>\n        </div>\n      </div>\n      <div class=\"skill-cat reveal\" data-tilt>\n        <span class=\"eyebrow\">API & Architecture</span>\n        <h3>Communication</h3>\n        <div class=\"skill-list\">\n          <div class=\"skill-row\"><span>REST API</span><span class=\"lvl\">projet</span><div class=\"skill-bar\"><span style=\"width:78%\"></span></div></div>\n          <div class=\"skill-row\"><span>HTTP</span><span class=\"lvl\">projet</span><div class=\"skill-bar\"><span style=\"width:75%\"></span></div></div>\n          <div class=\"skill-row\"><span>Donn\u00E9es asynchrones</span><span class=\"lvl\">projet</span><div class=\"skill-bar\"><span style=\"width:73%\"></span></div></div>\n        </div>\n      </div>\n      <div class=\"skill-cat reveal reveal-delay-1\" data-tilt>\n        <span class=\"eyebrow\">Outils</span>\n        <h3>Environnement dev</h3>\n        <div class=\"skill-list\">\n          <div class=\"skill-row\"><span>Git / GitHub</span><span class=\"lvl\">r\u00E9gulier</span><div class=\"skill-bar\"><span style=\"width:80%\"></span></div></div>\n          <div class=\"skill-row\"><span>VS Code</span><span class=\"lvl\">r\u00E9gulier</span><div class=\"skill-bar\"><span style=\"width:85%\"></span></div></div>\n          <div class=\"skill-row\"><span>Vercel</span><span class=\"lvl\">projet</span><div class=\"skill-bar\"><span style=\"width:70%\"></span></div></div>\n        </div>\n      </div>\n      <div class=\"skill-cat reveal reveal-delay-2\" data-tilt>\n        <span class=\"eyebrow\">IT & Support</span>\n        <h3>Terrain</h3>\n        <div class=\"skill-list\">\n          <div class=\"skill-row\"><span>Support utilisateur</span><span class=\"lvl\">exp\u00E9rience</span><div class=\"skill-bar\"><span style=\"width:90%\"></span></div></div>\n          <div class=\"skill-row\"><span>Diagnostic mat\u00E9riel</span><span class=\"lvl\">exp\u00E9rience</span><div class=\"skill-bar\"><span style=\"width:88%\"></span></div></div>\n          <div class=\"skill-row\"><span>R\u00E9seaux (LAN, Wi-Fi, DNS)</span><span class=\"lvl\">notions</span><div class=\"skill-bar\"><span style=\"width:60%\"></span></div></div>\n          <div class=\"skill-row\"><span>Windows / M365</span><span class=\"lvl\">exp\u00E9rience</span><div class=\"skill-bar\"><span style=\"width:85%\"></span></div></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- ============ CERTIFICATIONS ============ -->\n<app-certifications />\n\n<!-- ============ PROJETS ============ -->\n<section class=\"section\" id=\"projects-preview\">\n  <div class=\"section-accent\"></div>\n  <div class=\"container\">\n    <div class=\"section-head reveal\">\n      <span class=\"eyebrow\">Projets</span>\n      <h2>3 projets, 3 probl\u00E8mes, 3 solutions</h2>\n    </div>\n\n    @if (loading()) {\n      <p class=\"state-msg\">Chargement des projets\u2026</p>\n    } @else if (error()) {\n      <p class=\"state-msg state-error\">{{ error() }}</p>\n    } @else if (projects().length === 0) {\n      <p class=\"state-msg\">Aucun projet \u00E0 afficher pour le moment.</p>\n    } @else {\n      <div class=\"project-grid\">\n        @for (project of projects(); track project.id) {\n          <article class=\"project-card card-shimmer reveal\" data-tilt>\n            <div class=\"project-glow\" [style.background]=\"'radial-gradient(circle at 50% 50%, var(--color-primary-glow), transparent 70%)'\"></div>\n            <div class=\"project-thumb\">\n              @if (project.image) {\n                <div class=\"project-slides\">\n                  @for (image of getProjectImages(project); track $index) {\n                    <div class=\"project-slide\">\n                      <img [src]=\"image\" [alt]=\"project.title + ' - image ' + ($index + 1)\" class=\"thumb-image\" loading=\"eager\" (load)=\"onProjectImageLoad($event)\" />\n                    </div>\n                  }\n                </div>\n              } @else {\n                <span class=\"project-visual-missing\">Aper\u00E7u \u00E0 ajouter</span>\n              }\n             <!-- <span class=\"thumb-icon\">\n                <svg width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                  <rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/>\n                  <path d=\"M9 8h6M12 8v8\"/>\n                </svg>\n              </span> -->\n            </div>\n            <div class=\"project-body\">\n              <span class=\"cat\">{{ project.category }}</span>\n              <h3>{{ project.title }}</h3>\n              <p>{{ project.shortDescription }}</p>\n              <div class=\"stack-tags\">\n                @for (tech of project.technologies; track tech) {\n                  <span>{{ tech }}</span>\n                }\n              </div>\n              <a [routerLink]=\"['/projects', project.slug]\" class=\"btn btn-ghost project-detail-link\">\n                Voir l'\u00E9tude de cas \u2192\n              </a>\n            </div>\n          </article>\n        }\n      </div>\n    }\n\n    <div class=\"see-all reveal\">\n      <a routerLink=\"/projects\" class=\"btn btn-primary\">Tous les projets</a>\n    </div>\n  </div>\n</section>\n\n<!-- ============ PROCESSUS ============ -->\n<section class=\"section\" style=\"border-bottom:none;\">\n  <div class=\"section-accent\"></div>\n  <div class=\"container\">\n    <div class=\"section-head reveal\">\n      <span class=\"eyebrow\">M\u00E9thode</span>\n      <h2>Comment je travaille</h2>\n    </div>\n\n    <div class=\"process-list\">\n      <div class=\"process-item reveal\" data-tilt>\n        <div class=\"process-num\">01</div>\n        <div class=\"process-icon\">\n          <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\">\n            <circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 8v8M8 12h8\"/>\n          </svg>\n        </div>\n        <h3>Comprendre</h3>\n        <p>Cerner le probl\u00E8me r\u00E9el avant d'\u00E9crire une ligne de code.</p>\n      </div>\n      <div class=\"process-item reveal reveal-delay-1\" data-tilt>\n        <div class=\"process-num\">02</div>\n        <div class=\"process-icon\">\n          <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\">\n            <rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/>\n            <rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/>\n          </svg>\n        </div>\n        <h3>Structurer</h3>\n        <p>D\u00E9couper la solution en composants et services clairs.</p>\n      </div>\n      <div class=\"process-item reveal reveal-delay-2\" data-tilt>\n        <div class=\"process-num\">03</div>\n        <div class=\"process-icon\">\n          <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\">\n            <path d=\"M3 21l6-6M9 15l6-6M15 9l6-6M3 21h18\"/>\n          </svg>\n        </div>\n        <h3>Construire</h3>\n        <p>D\u00E9velopper proprement, avec un typage rigoureux.</p>\n      </div>\n      <div class=\"process-item reveal\" data-tilt>\n        <div class=\"process-num\">04</div>\n        <div class=\"process-icon\">\n          <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\">\n            <path d=\"M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1\"/>\n            <circle cx=\"12\" cy=\"12\" r=\"3\"/>\n          </svg>\n        </div>\n        <h3>Tester</h3>\n        <p>V\u00E9rifier le comportement, pas seulement le rendu visuel.</p>\n      </div>\n      <div class=\"process-item reveal reveal-delay-1\" data-tilt>\n        <div class=\"process-num\">05</div>\n        <div class=\"process-icon\">\n          <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\">\n            <path d=\"M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z\"/>\n            <path d=\"M9 12l2 2 4-4\"/>\n          </svg>\n        </div>\n        <h3>D\u00E9ployer</h3>\n        <p>Mettre en ligne sur Vercel, avec un build v\u00E9rifi\u00E9.</p>\n      </div>\n      <div class=\"process-item reveal reveal-delay-2\" data-tilt>\n        <div class=\"process-num\">06</div>\n        <div class=\"process-icon\">\n          <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\">\n            <path d=\"M21 12a9 9 0 1 1-2.6-6.3M21 3v6h-6\"/>\n          </svg>\n        </div>\n        <h3>Am\u00E9liorer</h3>\n        <p>Revenir sur le code une fois qu'il est utilis\u00E9.</p>\n      </div>\n    </div>\n\n    <div class=\"arch-strip reveal\">\n      <span class=\"arch-label\">Architecture Angular</span>\n      <span class=\"node\">Component</span><span class=\"arrow\">\u2192</span>\n      <span class=\"node\">Service</span><span class=\"arrow\">\u2192</span>\n      <span class=\"node\">HttpClient</span><span class=\"arrow\">\u2192</span>\n      <span class=\"node\">RxJS</span><span class=\"arrow\">\u2192</span>\n      <span class=\"node\">Signal</span><span class=\"arrow\">\u2192</span>\n      <span class=\"node\">UI</span>\n    </div>\n  </div>\n</section>\n", styles: ["/* ============ PROFILE INTRO ============ */\n.profile-intro {\n  position: fixed;\n  inset: 0;\n  z-index: 200;\n  display: grid;\n  place-items: center;\n  padding: 24px;\n  background: var(--color-bg);\n  animation: profile-intro-out .2s ease 1.8s forwards;\n}\n\n.profile-intro ~ * {\n  visibility: hidden;\n  pointer-events: none;\n}\n\n.profile-intro app-profile-card {\n  display: block;\n  width: min(420px, 100%);\n  animation: profile-intro-in .8s cubic-bezier(.16, 1, .3, 1) both;\n}\n\n@keyframes profile-intro-in {\n  from { opacity: 0; transform: translateY(18px) scale(.72); }\n  to { opacity: 1; transform: translateY(0) scale(1); }\n}\n\n@keyframes profile-intro-out {\n  to { opacity: 0; visibility: hidden; pointer-events: none; }\n}\n\n/* ============ HERO ============ */\n.hero {\n  position: relative;\n  min-height: 92vh;\n  display: flex;\n  align-items: center;\n  padding: 0px 0 0px;\n  overflow: hidden;\n  background:\n    radial-gradient(ellipse 80% 60% at 50% -10%, rgba(240, 169, 62, 0.08), transparent),\n    radial-gradient(ellipse 60% 50% at 90% 50%, rgba(196, 77, 255, 0.05), transparent),\n    radial-gradient(ellipse 50% 50% at 10% 80%, rgba(78, 201, 160, 0.06), transparent);\n}\n\n/* Globe canvas covers the entire hero background */\n.hero app-globe {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n  pointer-events: none;\n  overflow: hidden;\n}\n\n.hero::before {\n  content: '';\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(240, 169, 62, 0.03) 1px, transparent 1px),\n    linear-gradient(90deg, rgba(240, 169, 62, 0.03) 1px, transparent 1px);\n  background-size: 56px 56px;\n  mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent);\n  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent);\n  pointer-events: none;\n}\n\n.hero-grid {\n  display: grid;\n  grid-template-columns: 1.1fr 0.9fr;\n  gap: 60px;\n  align-items: center;\n  width: 90%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.hero-content { position: relative; z-index: 2; }\n\n.hero-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(240, 169, 62, 0.06);\n  border: 1px solid rgba(240, 169, 62, 0.18);\n  border-radius: 100px;\n  padding: 8px 18px;\n  margin-bottom: 28px;\n  backdrop-filter: blur(8px);\n}\n\n.pulse-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--color-primary);\n  position: relative;\n  flex-shrink: 0;\n}\n.pulse-dot::after {\n  content: '';\n  position: absolute;\n  inset: -4px;\n  border-radius: 50%;\n  background: var(--color-primary);\n  opacity: 0.4;\n  animation: pulse-ring 2s cubic-bezier(.4, 0, .2, 1) infinite;\n}\n@keyframes pulse-ring {\n  0% { transform: scale(0.5); opacity: 0.6; }\n  100% { transform: scale(2.2); opacity: 0; }\n}\n\n.hero-title {\n  font-size: clamp(2.6rem, 6vw, 4.6rem);\n  line-height: 1.02;\n  letter-spacing: -0.03em;\n  margin-bottom: 18px;\n}\n\n.hero-name {\n  display: block;\n  background: linear-gradient(135deg, #F0A93E 0%, #FF6B6B 40%, #C44DFF 80%);\n  background-size: 200% 200%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  animation: gradient-shift 6s ease infinite;\n}\n\n.hero-name-line {\n  display: block;\n  line-height: 1;\n}\n\n.hero-first-name {\n  font-weight: 700;\n}\n\n.hero-last-name {\n  font-weight: 500;\n  font-size: 0.75em;\n  opacity: 0.9;\n}\n@keyframes gradient-shift {\n  0%, 100% { background-position: 0% 50%; }\n  50% { background-position: 100% 50%; }\n}\n\n.hero-typing {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-family: var(--font-mono);\n  font-size: clamp(1rem, 2vw, 1.35rem);\n  color: var(--color-secondary);\n  margin-bottom: 24px;\n  min-height: 32px;\n}\n\n.typing-prefix, .typing-suffix { color: var(--color-text-faint); }\n.typing-text { color: var(--color-text); font-weight: 500; }\n\n.typing-cursor {\n  color: var(--color-primary);\n  font-weight: 700;\n}\n\n.blink-cursor {\n  animation: blink-cursor 1s steps(1) infinite;\n}\n@keyframes blink-cursor {\n  50% { opacity: 0; }\n}\n\n.hero-pitch {\n  color: var(--color-text-muted);\n  font-size: 1.1rem;\n  max-width: 48ch;\n  margin-bottom: 36px;\n  line-height: 1.7;\n}\n.hero-pitch strong { color: var(--color-text); font-weight: 600; }\n\n.hero-actions {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-bottom: 36px;\n}\n\n.hero-links {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  flex-wrap: wrap;\n  font-family: var(--font-mono);\n  font-size: 0.8rem;\n  color: var(--color-text-faint);\n}\n\n.hero-links a {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  transition: color .2s ease, transform .2s ease;\n}\n.hero-links a:hover {\n  color: var(--color-primary);\n  transform: translateY(-2px);\n}\n\n.hero-location {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  color: var(--color-text-faint);\n}\n\n/* ============ HERO VISUAL \u2014 CODE CARD ============ */\n.hero-visual {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 520px;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n\n.hero-visual app-profile-card {\n  flex: 1 1 280px;\n  max-width: 420px;\n  min-width: 260px;\n}\n\n/* ============ PROFILE PHOTO FRAME ============ */\n.profile-photo-frame {\n  position: relative;\n  width: min(360px, 100%);\n  height: 460px;\n  border-radius: 16px;\n  border: 1px solid rgba(240, 169, 62, 0.25);\n  background:\n    radial-gradient(circle at 50% 30%, rgba(240, 169, 62, 0.08), transparent 60%),\n    linear-gradient(160deg, rgba(21, 28, 38, 0.9), rgba(15, 20, 28, 0.95));\n  box-shadow:\n    0 20px 60px -20px rgba(0, 0, 0, 0.6),\n    0 0 40px -16px var(--color-primary-glow),\n    inset 0 1px 0 rgba(255, 255, 255, 0.04);\n  backdrop-filter: blur(16px);\n  overflow: hidden;\n  flex-shrink: 0;\n  transition: border-color .3s ease, box-shadow .3s ease, transform .3s ease;\n  order: 0;\n}\n\n.profile-photo-frame:hover {\n  border-color: rgba(240, 169, 62, 0.5);\n  box-shadow:\n    0 24px 70px -20px rgba(0, 0, 0, 0.7),\n    0 0 50px -12px var(--color-primary-glow),\n    inset 0 1px 0 rgba(255, 255, 255, 0.06);\n  transform: translateY(-4px);\n}\n\n.profile-photo-frame::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -60%;\n  width: 50%;\n  height: 100%;\n  background: linear-gradient(105deg, transparent, rgba(255, 255, 255, 0.04), transparent);\n  animation: shimmer-sweep 4s ease-in-out infinite;\n  pointer-events: none;\n  z-index: 1;\n}\n\n.profile-photo-frame::after {\n  content: '';\n  position: absolute;\n  inset: 0;\n  border-radius: 16px;\n  border: 1px solid transparent;\n  background: linear-gradient(135deg, rgba(240, 169, 62, 0.15), transparent 40%, rgba(78, 201, 160, 0.1)) border-box;\n  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n  pointer-events: none;\n  z-index: 1;\n}\n\n.profile-photo-placeholder {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n}\n\n.profile-initials {\n  font-family: var(--font-display);\n  font-size: 3.2rem;\n  font-weight: 700;\n  background: linear-gradient(135deg, #F0A93E 0%, #FF6B6B 50%, #C44DFF 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  letter-spacing: -0.02em;\n  line-height: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n\n.profile-initials span {\n  font-size: 1.4rem;\n  font-weight: 500;\n  opacity: 0.85;\n}\n\n/* Photo slot \u2014 replace placeholder content with an <img> when ready */\n.profile-photo-frame .profile-photo {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 16px;\n  z-index: 2;\n}\n\n.code-card {\n  background: rgba(21, 28, 38, 0.85);\n  border: 1px solid rgba(240, 169, 62, 0.15);\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow:\n    0 30px 80px -20px rgba(0, 0, 0, 0.7),\n    0 0 60px -20px rgba(240, 169, 62, 0.15),\n    inset 0 1px 0 rgba(255, 255, 255, 0.04);\n  backdrop-filter: blur(20px);\n  transform-style: preserve-3d;\n}\n\n.code-card::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -60%;\n  width: 50%;\n  height: 100%;\n  background: linear-gradient(105deg, transparent, rgba(255, 255, 255, 0.03), transparent);\n  animation: shimmer-sweep 4s ease-in-out infinite;\n  pointer-events: none;\n}\n@keyframes shimmer-sweep {\n  0% { left: -60%; }\n  50%, 100% { left: 120%; }\n}\n\n.code-card-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  background: rgba(15, 20, 28, 0.9);\n  border-bottom: 1px solid var(--color-border);\n}\n\n.code-dots { display: flex; gap: 6px; }\n.code-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.code-dot.red { background: #FF5F57; }\n.code-dot.yellow { background: #FEBC2E; }\n.code-dot.green { background: #28C840; }\n\n.code-file {\n  flex: 1;\n  font-family: var(--font-mono);\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  text-align: center;\n}\n\n.code-status {\n  font-family: var(--font-mono);\n  font-size: 0.65rem;\n  color: var(--color-secondary);\n  background: rgba(78, 201, 160, 0.1);\n  padding: 3px 10px;\n  border-radius: 100px;\n}\n\n.code-body {\n  padding: 26px 20px 20px;\n  overflow-x: auto;\n}\n\n.code-body pre {\n  font-family: var(--font-mono);\n  font-size: 0.8rem;\n  line-height: 1.9;\n  color: var(--color-text-muted);\n  white-space: pre;\n}\n\n.code-comment { color: var(--color-text-faint); font-style: italic; }\n.code-keyword { color: #C792EA; }\n.code-string { color: var(--color-primary); }\n.code-property { color: var(--color-accent); }\n.code-punctuation { color: var(--color-text-faint); }\n\n.code-cursor {\n  display: inline-block;\n  color: var(--color-primary);\n  animation: blink-cursor 1s steps(1) infinite;\n  margin-left: 2px;\n}\n\n.code-card-footer {\n  display: flex;\n  gap: 16px;\n  padding: 12px 18px;\n  border-top: 1px solid var(--color-border);\n  background: rgba(15, 20, 28, 0.6);\n}\n\n.code-lint {\n  font-family: var(--font-mono);\n  font-size: 0.65rem;\n  color: var(--color-text-faint);\n}\n.code-lint.success {\n  color: var(--color-secondary);\n  margin-left: auto;\n}\n\n/* ============ FLOATING BADGES ============ */\n.float-badge {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-family: var(--font-mono);\n  font-size: 0.7rem;\n  color: var(--color-text);\n  background: rgba(21, 28, 38, 0.9);\n  border: 1px solid var(--color-border);\n  border-radius: 100px;\n  padding: 8px 14px;\n  backdrop-filter: blur(12px);\n  box-shadow: 0 8px 32px -8px rgba(0, 0, 0, 0.5);\n  animation: float-badge 5s ease-in-out infinite;\n  z-index: 3;\n}\n\n.badge-angular { top: 8%; left: -30px; animation-delay: 0s; }\n.badge-typescript { bottom: 18%; right: -25px; animation-delay: -1.5s; }\n.badge-rxjs { bottom: -15px; left: 18%; animation-delay: -3s; }\n\n@keyframes float-badge {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-10px); }\n}\n\n/* ============ SCROLL INDICATOR ============ */\n.scroll-indicator {\n  position: absolute;\n  bottom: 24px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  z-index: 3;\n  opacity: 0.7;\n}\n\n.scroll-mouse {\n  width: 26px;\n  height: 42px;\n  border: 2px solid var(--color-text-faint);\n  border-radius: 16px;\n  display: flex;\n  justify-content: center;\n  padding-top: 7px;\n}\n\n.scroll-wheel {\n  width: 4px;\n  height: 8px;\n  border-radius: 4px;\n  background: var(--color-primary);\n  animation: scroll-wheel 1.8s ease-in-out infinite;\n}\n@keyframes scroll-wheel {\n  0% { transform: translateY(0); opacity: 1; }\n  70% { transform: translateY(14px); opacity: 0; }\n  100% { transform: translateY(0); opacity: 0; }\n}\n\n.scroll-text {\n  font-family: var(--font-mono);\n  font-size: 0.6rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--color-text-faint);\n}\n\n/* ============ TECH MARQUEE ============ */\n.tech-marquee {\n  padding: 28px 0;\n  border-top: 1px solid var(--color-border);\n  border-bottom: 1px solid var(--color-border);\n  background: rgba(15, 20, 28, 0.6);\n  backdrop-filter: blur(12px);\n  overflow: hidden;\n  position: relative;\n}\n\n.tech-marquee .marquee-track {\n  display: inline-flex;\n  width: max-content;\n  flex-shrink: 0;\n  gap: 48px;\n  padding-right: 0;\n  animation: marquee-right 18s linear infinite;\n  will-change: transform;\n}\n\n.tech-marquee .marquee-track span {\n  font-family: var(--font-mono);\n  font-size: 0.9rem;\n  color: var(--color-text-muted);\n  letter-spacing: 0.06em;\n  white-space: nowrap;\n}\n\n.tech-marquee .sep { color: var(--color-primary); opacity: 0.6; }\n\n/* The duplicated track enters from the left and moves toward the right. */\n@keyframes marquee-right {\n  0% { transform: translate3d(-50%, 0, 0); }\n  100% { transform: translate3d(0, 0, 0); }\n}\n\n/* ============ STATS BAR ============ */\n.stats-bar {\n  padding: 48px 0;\n  border-bottom: 1px solid var(--color-border);\n  background: linear-gradient(135deg, rgba(240, 169, 62, 0.03), rgba(78, 201, 160, 0.03));\n}\n\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n\n.stat {\n  text-align: center;\n  padding: 28px 20px;\n  border-radius: 12px;\n  background: rgba(21, 28, 38, 0.5);\n  border: 1px solid var(--color-border);\n  transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease;\n  will-change: transform;\n}\n.stat:hover {\n  border-color: rgba(240, 169, 62, 0.4);\n  box-shadow: 0 12px 40px -12px var(--color-primary-glow);\n}\n\n.stat-num {\n  display: block;\n  font-family: var(--font-display);\n  font-size: 2.6rem;\n  font-weight: 700;\n  background: linear-gradient(135deg, var(--color-primary), #FF6B6B);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n\n.stat-label {\n  font-family: var(--font-mono);\n  font-size: 0.72rem;\n  color: var(--color-text-muted);\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n/* ============ ABOUT ============ */\n.about-section {\n  background:\n    radial-gradient(ellipse 50% 40% at 80% 50%, rgba(78, 201, 160, 0.04), transparent),\n    radial-gradient(ellipse 50% 40% at 10% 50%, rgba(240, 169, 62, 0.04), transparent);\n}\n\n.about-grid {\n  display: grid;\n  grid-template-columns: 1.4fr 1fr;\n  gap: 64px;\n  align-items: start;\n}\n\n.about-grid h2 {\n  font-size: clamp(1.6rem, 3vw, 2.2rem);\n  margin-top: 12px;\n  margin-bottom: 8px;\n}\n\n.about-grid p {\n  color: var(--color-text-muted);\n  margin: 16px 0;\n  font-size: 1.02rem;\n  line-height: 1.8;\n}\n.about-grid p strong {\n  color: var(--color-text);\n  font-weight: 600;\n}\n\n.about-grid .btn { margin-top: 12px; }\n\n.seeking-box {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-left: 3px solid var(--color-primary);\n  border-radius: var(--radius);\n  padding: 30px 28px;\n  align-self: start;\n  transition: border-color .3s ease, box-shadow .3s ease;\n}\n.seeking-box:hover {\n  border-color: rgba(240, 169, 62, 0.4);\n  box-shadow: 0 16px 60px -20px var(--color-primary-glow);\n}\n\n.seeking-box h3 {\n  font-size: 1.05rem;\n  margin-bottom: 16px;\n  color: var(--color-text);\n}\n\n.seeking-box ul li {\n  font-size: 0.92rem;\n  color: var(--color-text-muted);\n  padding: 9px 0;\n  border-top: 1px dashed var(--color-border);\n  position: relative;\n  padding-left: 20px;\n}\n\n.seeking-box ul li:first-child { border-top: none; }\n\n.seeking-box ul li::before {\n  content: '\u2192';\n  position: absolute;\n  left: 0;\n  color: var(--color-primary);\n  font-family: var(--font-mono);\n  font-size: 0.8rem;\n}\n\n/* ============ SKILLS ============ */\n.skills-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\n.skill-cat {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  padding: 28px 26px;\n  transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease;\n  will-change: transform;\n}\n\n.skill-cat:hover {\n  border-color: rgba(240, 169, 62, 0.3);\n  box-shadow: 0 12px 44px -16px var(--color-primary-glow);\n}\n\n.skill-cat h3 {\n  font-size: 1.05rem;\n  margin-top: 10px;\n  font-family: var(--font-body);\n  font-weight: 600;\n}\n\n.skill-list {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.skill-row {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 8px 12px;\n  font-size: 0.88rem;\n  align-items: center;\n}\n\n.skill-row .lvl {\n  font-family: var(--font-mono);\n  font-size: 0.65rem;\n  color: var(--color-text-faint);\n  text-transform: capitalize;\n}\n\n.skill-bar {\n  grid-column: 1 / -1;\n  height: 3px;\n  background: var(--color-border);\n  border-radius: 3px;\n  overflow: hidden;\n}\n\n.skill-bar span {\n  display: block;\n  height: 100%;\n  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));\n  border-radius: 3px;\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform 1.2s cubic-bezier(.16, 1, .3, 1);\n}\n\n.skill-cat:hover .skill-bar span,\n.reveal.visible .skill-bar span {\n  transform: scaleX(1);\n}\n\n/* ============ PROJECT CARDS ============ */\n.state-msg {\n  color: var(--color-text-muted);\n  font-size: 0.95rem;\n  text-align: center;\n  padding: 40px 0;\n}\n.state-error { color: var(--color-danger); }\n\n.project-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n\n.project-card {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  transition: transform .3s cubic-bezier(.4, 0, .2, 1), border-color .3s ease, box-shadow .3s ease;\n  position: relative;\n  will-change: transform;\n}\n\n.project-card:hover {\n  border-color: rgba(240, 169, 62, 0.4);\n  box-shadow: 0 20px 60px -20px rgba(0, 0, 0, 0.6), 0 0 40px -16px var(--color-primary-glow);\n}\n\n.project-glow {\n  position: absolute;\n  inset: 0;\n  opacity: 1;\n  transition: opacity .4s ease;\n  pointer-events: none;\n  z-index: 0;\n}\n\n.project-card:hover .project-glow { opacity: 1; }\n\n.project-thumb {\n  height: 170px;\n  background:\n    radial-gradient(circle at 50% 50%, rgba(240, 169, 62, 0.08), transparent 60%),\n    linear-gradient(135deg, var(--color-bg-alt) 0%, var(--color-surface-raised) 100%);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 1px solid var(--color-border);\n  overflow: hidden;\n}\n\n.project-visual-missing {\n  position: relative;\n  z-index: 2;\n  padding: 7px 10px;\n  border: 1px dashed var(--color-text-faint);\n  border-radius: 999px;\n  color: var(--color-text-muted);\n  font-family: var(--font-mono);\n  font-size: 0.7rem;\n}\n\n.project-slides {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  width: 400%;\n  flex: 0 0 400%;\n  height: 100%;\n  animation: project-slides 9s ease-in-out infinite !important;\n  animation-play-state: running !important;\n  will-change: transform;\n}\n\n.project-slide {\n  position: relative;\n  width: 25%;\n  height: 100%;\n  flex: 0 0 25%;\n  overflow: hidden;\n}\n\n.project-thumb .thumb-image {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  z-index: 1;\n  opacity: 1;\n  transform: scale(1.08);\n  transition: opacity .6s ease;\n}\n\n.project-thumb .thumb-image.is-loaded {\n  opacity: 1;\n}\n\n@keyframes project-slides {\n  0%, 22.2222% { transform: translateX(0); }\n  33.3333%, 55.5555% { transform: translateX(-25%); }\n  66.6666%, 88.8888% { transform: translateX(-50%); }\n  100% { transform: translateX(-75%); }\n}\n\n.slide-label {\n  position: absolute;\n  right: 12px;\n  bottom: 12px;\n  z-index: 2;\n  padding: 5px 9px;\n  border: 1px solid rgba(255, 255, 255, 0.22);\n  border-radius: 999px;\n  background: rgba(10, 14, 20, 0.72);\n  color: var(--color-text);\n  font-family: var(--font-mono);\n  font-size: 0.65rem;\n  letter-spacing: 0.04em;\n}\n\n.project-thumb .thumb-icon,\n.project-thumb .thumb-cat {\n  position: relative;\n  z-index: 2;\n}\n\n.project-thumb::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -60%;\n  width: 50%;\n  height: 100%;\n  background: linear-gradient(105deg, transparent, rgba(255, 255, 255, 0.03), transparent);\n  animation: shimmer-sweep 4.5s ease-in-out infinite;\n}\n\n.thumb-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  background: rgba(240, 169, 62, 0.1);\n  border: 1px solid rgba(240, 169, 62, 0.2);\n  color: var(--color-primary);\n  margin-bottom: 14px;\n}\n\n.thumb-cat {\n  font-family: var(--font-mono);\n  font-size: 0.7rem;\n  color: var(--color-text-faint);\n  letter-spacing: 0.08em;\n}\n\n.project-body {\n  padding: 24px 24px 26px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  z-index: 1;\n}\n\n.project-body .cat {\n  font-family: var(--font-mono);\n  font-size: 0.7rem;\n  color: var(--color-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-weight: 500;\n}\n\n.project-body h3 {\n  font-size: 1.25rem;\n  margin-top: 10px;\n  transition: color .2s ease;\n}\n.project-card:hover .project-body h3 { color: var(--color-primary); }\n\n.project-body p {\n  color: var(--color-text-muted);\n  font-size: 0.9rem;\n  margin-top: 12px;\n  flex: 1;\n  line-height: 1.7;\n}\n\n.stack-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n  margin-top: 18px;\n}\n\n.stack-tags span {\n  font-family: var(--font-mono);\n  font-size: 0.65rem;\n  color: var(--color-text-muted);\n  border: 1px solid var(--color-border);\n  padding: 4px 9px;\n  border-radius: 100px;\n  background: rgba(21, 28, 38, 0.5);\n  transition: border-color .2s ease, color .2s ease;\n}\n.stack-tags span:hover {\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n}\n\n.project-detail-link {\n  margin-top: 20px;\n  align-self: flex-start;\n}\n\n.see-all {\n  display: flex;\n  justify-content: center;\n  margin-top: 48px;\n}\n\n/* ============ PROCESS ============ */\n.process-list {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin-top: 8px;\n}\n\n.process-item {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  padding: 30px 26px;\n  position: relative;\n  transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease;\n  will-change: transform;\n}\n\n.process-item:hover {\n  border-color: rgba(240, 169, 62, 0.3);\n  box-shadow: 0 12px 44px -16px var(--color-primary-glow);\n}\n\n.process-num {\n  font-family: var(--font-mono);\n  color: var(--color-primary);\n  font-size: 0.8rem;\n  letter-spacing: 0.1em;\n}\n\n.process-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: rgba(240, 169, 62, 0.08);\n  border: 1px solid rgba(240, 169, 62, 0.15);\n  color: var(--color-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 16px;\n  margin-bottom: 14px;\n}\n\n.process-item h3 {\n  font-size: 1rem;\n  font-family: var(--font-body);\n  font-weight: 600;\n  color: var(--color-text);\n}\n\n.process-item p {\n  font-size: 0.85rem;\n  color: var(--color-text-muted);\n  margin-top: 8px;\n  line-height: 1.6;\n}\n\n/* ============ ARCH STRIP ============ */\n.arch-strip {\n  font-family: var(--font-mono);\n  font-size: 0.8rem;\n  color: var(--color-text-muted);\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  padding: 24px 28px;\n  margin-top: 40px;\n}\n\n.arch-label {\n  font-size: 0.65rem;\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n  color: var(--color-text-faint);\n  margin-right: 8px;\n}\n\n.arch-strip span.node {\n  color: var(--color-text);\n  border: 1px solid var(--color-border);\n  padding: 7px 14px;\n  border-radius: 8px;\n  background: var(--color-bg);\n  transition: border-color .2s ease, color .2s ease, transform .2s ease;\n}\n\n.arch-strip span.node:hover {\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n  transform: translateY(-2px);\n}\n\n.arch-strip span.arrow { color: var(--color-text-faint); }\n\n/* ============ RESPONSIVE ============ */\n@media (max-width: 900px) {\n  .hero { padding: 120px 0 100px; }\n  .hero-grid { grid-template-columns: 1fr; gap: 48px; width: 90%; }\n  .hero-visual { max-width: 520px; margin: 0 auto; width: 100%; }\n\n  .badge-angular { left: -10px; }\n  .badge-typescript { right: -10px; }\n\n  .profile-photo-frame { width: min(320px, 100%); height: 410px; }\n\n  .about-grid { grid-template-columns: 1fr; gap: 40px; }\n  .skills-grid { grid-template-columns: 1fr 1fr; }\n  .project-grid { grid-template-columns: 1fr 1fr; gap: 16px; }\n  .process-list { grid-template-columns: 1fr 1fr; }\n  .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }\n  .stat-num { font-size: 2rem; }\n}\n\n@media (max-width: 640px) {\n  .hero { padding: 110px 0 120px; min-height: 100svh; }\n  .hero app-globe { display: none; }\n  .hero-grid { width: 92%; }\n  .hero-title { font-size: clamp(2rem, 9vw, 2.6rem); }\n\n  .hero-actions .btn { width: 100%; justify-content: center; }\n\n  .hero-links { gap: 14px; flex-direction: column; align-items: flex-start; }\n\n  .hero-visual {\n    width: 100%;\n    min-height: 0;\n    flex-direction: column;\n    align-items: center;\n    gap: 24px;\n  }\n  .hero-visual app-profile-card {\n    width: 100%;\n    min-width: 0;\n    max-width: 420px;\n  }\n  .profile-photo-frame { width: min(240px, 100%); height: 310px; }\n  .profile-initials { font-size: 2.4rem; }\n\n  .code-body pre { font-size: 0.7rem; }\n\n  .badge-angular { top: 4%; left: -5px; }\n  .badge-typescript { bottom: 12%; right: -5px; }\n  .badge-rxjs { bottom: -10px; left: 10%; }\n\n  .scroll-indicator { display: none; }\n\n  .stats-grid { grid-template-columns: 1fr; gap: 10px; }\n  .skills-grid { grid-template-columns: 1fr; }\n  .project-grid { grid-template-columns: 1fr; }\n  .process-list { grid-template-columns: 1fr; }\n\n  .arch-strip { flex-direction: column; align-items: flex-start; gap: 8px; }\n  .arch-strip span.arrow { transform: rotate(90deg); }\n}\n"] }]
    }], () => [], { onResize: [{
            type: HostListener,
            args: ['window:resize']
        }], onScroll: [{
            type: HostListener,
            args: ['window:scroll']
        }], onMouseMove: [{
            type: HostListener,
            args: ['window:mousemove', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Home, { className: "Home", filePath: "app/features/home/home.ts", lineNumber: 35 }); })();
//# sourceMappingURL=home.js.map