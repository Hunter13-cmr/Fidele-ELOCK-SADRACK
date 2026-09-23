import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectsService } from '../../core/services/projects.service';
import * as i0 from "@angular/core";
const _c0 = a0 => ["/projects", a0];
const _forTrack0 = ($index, $item) => $item.id;
function Projects_For_11_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function Projects_For_11_Template_button_click_0_listener() { const filter_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.setFilter(filter_r2)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const filter_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r2.activeFilter() === filter_r2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", filter_r2, " ");
} }
function Projects_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1, "Chargement des projets\u2026");
    i0.ɵɵelementEnd();
} }
function Projects_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.error());
} }
function Projects_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1, "Aucun projet ne correspond \u00E0 ce filtre.");
    i0.ɵɵelementEnd();
} }
function Projects_Conditional_15_For_2_Conditional_2_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelement(1, "img", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r4 = ctx.$implicit;
    const $index_r5 = ctx.$index;
    const project_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", image_r4, i0.ɵɵsanitizeUrl)("alt", project_r6.title + " - image " + ($index_r5 + 1));
} }
function Projects_Conditional_15_For_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵrepeaterCreate(1, Projects_Conditional_15_For_2_Conditional_2_For_2_Template, 2, 2, "div", 21, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const project_r6 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.getProjectImages(project_r6));
} }
function Projects_Conditional_15_For_2_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 13);
    i0.ɵɵtext(1, "Aper\u00E7u \u00E0 ajouter");
    i0.ɵɵelementEnd();
} }
function Projects_Conditional_15_For_2_For_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tech_r7 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(tech_r7);
} }
function Projects_Conditional_15_For_2_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 19);
    i0.ɵɵtext(1, "GitHub");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const project_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("href", project_r6.githubUrl, i0.ɵɵsanitizeUrl);
} }
function Projects_Conditional_15_For_2_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵtext(1, "GitHub \u2014 lien \u00E0 ajouter");
    i0.ɵɵelementEnd();
} }
function Projects_Conditional_15_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 10)(1, "div", 11);
    i0.ɵɵconditionalCreate(2, Projects_Conditional_15_For_2_Conditional_2_Template, 3, 0, "div", 12)(3, Projects_Conditional_15_For_2_Conditional_3_Template, 2, 0, "span", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 14)(5, "span", 15);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h3");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 16);
    i0.ɵɵrepeaterCreate(12, Projects_Conditional_15_For_2_For_13_Template, 2, 1, "span", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 17)(15, "a", 18);
    i0.ɵɵtext(16, "\u00C9tude de cas");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(17, Projects_Conditional_15_For_2_Conditional_17_Template, 2, 1, "a", 19)(18, Projects_Conditional_15_For_2_Conditional_18_Template, 2, 0, "span", 20);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const project_r6 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(project_r6.image ? 2 : 3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(project_r6.category);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(project_r6.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(project_r6.shortDescription);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(project_r6.technologies);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(6, _c0, project_r6.slug));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(project_r6.githubUrl ? 17 : 18);
} }
function Projects_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵrepeaterCreate(1, Projects_Conditional_15_For_2_Template, 19, 8, "article", 10, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.filteredProjects());
} }
export class Projects {
    projectsService = inject(ProjectsService);
    filters = ['Tous', 'Angular', 'Front-End', 'Full Stack', 'API'];
    activeFilter = signal('Tous', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "activeFilter" }] : /* istanbul ignore next */ []));
    loading = this.projectsService.loading;
    error = this.projectsService.error;
    filteredProjects = computed(() => {
        const filter = this.activeFilter();
        const all = this.projectsService.projects();
        return filter === 'Tous' ? all : all.filter((p) => p.category === filter);
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "filteredProjects" }] : /* istanbul ignore next */ []));
    ngOnInit() {
        this.projectsService.load();
    }
    setFilter(filter) {
        this.activeFilter.set(filter);
    }
    getProjectImages(project) {
        return project.images ?? [];
    }
    static ɵfac = function Projects_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Projects)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Projects, selectors: [["app-projects"]], decls: 16, vars: 1, consts: [[1, "section", 2, "border-bottom", "none"], [1, "container"], [1, "section-head"], [1, "eyebrow"], ["role", "tablist", "aria-label", "Filtrer les projets", 1, "projects-filter"], ["type", "button", 1, "filter-chip", 3, "active"], [1, "state-msg"], [1, "state-msg", "state-error"], [1, "project-grid"], ["type", "button", 1, "filter-chip", 3, "click"], [1, "project-card"], [1, "project-thumb"], [1, "project-slides"], [1, "project-visual-missing"], [1, "project-body"], [1, "cat"], [1, "stack-tags"], [1, "project-links"], [3, "routerLink"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [1, "placeholder-tag"], [1, "project-slide"], ["loading", "lazy", 1, "thumb-image", 3, "src", "alt"]], template: function Projects_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
            i0.ɵɵtext(4, "Projets");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h2");
            i0.ɵɵtext(6, "R\u00E9alisations concr\u00E8tes");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8, "3 \u00E0 5 projets choisis plut\u00F4t qu'une longue liste superficielle.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 4);
            i0.ɵɵrepeaterCreate(10, Projects_For_11_Template, 2, 3, "button", 5, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(12, Projects_Conditional_12_Template, 2, 0, "p", 6)(13, Projects_Conditional_13_Template, 2, 1, "p", 7)(14, Projects_Conditional_14_Template, 2, 0, "p", 6)(15, Projects_Conditional_15_Template, 3, 0, "div", 8);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(10);
            i0.ɵɵrepeater(ctx.filters);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.loading() ? 12 : ctx.error() ? 13 : ctx.filteredProjects().length === 0 ? 14 : 15);
        } }, dependencies: [RouterLink], styles: [".projects-filter[_ngcontent-%COMP%] { display: flex; gap: 10px; margin-bottom: 36px; flex-wrap: wrap; }\n.filter-chip[_ngcontent-%COMP%] {\n  font-family: var(--%NS%font-mono); font-size: 0.78rem; padding: 8px 15px;\n  border: 1px solid var(--%NS%color-border); border-radius: 20px;\n  color: var(--%NS%color-text-muted); background: transparent; transition: all .15s ease;\n}\n.filter-chip.active[_ngcontent-%COMP%] { color: var(--%NS%color-bg); background: var(--%NS%color-primary); border-color: var(--%NS%color-primary); }\n\n.state-msg[_ngcontent-%COMP%] { color: var(--%NS%color-text-muted); font-size: 0.95rem; }\n.state-error[_ngcontent-%COMP%] { color: var(--%NS%color-danger); }\n\n.project-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }\n.project-card[_ngcontent-%COMP%] {\n  background: var(--%NS%color-surface); border: 1px solid var(--%NS%color-border);\n  border-radius: 6px; overflow: hidden; display: flex; flex-direction: column;\n  transition: border-color .18s ease, transform .18s ease;\n}\n.project-card[_ngcontent-%COMP%]:hover { border-color: var(--%NS%color-text-faint); transform: translateY(-3px); }\n.project-thumb[_ngcontent-%COMP%] {\n  height: 150px; background: linear-gradient(135deg, var(--%NS%color-bg-alt) 0%, var(--%NS%color-surface-raised) 100%);\n  display: flex; align-items: center; justify-content: center; border-bottom: 1px solid var(--%NS%color-border);\n  position: relative;\n  overflow: hidden;\n}\n.project-slides[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  width: 400%;\n  flex: 0 0 400%;\n  height: 100%;\n  animation: _ngcontent-%COMP%_project-slides 10s linear infinite;\n  animation-play-state: running;\n  will-change: transform;\n}\n.project-slide[_ngcontent-%COMP%] {\n  position: relative;\n  width: 25%;\n  height: 100%;\n  flex: 0 0 25%;\n  overflow: hidden;\n}\n.project-thumb[_ngcontent-%COMP%]   .thumb-image[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  z-index: 1;\n  opacity: 1;\n  transform: scale(1.04);\n}\n.project-thumb[_ngcontent-%COMP%]   .thumb-cat[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  font-family: var(--%NS%font-mono); font-size: 0.72rem; color: var(--%NS%color-text-faint);\n  background: rgba(10, 14, 20, 0.7);\n  padding: 4px 10px;\n  border-radius: 100px;\n  border: 1px solid rgba(240, 169, 62, 0.2);\n  backdrop-filter: blur(8px);\n}\n.project-visual-missing[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  padding: 7px 10px;\n  border: 1px dashed var(--%NS%color-text-faint);\n  border-radius: 999px;\n  color: var(--%NS%color-text-muted);\n  font-family: var(--%NS%font-mono);\n  font-size: 0.7rem;\n}\n.project-body[_ngcontent-%COMP%] { padding: 22px 22px 24px; flex: 1; display: flex; flex-direction: column; }\n.project-body[_ngcontent-%COMP%]   .cat[_ngcontent-%COMP%] { font-family: var(--%NS%font-mono); font-size: 0.7rem; color: var(--%NS%color-secondary); text-transform: uppercase; letter-spacing: 0.08em; }\n.project-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 1.15rem; margin-top: 8px; }\n.project-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: var(--%NS%color-text-muted); font-size: 0.9rem; margin-top: 10px; flex: 1; }\n.stack-tags[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 16px; }\n.stack-tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: var(--%NS%font-mono); font-size: 0.68rem; color: var(--%NS%color-text-muted);\n  border: 1px solid var(--%NS%color-border); padding: 3px 7px; border-radius: 3px;\n}\n.project-links[_ngcontent-%COMP%] { display: flex; gap: 16px; margin-top: 18px; padding-top: 16px; border-top: 1px solid var(--%NS%color-border); }\n.project-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { font-family: var(--%NS%font-mono); font-size: 0.78rem; color: var(--%NS%color-text-muted); }\n.project-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover { color: var(--%NS%color-primary); }\n.placeholder-tag[_ngcontent-%COMP%] { font-size: 0.66rem; color: var(--%NS%color-text-faint); font-style: italic; }\n\n@keyframes _ngcontent-%COMP%_project-slides {\n  0%, 20% { transform: translateX(0); }\n  30%, 50% { transform: translateX(-25%); }\n  60%, 80% { transform: translateX(-50%); }\n  90%, 100% { transform: translateX(-75%); }\n}\n.slide-label[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  z-index: 2;\n  padding: 4px 8px;\n  border: 1px solid rgba(255, 255, 255, 0.22);\n  border-radius: 999px;\n  background: rgba(10, 14, 20, 0.72);\n  color: var(--%NS%color-text);\n  font-family: var(--%NS%font-mono);\n  font-size: 0.64rem;\n  letter-spacing: 0.04em;\n}\n\n@media (max-width: 900px) { .project-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr 1fr; } }\n@media (max-width: 640px) { .project-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; } }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Projects, [{
        type: Component,
        args: [{ selector: 'app-projects', standalone: true, imports: [RouterLink], template: "<section class=\"section\" style=\"border-bottom:none;\">\n  <div class=\"container\">\n    <div class=\"section-head\">\n      <span class=\"eyebrow\">Projets</span>\n      <h2>R\u00E9alisations concr\u00E8tes</h2>\n      <p>3 \u00E0 5 projets choisis plut\u00F4t qu'une longue liste superficielle.</p>\n    </div>\n\n    <div class=\"projects-filter\" role=\"tablist\" aria-label=\"Filtrer les projets\">\n      @for (filter of filters; track filter) {\n        <button\n          type=\"button\"\n          class=\"filter-chip\"\n          [class.active]=\"activeFilter() === filter\"\n          (click)=\"setFilter(filter)\"\n        >\n          {{ filter }}\n        </button>\n      }\n    </div>\n\n    @if (loading()) {\n      <p class=\"state-msg\">Chargement des projets\u2026</p>\n    } @else if (error()) {\n      <p class=\"state-msg state-error\">{{ error() }}</p>\n    } @else if (filteredProjects().length === 0) {\n      <p class=\"state-msg\">Aucun projet ne correspond \u00E0 ce filtre.</p>\n    } @else {\n      <div class=\"project-grid\">\n        @for (project of filteredProjects(); track project.id) {\n          <article class=\"project-card\">\n            <div class=\"project-thumb\">\n              @if (project.image) {\n                <div class=\"project-slides\">\n                  @for (image of getProjectImages(project); track $index) {\n                    <div class=\"project-slide\">\n                      <img [src]=\"image\" [alt]=\"project.title + ' - image ' + ($index + 1)\" class=\"thumb-image\" loading=\"lazy\" />\n                    </div>\n                  }\n                </div>\n              } @else {\n                <span class=\"project-visual-missing\">Aper\u00E7u \u00E0 ajouter</span>\n              }\n            </div>\n            <div class=\"project-body\">\n              <span class=\"cat\">{{ project.category }}</span>\n              <h3>{{ project.title }}</h3>\n              <p>{{ project.shortDescription }}</p>\n              <div class=\"stack-tags\">\n                @for (tech of project.technologies; track tech) {\n                  <span>{{ tech }}</span>\n                }\n              </div>\n              <div class=\"project-links\">\n                <a [routerLink]=\"['/projects', project.slug]\">\u00C9tude de cas</a>\n                @if (project.githubUrl) {\n                  <a [href]=\"project.githubUrl\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a>\n                } @else {\n                  <span class=\"placeholder-tag\">GitHub \u2014 lien \u00E0 ajouter</span>\n                }\n              </div>\n            </div>\n          </article>\n        }\n      </div>\n    }\n  </div>\n</section>\n", styles: [".projects-filter { display: flex; gap: 10px; margin-bottom: 36px; flex-wrap: wrap; }\n.filter-chip {\n  font-family: var(--font-mono); font-size: 0.78rem; padding: 8px 15px;\n  border: 1px solid var(--color-border); border-radius: 20px;\n  color: var(--color-text-muted); background: transparent; transition: all .15s ease;\n}\n.filter-chip.active { color: var(--color-bg); background: var(--color-primary); border-color: var(--color-primary); }\n\n.state-msg { color: var(--color-text-muted); font-size: 0.95rem; }\n.state-error { color: var(--color-danger); }\n\n.project-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }\n.project-card {\n  background: var(--color-surface); border: 1px solid var(--color-border);\n  border-radius: 6px; overflow: hidden; display: flex; flex-direction: column;\n  transition: border-color .18s ease, transform .18s ease;\n}\n.project-card:hover { border-color: var(--color-text-faint); transform: translateY(-3px); }\n.project-thumb {\n  height: 150px; background: linear-gradient(135deg, var(--color-bg-alt) 0%, var(--color-surface-raised) 100%);\n  display: flex; align-items: center; justify-content: center; border-bottom: 1px solid var(--color-border);\n  position: relative;\n  overflow: hidden;\n}\n.project-slides {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  width: 400%;\n  flex: 0 0 400%;\n  height: 100%;\n  animation: project-slides 10s linear infinite;\n  animation-play-state: running;\n  will-change: transform;\n}\n.project-slide {\n  position: relative;\n  width: 25%;\n  height: 100%;\n  flex: 0 0 25%;\n  overflow: hidden;\n}\n.project-thumb .thumb-image {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  z-index: 1;\n  opacity: 1;\n  transform: scale(1.04);\n}\n.project-thumb .thumb-cat {\n  position: relative;\n  z-index: 2;\n  font-family: var(--font-mono); font-size: 0.72rem; color: var(--color-text-faint);\n  background: rgba(10, 14, 20, 0.7);\n  padding: 4px 10px;\n  border-radius: 100px;\n  border: 1px solid rgba(240, 169, 62, 0.2);\n  backdrop-filter: blur(8px);\n}\n.project-visual-missing {\n  position: relative;\n  z-index: 1;\n  padding: 7px 10px;\n  border: 1px dashed var(--color-text-faint);\n  border-radius: 999px;\n  color: var(--color-text-muted);\n  font-family: var(--font-mono);\n  font-size: 0.7rem;\n}\n.project-body { padding: 22px 22px 24px; flex: 1; display: flex; flex-direction: column; }\n.project-body .cat { font-family: var(--font-mono); font-size: 0.7rem; color: var(--color-secondary); text-transform: uppercase; letter-spacing: 0.08em; }\n.project-body h3 { font-size: 1.15rem; margin-top: 8px; }\n.project-body p { color: var(--color-text-muted); font-size: 0.9rem; margin-top: 10px; flex: 1; }\n.stack-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 16px; }\n.stack-tags span {\n  font-family: var(--font-mono); font-size: 0.68rem; color: var(--color-text-muted);\n  border: 1px solid var(--color-border); padding: 3px 7px; border-radius: 3px;\n}\n.project-links { display: flex; gap: 16px; margin-top: 18px; padding-top: 16px; border-top: 1px solid var(--color-border); }\n.project-links a { font-family: var(--font-mono); font-size: 0.78rem; color: var(--color-text-muted); }\n.project-links a:hover { color: var(--color-primary); }\n.placeholder-tag { font-size: 0.66rem; color: var(--color-text-faint); font-style: italic; }\n\n@keyframes project-slides {\n  0%, 20% { transform: translateX(0); }\n  30%, 50% { transform: translateX(-25%); }\n  60%, 80% { transform: translateX(-50%); }\n  90%, 100% { transform: translateX(-75%); }\n}\n.slide-label {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  z-index: 2;\n  padding: 4px 8px;\n  border: 1px solid rgba(255, 255, 255, 0.22);\n  border-radius: 999px;\n  background: rgba(10, 14, 20, 0.72);\n  color: var(--color-text);\n  font-family: var(--font-mono);\n  font-size: 0.64rem;\n  letter-spacing: 0.04em;\n}\n\n@media (max-width: 900px) { .project-grid { grid-template-columns: 1fr 1fr; } }\n@media (max-width: 640px) { .project-grid { grid-template-columns: 1fr; } }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Projects, { className: "Projects", filePath: "app/features/projects/projects.ts", lineNumber: 15 }); })();
//# sourceMappingURL=projects.js.map