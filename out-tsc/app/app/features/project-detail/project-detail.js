import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectsService } from '../../core/services/projects.service';
import * as i0 from "@angular/core";
function ProjectDetail_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "p", 2);
    i0.ɵɵtext(3, "Chargement du projet\u2026");
    i0.ɵɵelementEnd()()();
} }
function ProjectDetail_Conditional_1_For_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(feature_r1);
} }
function ProjectDetail_Conditional_1_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "h2");
    i0.ɵɵtext(2, "Difficult\u00E9s");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const p_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(p_r2.challenges);
} }
function ProjectDetail_Conditional_1_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "h2");
    i0.ɵɵtext(2, "Solution");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const p_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(p_r2.solution);
} }
function ProjectDetail_Conditional_1_Conditional_38_For_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelement(1, "img", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r3 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    const p_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("background-image", "url('" + image_r3 + "')");
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", image_r3, i0.ɵɵsanitizeUrl)("alt", p_r2.title + " - image " + ($index_r4 + 1));
} }
function ProjectDetail_Conditional_1_Conditional_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 18);
    i0.ɵɵrepeaterCreate(2, ProjectDetail_Conditional_1_Conditional_38_For_3_Template, 2, 4, "div", 19, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const p_r2 = i0.ɵɵnextContext();
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r4.getProjectImages(p_r2));
} }
function ProjectDetail_Conditional_1_Conditional_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 13);
    i0.ɵɵtext(1, "Visuel du projet \u00E0 ajouter.");
    i0.ɵɵelementEnd();
} }
function ProjectDetail_Conditional_1_For_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tech_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(tech_r6);
} }
function ProjectDetail_Conditional_1_Conditional_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 15);
    i0.ɵɵtext(1, "Voir la d\u00E9mo");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("href", p_r2.demoUrl, i0.ɵɵsanitizeUrl);
} }
function ProjectDetail_Conditional_1_Conditional_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 16);
    i0.ɵɵtext(1, "D\u00E9mo \u2014 lien \u00E0 ajouter");
    i0.ɵɵelementEnd();
} }
function ProjectDetail_Conditional_1_Conditional_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 17);
    i0.ɵɵtext(1, "GitHub");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("href", p_r2.githubUrl, i0.ɵɵsanitizeUrl);
} }
function ProjectDetail_Conditional_1_Conditional_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 16);
    i0.ɵɵtext(1, "GitHub \u2014 lien \u00E0 ajouter");
    i0.ɵɵelementEnd();
} }
function ProjectDetail_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 0)(1, "div", 3)(2, "a", 4);
    i0.ɵɵtext(3, "\u2190 Tous les projets");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 5);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h1");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 6);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "h2");
    i0.ɵɵtext(14, "Contexte");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "p");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 9)(18, "h2");
    i0.ɵɵtext(19, "Objectif");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "p");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 9)(23, "h2");
    i0.ɵɵtext(24, "Mon r\u00F4le");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "p");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 9)(28, "h2");
    i0.ɵɵtext(29, "Fonctionnalit\u00E9s");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "ul", 10);
    i0.ɵɵrepeaterCreate(31, ProjectDetail_Conditional_1_For_32_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(33, ProjectDetail_Conditional_1_Conditional_33_Template, 5, 1, "div", 9);
    i0.ɵɵconditionalCreate(34, ProjectDetail_Conditional_1_Conditional_34_Template, 5, 1, "div", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "aside", 11)(36, "h3");
    i0.ɵɵtext(37, "Stack");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(38, ProjectDetail_Conditional_1_Conditional_38_Template, 4, 0, "div", 12)(39, ProjectDetail_Conditional_1_Conditional_39_Template, 2, 0, "p", 13);
    i0.ɵɵelementStart(40, "div", 14);
    i0.ɵɵrepeaterCreate(41, ProjectDetail_Conditional_1_For_42_Template, 2, 1, "span", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "h3");
    i0.ɵɵtext(44, "R\u00E9sultat");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(45, ProjectDetail_Conditional_1_Conditional_45_Template, 2, 1, "a", 15)(46, ProjectDetail_Conditional_1_Conditional_46_Template, 2, 0, "p", 16);
    i0.ɵɵconditionalCreate(47, ProjectDetail_Conditional_1_Conditional_47_Template, 2, 1, "a", 17)(48, ProjectDetail_Conditional_1_Conditional_48_Template, 2, 0, "p", 16);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const p_r2 = ctx;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(p_r2.category);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r2.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r2.description);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(p_r2.context);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(p_r2.goal);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(p_r2.role);
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(p_r2.features);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(p_r2.challenges ? 33 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(p_r2.solution ? 34 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(p_r2.image ? 38 : 39);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(p_r2.technologies);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(p_r2.demoUrl ? 45 : 46);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(p_r2.githubUrl ? 47 : 48);
} }
function ProjectDetail_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "p", 2);
    i0.ɵɵtext(3, "Ce projet n'existe pas ou n'est plus disponible.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "a", 22);
    i0.ɵɵtext(5, "Retour aux projets");
    i0.ɵɵelementEnd()()();
} }
export class ProjectDetail {
    route = inject(ActivatedRoute);
    projectsService = inject(ProjectsService);
    destroyRef = inject(DestroyRef);
    slug = signal(this.route.snapshot.paramMap.get('slug') ?? '', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "slug" }] : /* istanbul ignore next */ []));
    loading = this.projectsService.loading;
    project = computed(() => this.projectsService.getBySlug(this.slug()), /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "project" }] : /* istanbul ignore next */ []));
    notFound = computed(() => !this.loading() && !this.project(), /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "notFound" }] : /* istanbul ignore next */ []));
    getProjectImages(project) {
        return project.images ?? [];
    }
    constructor() {
        this.route.paramMap
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((params) => {
            this.slug.set(params.get('slug') ?? '');
        });
    }
    ngOnInit() {
        this.projectsService.load();
    }
    static ɵfac = function ProjectDetail_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProjectDetail)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProjectDetail, selectors: [["app-project-detail"]], decls: 3, vars: 1, consts: [[1, "section", 2, "border-bottom", "none"], [1, "container"], [1, "state-msg"], [1, "container", "detail-container"], ["routerLink", "/projects", 1, "back-link"], [1, "eyebrow"], [1, "lead"], [1, "detail-grid"], [1, "detail-main"], [1, "detail-block"], [1, "feature-list"], [1, "detail-side"], ["aria-label", "Images du projet", 1, "detail-image-carousel"], [1, "detail-visual-missing"], [1, "stack-tags"], ["target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-primary", "side-btn", 3, "href"], [1, "placeholder-tag"], ["target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-ghost", "side-btn", 3, "href"], [1, "detail-image-track"], [1, "detail-project-slide", 3, "background-image"], [1, "detail-project-slide"], ["loading", "lazy", 1, "detail-project-image", 3, "src", "alt"], ["routerLink", "/projects", 1, "btn", "btn-ghost"]], template: function ProjectDetail_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, ProjectDetail_Conditional_0_Template, 4, 0, "section", 0)(1, ProjectDetail_Conditional_1_Template, 49, 11, "section", 0)(2, ProjectDetail_Conditional_2_Template, 6, 0, "section", 0);
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵconditional(ctx.loading() ? 0 : (tmp_0_0 = ctx.project()) ? 1 : 2, tmp_0_0);
        } }, dependencies: [RouterLink], styles: [".back-link[_ngcontent-%COMP%] { font-family: var(--%NS%font-mono); font-size: 0.82rem; color: var(--%NS%color-text-faint); display: inline-block; margin-bottom: 24px; }\n.back-link[_ngcontent-%COMP%]:hover { color: var(--%NS%color-text); }\n\n.detail-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { font-size: clamp(1.9rem, 4vw, 2.6rem); margin-top: 8px; }\n.lead[_ngcontent-%COMP%] { color: var(--%NS%color-text-muted); font-size: 1.05rem; margin-top: 16px; max-width: 65ch; }\n\n.detail-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: 2fr 1fr; gap: 56px; margin-top: 44px; }\n.detail-block[_ngcontent-%COMP%] { margin-bottom: 30px; }\n.detail-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { font-size: 1.05rem; font-family: var(--%NS%font-body); font-weight: 600; }\n.detail-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: var(--%NS%color-text-muted); margin-top: 10px; }\n.feature-list[_ngcontent-%COMP%] { margin-top: 10px; display: flex; flex-direction: column; gap: 8px; }\n.feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { color: var(--%NS%color-text-muted); padding-left: 18px; position: relative; }\n.feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before { content: '\u2014'; position: absolute; left: 0; color: var(--%NS%color-secondary); }\n\n.detail-side[_ngcontent-%COMP%] {\n  background: var(--%NS%color-surface); border: 1px solid var(--%NS%color-border);\n  border-radius: 6px; padding: 24px; align-self: start; position: sticky; top: 96px;\n}\n.detail-side[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 0.85rem; font-family: var(--%NS%font-mono); color: var(--%NS%color-text-faint); text-transform: uppercase; margin: 18px 0 12px; }\n.detail-side[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:first-child { margin-top: 0; }\n.detail-image-carousel[_ngcontent-%COMP%] { height: 150px; overflow: hidden; margin-bottom: 20px; border: 1px solid var(--%NS%color-border); border-radius: 4px; }\n.detail-image-track[_ngcontent-%COMP%] {\n  display: flex;\n  width: 400%;\n  flex: 0 0 400%;\n  animation: _ngcontent-%COMP%_detail-image-slides 10s linear infinite;\n  animation-play-state: running;\n  will-change: transform;\n}\n.detail-project-slide[_ngcontent-%COMP%] {\n  width: 25%;\n  height: 150px;\n  flex: 0 0 25%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.detail-project-image[_ngcontent-%COMP%] { width: 100%; height: 100%; object-fit: cover; display: block; }\n.detail-visual-missing[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  padding: 20px;\n  border: 1px dashed var(--%NS%color-text-faint);\n  border-radius: 4px;\n  color: var(--%NS%color-text-muted);\n  font-size: 0.82rem;\n}\n@keyframes _ngcontent-%COMP%_detail-image-slides {\n  0%, 20% { transform: translateX(0); }\n  25%, 45% { transform: translateX(-25%); }\n  50%, 70% { transform: translateX(-50%); }\n  75%, 95% { transform: translateX(-75%); }\n  100% { transform: translateX(0); }\n}\n.stack-tags[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: 6px; }\n.stack-tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: var(--%NS%font-mono); font-size: 0.7rem; color: var(--%NS%color-text-muted);\n  border: 1px solid var(--%NS%color-border); padding: 3px 8px; border-radius: 3px;\n}\n.side-btn[_ngcontent-%COMP%] { width: 100%; justify-content: center; margin-bottom: 8px; }\n.placeholder-tag[_ngcontent-%COMP%] { font-size: 0.78rem; color: var(--%NS%color-text-faint); font-style: italic; }\n.state-msg[_ngcontent-%COMP%] { color: var(--%NS%color-text-muted); }\n\n@media (max-width: 900px) {\n  .detail-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .detail-side[_ngcontent-%COMP%] { position: static; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProjectDetail, [{
        type: Component,
        args: [{ selector: 'app-project-detail', standalone: true, imports: [RouterLink], template: "@if (loading()) {\n  <section class=\"section\" style=\"border-bottom:none;\">\n    <div class=\"container\"><p class=\"state-msg\">Chargement du projet\u2026</p></div>\n  </section>\n} @else if (project(); as p) {\n  <section class=\"section\" style=\"border-bottom:none;\">\n    <div class=\"container detail-container\">\n      <a routerLink=\"/projects\" class=\"back-link\">\u2190 Tous les projets</a>\n\n      <span class=\"eyebrow\">{{ p.category }}</span>\n      <h1>{{ p.title }}</h1>\n      <p class=\"lead\">{{ p.description }}</p>\n\n      <div class=\"detail-grid\">\n        <div class=\"detail-main\">\n          <div class=\"detail-block\">\n            <h2>Contexte</h2>\n            <p>{{ p.context }}</p>\n          </div>\n          <div class=\"detail-block\">\n            <h2>Objectif</h2>\n            <p>{{ p.goal }}</p>\n          </div>\n          <div class=\"detail-block\">\n            <h2>Mon r\u00F4le</h2>\n            <p>{{ p.role }}</p>\n          </div>\n          <div class=\"detail-block\">\n            <h2>Fonctionnalit\u00E9s</h2>\n            <ul class=\"feature-list\">\n              @for (feature of p.features; track feature) {\n                <li>{{ feature }}</li>\n              }\n            </ul>\n          </div>\n          @if (p.challenges) {\n            <div class=\"detail-block\">\n              <h2>Difficult\u00E9s</h2>\n              <p>{{ p.challenges }}</p>\n            </div>\n          }\n          @if (p.solution) {\n            <div class=\"detail-block\">\n              <h2>Solution</h2>\n              <p>{{ p.solution }}</p>\n            </div>\n          }\n        </div>\n\n        <aside class=\"detail-side\">\n          <h3>Stack</h3>\n          @if (p.image) {\n            <div class=\"detail-image-carousel\" aria-label=\"Images du projet\">\n              <div class=\"detail-image-track\">\n                @for (image of getProjectImages(p); track $index) {\n                  <div class=\"detail-project-slide\" [style.background-image]=\"'url(\\'' + image + '\\')'\">\n                    <img [src]=\"image\" [alt]=\"p.title + ' - image ' + ($index + 1)\" class=\"detail-project-image\" loading=\"lazy\" />\n                  </div>\n                }\n              </div>\n            </div>\n          } @else {\n            <p class=\"detail-visual-missing\">Visuel du projet \u00E0 ajouter.</p>\n          }\n          <div class=\"stack-tags\">\n            @for (tech of p.technologies; track tech) {\n              <span>{{ tech }}</span>\n            }\n          </div>\n\n          <h3>R\u00E9sultat</h3>\n          @if (p.demoUrl) {\n            <a [href]=\"p.demoUrl\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"btn btn-primary side-btn\">Voir la d\u00E9mo</a>\n          } @else {\n            <p class=\"placeholder-tag\">D\u00E9mo \u2014 lien \u00E0 ajouter</p>\n          }\n          @if (p.githubUrl) {\n            <a [href]=\"p.githubUrl\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"btn btn-ghost side-btn\">GitHub</a>\n          } @else {\n            <p class=\"placeholder-tag\">GitHub \u2014 lien \u00E0 ajouter</p>\n          }\n        </aside>\n      </div>\n    </div>\n  </section>\n} @else {\n  <section class=\"section\" style=\"border-bottom:none;\">\n    <div class=\"container\">\n      <p class=\"state-msg\">Ce projet n'existe pas ou n'est plus disponible.</p>\n      <a routerLink=\"/projects\" class=\"btn btn-ghost\">Retour aux projets</a>\n    </div>\n  </section>\n}\n", styles: [".back-link { font-family: var(--font-mono); font-size: 0.82rem; color: var(--color-text-faint); display: inline-block; margin-bottom: 24px; }\n.back-link:hover { color: var(--color-text); }\n\n.detail-container h1 { font-size: clamp(1.9rem, 4vw, 2.6rem); margin-top: 8px; }\n.lead { color: var(--color-text-muted); font-size: 1.05rem; margin-top: 16px; max-width: 65ch; }\n\n.detail-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 56px; margin-top: 44px; }\n.detail-block { margin-bottom: 30px; }\n.detail-block h2 { font-size: 1.05rem; font-family: var(--font-body); font-weight: 600; }\n.detail-block p { color: var(--color-text-muted); margin-top: 10px; }\n.feature-list { margin-top: 10px; display: flex; flex-direction: column; gap: 8px; }\n.feature-list li { color: var(--color-text-muted); padding-left: 18px; position: relative; }\n.feature-list li::before { content: '\u2014'; position: absolute; left: 0; color: var(--color-secondary); }\n\n.detail-side {\n  background: var(--color-surface); border: 1px solid var(--color-border);\n  border-radius: 6px; padding: 24px; align-self: start; position: sticky; top: 96px;\n}\n.detail-side h3 { font-size: 0.85rem; font-family: var(--font-mono); color: var(--color-text-faint); text-transform: uppercase; margin: 18px 0 12px; }\n.detail-side h3:first-child { margin-top: 0; }\n.detail-image-carousel { height: 150px; overflow: hidden; margin-bottom: 20px; border: 1px solid var(--color-border); border-radius: 4px; }\n.detail-image-track {\n  display: flex;\n  width: 400%;\n  flex: 0 0 400%;\n  animation: detail-image-slides 10s linear infinite;\n  animation-play-state: running;\n  will-change: transform;\n}\n.detail-project-slide {\n  width: 25%;\n  height: 150px;\n  flex: 0 0 25%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.detail-project-image { width: 100%; height: 100%; object-fit: cover; display: block; }\n.detail-visual-missing {\n  margin: 0 0 20px;\n  padding: 20px;\n  border: 1px dashed var(--color-text-faint);\n  border-radius: 4px;\n  color: var(--color-text-muted);\n  font-size: 0.82rem;\n}\n@keyframes detail-image-slides {\n  0%, 20% { transform: translateX(0); }\n  25%, 45% { transform: translateX(-25%); }\n  50%, 70% { transform: translateX(-50%); }\n  75%, 95% { transform: translateX(-75%); }\n  100% { transform: translateX(0); }\n}\n.stack-tags { display: flex; flex-wrap: wrap; gap: 6px; }\n.stack-tags span {\n  font-family: var(--font-mono); font-size: 0.7rem; color: var(--color-text-muted);\n  border: 1px solid var(--color-border); padding: 3px 8px; border-radius: 3px;\n}\n.side-btn { width: 100%; justify-content: center; margin-bottom: 8px; }\n.placeholder-tag { font-size: 0.78rem; color: var(--color-text-faint); font-style: italic; }\n.state-msg { color: var(--color-text-muted); }\n\n@media (max-width: 900px) {\n  .detail-grid { grid-template-columns: 1fr; }\n  .detail-side { position: static; }\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProjectDetail, { className: "ProjectDetail", filePath: "app/features/project-detail/project-detail.ts", lineNumber: 14 }); })();
//# sourceMappingURL=project-detail.js.map