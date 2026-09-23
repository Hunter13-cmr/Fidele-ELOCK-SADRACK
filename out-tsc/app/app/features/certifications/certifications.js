import { Component, inject, signal } from '@angular/core';
import { CertificationsService } from '../../core/services/certifications.service';
import * as i0 from "@angular/core";
const arrowFn0 = (ctx, view) => c => c.organization === "alx";
const arrowFn1 = (ctx, view) => c => c.organization === "orange-digital-center";
const _forTrack0 = ($index, $item) => $item.id;
function Certifications_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "p", 7);
    i0.ɵɵtext(1, "Chargement des certifications\u2026");
    i0.ɵɵdomElementEnd();
} }
function Certifications_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "p", 8);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function Certifications_Conditional_24_For_2_Case_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(0, "svg", 14);
    i0.ɵɵdomElement(1, "path", 27);
    i0.ɵɵdomElementEnd();
} }
function Certifications_Conditional_24_For_2_Case_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(0, "svg", 14);
    i0.ɵɵdomElement(1, "rect", 28)(2, "circle", 29)(3, "circle", 30)(4, "path", 31);
    i0.ɵɵdomElementEnd();
} }
function Certifications_Conditional_24_For_2_Case_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(0, "svg", 14);
    i0.ɵɵdomElement(1, "path", 32)(2, "path", 33);
    i0.ɵɵdomElementEnd();
} }
function Certifications_Conditional_24_For_2_Case_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(0, "svg", 14);
    i0.ɵɵdomElement(1, "path", 34)(2, "path", 35);
    i0.ɵɵdomElementEnd();
} }
function Certifications_Conditional_24_For_2_Case_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(0, "svg", 14);
    i0.ɵɵdomElement(1, "circle", 36)(2, "circle", 25)(3, "circle", 37)(4, "path", 38);
    i0.ɵɵdomElementEnd();
} }
function Certifications_Conditional_24_For_2_Case_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(0, "svg", 14);
    i0.ɵɵdomElement(1, "path", 39)(2, "circle", 25);
    i0.ɵɵdomElementEnd();
} }
function Certifications_Conditional_24_For_2_Case_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(0, "svg", 14);
    i0.ɵɵdomElement(1, "circle", 40)(2, "path", 41);
    i0.ɵɵdomElementEnd();
} }
function Certifications_Conditional_24_For_2_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "span", 20);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(skill_r3);
} }
function Certifications_Conditional_24_For_2_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "a", 26);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(1, "svg", 23);
    i0.ɵɵdomElement(2, "path", 42);
    i0.ɵɵdomElementEnd();
    i0.ɵɵtext(3, " T\u00E9l\u00E9charger ");
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const cert_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵdomProperty("href", cert_r4.pdfUrl, i0.ɵɵsanitizeUrl);
} }
function Certifications_Conditional_24_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "article", 11)(1, "div", 12)(2, "div", 13);
    i0.ɵɵconditionalCreate(3, Certifications_Conditional_24_For_2_Case_3_Template, 2, 0, ":svg:svg", 14)(4, Certifications_Conditional_24_For_2_Case_4_Template, 5, 0, ":svg:svg", 14)(5, Certifications_Conditional_24_For_2_Case_5_Template, 3, 0, ":svg:svg", 14)(6, Certifications_Conditional_24_For_2_Case_6_Template, 3, 0, ":svg:svg", 14)(7, Certifications_Conditional_24_For_2_Case_7_Template, 5, 0, ":svg:svg", 14)(8, Certifications_Conditional_24_For_2_Case_8_Template, 3, 0, ":svg:svg", 14)(9, Certifications_Conditional_24_For_2_Case_9_Template, 3, 0, ":svg:svg", 14);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(10, "span", 15);
    i0.ɵɵtext(11);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(12, "span", 16);
    i0.ɵɵtext(13);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(14, "h3", 17);
    i0.ɵɵtext(15);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(16, "p", 18);
    i0.ɵɵtext(17);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(18, "div", 19);
    i0.ɵɵrepeaterCreate(19, Certifications_Conditional_24_For_2_For_20_Template, 2, 1, "span", 20, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(21, "div", 21)(22, "button", 22);
    i0.ɵɵdomListener("click", function Certifications_Conditional_24_For_2_Template_button_click_22_listener() { const cert_r4 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.openModal(cert_r4)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(23, "svg", 23);
    i0.ɵɵdomElement(24, "path", 24)(25, "circle", 25);
    i0.ɵɵdomElementEnd();
    i0.ɵɵtext(26, " Voir ");
    i0.ɵɵdomElementEnd();
    i0.ɵɵconditionalCreate(27, Certifications_Conditional_24_For_2_Conditional_27_Template, 4, 1, "a", 26);
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    let tmp_14_0;
    const cert_r4 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("background", cert_r4.accent + "1A")("color", cert_r4.accent)("border-color", cert_r4.accent + "33");
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_14_0 = cert_r4.iconType) === "code" ? 3 : tmp_14_0 === "robot" ? 4 : tmp_14_0 === "assistant" ? 5 : tmp_14_0 === "ai" ? 6 : tmp_14_0 === "figma" ? 7 : tmp_14_0 === "animation" ? 8 : tmp_14_0 === "angular" ? 9 : -1);
    i0.ɵɵadvance(7);
    i0.ɵɵstyleProp("color", cert_r4.accent);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(cert_r4.organizationLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(cert_r4.year);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(cert_r4.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(cert_r4.description);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(cert_r4.skills);
    i0.ɵɵadvance(8);
    i0.ɵɵconditional(cert_r4.pdfUrl ? 27 : -1);
} }
function Certifications_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 9);
    i0.ɵɵrepeaterCreate(1, Certifications_Conditional_24_For_2_Template, 28, 14, "article", 11, _forTrack0);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.certifications());
} }
function Certifications_Conditional_25_For_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "span", 57);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const skill_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(skill_r6);
} }
function Certifications_Conditional_25_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "a", 26);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(1, "svg", 23);
    i0.ɵɵdomElement(2, "path", 42);
    i0.ɵɵdomElementEnd();
    i0.ɵɵtext(3, " T\u00E9l\u00E9charger le PDF ");
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵdomProperty("href", ctx_r0.selectedCert().pdfUrl, i0.ɵɵsanitizeUrl);
} }
function Certifications_Conditional_25_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "a", 59);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(1, "svg", 23);
    i0.ɵɵdomElement(2, "path", 60);
    i0.ɵɵdomElementEnd();
    i0.ɵɵtext(3, " V\u00E9rifier ");
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵdomProperty("href", ctx_r0.selectedCert().verificationUrl, i0.ɵɵsanitizeUrl);
} }
function Certifications_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "div", 43);
    i0.ɵɵdomListener("click", function Certifications_Conditional_25_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onBackdropClick($event)); })("keydown.escape", function Certifications_Conditional_25_Template_div_keydown_escape_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeModal()); });
    i0.ɵɵdomElementStart(1, "div", 44)(2, "button", 45);
    i0.ɵɵdomListener("click", function Certifications_Conditional_25_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeModal()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(3, "svg", 46);
    i0.ɵɵdomElement(4, "path", 47);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵdomElementStart(5, "div", 48)(6, "div", 49);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(7, "svg", 50);
    i0.ɵɵdomElement(8, "path", 51)(9, "path", 52);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵdomElementStart(10, "div")(11, "span", 53);
    i0.ɵɵtext(12);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(13, "h3");
    i0.ɵɵtext(14);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(15, "span", 54);
    i0.ɵɵtext(16);
    i0.ɵɵdomElementEnd()()();
    i0.ɵɵdomElementStart(17, "p", 55);
    i0.ɵɵtext(18);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(19, "div", 56);
    i0.ɵɵrepeaterCreate(20, Certifications_Conditional_25_For_21_Template, 2, 1, "span", 57, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(22, "div", 58);
    i0.ɵɵconditionalCreate(23, Certifications_Conditional_25_Conditional_23_Template, 4, 1, "a", 26);
    i0.ɵɵconditionalCreate(24, Certifications_Conditional_25_Conditional_24_Template, 4, 1, "a", 59);
    i0.ɵɵdomElementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-label", "Certificat : " + ctx_r0.selectedCert().title);
    i0.ɵɵadvance(6);
    i0.ɵɵstyleProp("background", ctx_r0.selectedCert().accent + "1A")("color", ctx_r0.selectedCert().accent);
    i0.ɵɵadvance(5);
    i0.ɵɵstyleProp("color", ctx_r0.selectedCert().accent);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.selectedCert().organizationLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.selectedCert().title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.selectedCert().year);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.selectedCert().description);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.selectedCert().skills);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r0.selectedCert().pdfUrl ? 23 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.selectedCert().verifiable && ctx_r0.selectedCert().verificationUrl ? 24 : -1);
} }
export class Certifications {
    certificationsService = inject(CertificationsService);
    certifications = this.certificationsService.filteredCertifications;
    loading = this.certificationsService.loading;
    error = this.certificationsService.error;
    activeOrg = this.certificationsService.activeOrg;
    selectedCert = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "selectedCert" }] : /* istanbul ignore next */ []));
    modalOpen = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "modalOpen" }] : /* istanbul ignore next */ []));
    ngOnInit() {
        this.certificationsService.load();
    }
    setFilter(org) {
        this.certificationsService.setActiveOrg(org);
    }
    openModal(cert) {
        this.selectedCert.set(cert);
        this.modalOpen.set(true);
        document.body.style.overflow = 'hidden';
    }
    closeModal() {
        this.modalOpen.set(false);
        document.body.style.overflow = '';
    }
    onBackdropClick(event) {
        if (event.target.classList.contains('cert-modal-backdrop')) {
            this.closeModal();
        }
    }
    onKeydown(event) {
        if (event.key === 'Escape') {
            this.closeModal();
        }
    }
    static ɵfac = function Certifications_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Certifications)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Certifications, selectors: [["app-certifications"]], decls: 26, vars: 16, consts: [[1, "certifications-section"], [1, "container"], [1, "cert-head"], [1, "eyebrow"], [1, "cert-filters"], ["type", "button", 1, "cert-filter", 3, "click"], [1, "filter-count"], [1, "cert-state"], [1, "cert-state", "cert-error"], [1, "cert-grid"], ["role", "dialog", "aria-modal", "true", "tabindex", "-1", 1, "cert-modal-backdrop"], ["data-tilt", "", 1, "cert-card"], [1, "cert-card-top"], [1, "cert-icon"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "cert-org"], [1, "cert-year"], [1, "cert-title"], [1, "cert-desc"], [1, "cert-skills"], [1, "cert-skill"], [1, "cert-actions"], ["type", "button", 1, "cert-btn", "cert-btn-view", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["download", "", 1, "cert-btn", "cert-btn-download", 3, "href"], ["d", "M8 6l-6 6 6 6M16 6l6 6-6 6M13 4l-2 16"], ["x", "4", "y", "8", "width", "16", "height", "12", "rx", "2"], ["cx", "9", "cy", "14", "r", "1.5"], ["cx", "15", "cy", "14", "r", "1.5"], ["d", "M12 8V4M9 4h6M2 14h2M20 14h2"], ["d", "M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"], ["d", "M4 12a8 8 0 0 0 16 0M12 20v2"], ["d", "M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z"], ["d", "M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14z"], ["cx", "12", "cy", "6", "r", "3"], ["cx", "12", "cy", "18", "r", "3"], ["d", "M6 6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3z"], ["d", "M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"], ["cx", "12", "cy", "12", "r", "9"], ["d", "M12 7l5 10M12 7l-5 10M9.5 13h5"], ["d", "M12 3v12M6 10l6 6 6-6M4 21h16"], ["role", "dialog", "aria-modal", "true", "tabindex", "-1", 1, "cert-modal-backdrop", 3, "click", "keydown.escape"], [1, "cert-modal"], ["type", "button", "aria-label", "Fermer", 1, "cert-modal-close", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["d", "M6 6l12 12M18 6L6 18"], [1, "cert-modal-header"], [1, "cert-modal-icon"], ["width", "28", "height", "28", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z"], ["d", "M9 12l2 2 4-4"], [1, "cert-modal-org"], [1, "cert-modal-year"], [1, "cert-modal-desc"], [1, "cert-modal-skills"], [1, "cert-modal-skill"], [1, "cert-modal-actions"], ["target", "_blank", "rel", "noopener noreferrer", 1, "cert-btn", "cert-btn-verify", 3, "href"], ["d", "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"]], template: function Certifications_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
            i0.ɵɵtext(4, "Certifications");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(5, "h2");
            i0.ɵɵtext(6, "Un parcours certifiant en continu");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(7, "p");
            i0.ɵɵtext(8, " ALX et Orange Digital Center m'ont form\u00E9 \u00E0 l'ing\u00E9nierie logicielle, \u00E0 l'IA, au design UI/UX et au d\u00E9veloppement Angular. Chaque certificat est consultable et d\u00E9taill\u00E9 ci-dessous. Les justificatifs t\u00E9l\u00E9chargeables sont affich\u00E9s lorsqu'ils sont disponibles. ");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(9, "div", 4)(10, "button", 5);
            i0.ɵɵdomListener("click", function Certifications_Template_button_click_10_listener() { return ctx.setFilter(null); });
            i0.ɵɵtext(11, " Toutes ");
            i0.ɵɵdomElementStart(12, "span", 6);
            i0.ɵɵtext(13);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(14, "button", 5);
            i0.ɵɵdomListener("click", function Certifications_Template_button_click_14_listener() { return ctx.setFilter("alx"); });
            i0.ɵɵtext(15, " ALX ");
            i0.ɵɵdomElementStart(16, "span", 6);
            i0.ɵɵtext(17);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(18, "button", 5);
            i0.ɵɵdomListener("click", function Certifications_Template_button_click_18_listener() { return ctx.setFilter("orange-digital-center"); });
            i0.ɵɵtext(19, " Orange Digital Center ");
            i0.ɵɵdomElementStart(20, "span", 6);
            i0.ɵɵtext(21);
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵconditionalCreate(22, Certifications_Conditional_22_Template, 2, 0, "p", 7)(23, Certifications_Conditional_23_Template, 2, 1, "p", 8)(24, Certifications_Conditional_24_Template, 3, 0, "div", 9);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵconditionalCreate(25, Certifications_Conditional_25_Template, 25, 13, "div", 10);
        } if (rf & 2) {
            i0.ɵɵadvance(10);
            i0.ɵɵclassProp("active", ctx.activeOrg() === null);
            i0.ɵɵattribute("aria-pressed", ctx.activeOrg() === null);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.certifications().length);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("active", ctx.activeOrg() === "alx");
            i0.ɵɵattribute("aria-pressed", ctx.activeOrg() === "alx");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.certifications().filter(i0.ɵɵarrowFunction(14, arrowFn0, ctx)).length);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("active", ctx.activeOrg() === "orange-digital-center");
            i0.ɵɵattribute("aria-pressed", ctx.activeOrg() === "orange-digital-center");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.certifications().filter(i0.ɵɵarrowFunction(15, arrowFn1, ctx)).length);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading() ? 22 : ctx.error() ? 23 : 24);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.modalOpen() && ctx.selectedCert() ? 25 : -1);
        } }, styles: [".certifications-section[_ngcontent-%COMP%] {\r\n  padding: 110px 0;\r\n  position: relative;\r\n  background:\r\n    radial-gradient(ellipse 50% 40% at 10% 20%, rgba(160, 32, 240, 0.04), transparent),\r\n    radial-gradient(ellipse 50% 40% at 90% 80%, rgba(240, 169, 62, 0.04), transparent);\r\n}\r\n\r\n.cert-head[_ngcontent-%COMP%] {\r\n  max-width: 640px;\r\n  margin-bottom: 48px;\r\n}\r\n\r\n.cert-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: clamp(1.6rem, 3vw, 2.2rem);\r\n  margin-top: 12px;\r\n  background: linear-gradient(90deg, var(--%NS%color-text) 40%, var(--%NS%color-text-faint) 100%);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  background-clip: text;\r\n}\r\n\r\n.cert-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: var(--%NS%color-text-muted);\r\n  margin-top: 12px;\r\n  font-size: 1.02rem;\r\n  line-height: 1.7;\r\n}\r\n\r\n\r\n.cert-filters[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 10px;\r\n  flex-wrap: wrap;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.cert-filter[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  font-family: var(--%NS%font-mono);\r\n  font-size: 0.8rem;\r\n  padding: 10px 18px;\r\n  border-radius: 100px;\r\n  border: 1px solid var(--%NS%color-border);\r\n  background: var(--%NS%color-surface);\r\n  color: var(--%NS%color-text-muted);\r\n  cursor: pointer;\r\n  transition: all .25s cubic-bezier(.4, 0, .2, 1);\r\n}\r\n\r\n.cert-filter[_ngcontent-%COMP%]:hover {\r\n  border-color: var(--%NS%color-primary);\r\n  color: var(--%NS%color-text);\r\n  transform: translateY(-2px);\r\n}\r\n\r\n.cert-filter.active[_ngcontent-%COMP%] {\r\n  background: var(--%NS%color-primary);\r\n  border-color: var(--%NS%color-primary);\r\n  color: #16130A;\r\n  font-weight: 500;\r\n  box-shadow: 0 4px 20px -4px var(--%NS%color-primary-glow);\r\n}\r\n\r\n.filter-count[_ngcontent-%COMP%] {\r\n  font-size: 0.65rem;\r\n  background: rgba(255, 255, 255, 0.1);\r\n  padding: 2px 8px;\r\n  border-radius: 100px;\r\n}\r\n\r\n.cert-filter.active[_ngcontent-%COMP%]   .filter-count[_ngcontent-%COMP%] {\r\n  background: rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n\r\n.cert-state[_ngcontent-%COMP%] {\r\n  color: var(--%NS%color-text-muted);\r\n  font-size: 0.95rem;\r\n  text-align: center;\r\n  padding: 40px 0;\r\n}\r\n.cert-error[_ngcontent-%COMP%] { color: var(--%NS%color-danger); }\r\n\r\n.cert-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 24px;\r\n}\r\n\r\n.cert-card[_ngcontent-%COMP%] {\r\n  background: var(--%NS%color-surface);\r\n  border: 1px solid var(--%NS%color-border);\r\n  border-radius: var(--%NS%radius-lg);\r\n  padding: 28px 26px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: relative;\r\n  overflow: hidden;\r\n  transition: transform .3s cubic-bezier(.4, 0, .2, 1), border-color .3s ease, box-shadow .3s ease;\r\n  will-change: transform;\r\n}\r\n\r\n.cert-card[_ngcontent-%COMP%]::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: -60%;\r\n  width: 50%;\r\n  height: 100%;\r\n  background: linear-gradient(105deg, transparent, rgba(255, 255, 255, 0.03), transparent);\r\n  animation: _ngcontent-%COMP%_cert-shimmer 4.5s ease-in-out infinite;\r\n  pointer-events: none;\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_cert-shimmer {\r\n  0% { left: -60%; }\r\n  50%, 100% { left: 130%; }\r\n}\r\n\r\n.cert-card[_ngcontent-%COMP%]:hover {\r\n  border-color: rgba(240, 169, 62, 0.35);\r\n  box-shadow: 0 16px 50px -16px rgba(0, 0, 0, 0.6), 0 0 40px -16px var(--%NS%color-primary-glow);\r\n}\r\n\r\n.cert-card-top[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.cert-icon[_ngcontent-%COMP%] {\r\n  width: 48px;\r\n  height: 48px;\r\n  border-radius: 14px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: 1px solid;\r\n  flex-shrink: 0;\r\n  transition: transform .3s ease;\r\n}\r\n\r\n.cert-card[_ngcontent-%COMP%]:hover   .cert-icon[_ngcontent-%COMP%] {\r\n  transform: scale(1.1) rotate(-5deg);\r\n}\r\n\r\n.cert-org[_ngcontent-%COMP%] {\r\n  font-family: var(--%NS%font-mono);\r\n  font-size: 0.72rem;\r\n  font-weight: 500;\r\n  letter-spacing: 0.06em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.cert-year[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n  font-family: var(--%NS%font-mono);\r\n  font-size: 0.7rem;\r\n  color: var(--%NS%color-text-faint);\r\n  border: 1px solid var(--%NS%color-border);\r\n  padding: 3px 10px;\r\n  border-radius: 100px;\r\n}\r\n\r\n.cert-title[_ngcontent-%COMP%] {\r\n  font-size: 1.15rem;\r\n  margin-bottom: 10px;\r\n  line-height: 1.3;\r\n}\r\n\r\n.cert-desc[_ngcontent-%COMP%] {\r\n  color: var(--%NS%color-text-muted);\r\n  font-size: 0.88rem;\r\n  line-height: 1.7;\r\n  flex: 1;\r\n  margin-bottom: 18px;\r\n}\r\n\r\n.cert-skills[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 6px;\r\n  margin-bottom: 22px;\r\n}\r\n\r\n.cert-skill[_ngcontent-%COMP%] {\r\n  font-family: var(--%NS%font-mono);\r\n  font-size: 0.62rem;\r\n  color: var(--%NS%color-text-muted);\r\n  border: 1px solid var(--%NS%color-border);\r\n  padding: 3px 8px;\r\n  border-radius: 100px;\r\n  background: rgba(21, 28, 38, 0.5);\r\n  transition: border-color .2s ease, color .2s ease;\r\n}\r\n\r\n.cert-skill[_ngcontent-%COMP%]:hover {\r\n  border-color: var(--%NS%color-primary);\r\n  color: var(--%NS%color-primary);\r\n}\r\n\r\n.cert-actions[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n.cert-btn[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 7px;\r\n  font-family: var(--%NS%font-mono);\r\n  font-size: 0.75rem;\r\n  padding: 9px 16px;\r\n  border-radius: 8px;\r\n  border: 1px solid var(--%NS%color-border);\r\n  background: transparent;\r\n  color: var(--%NS%color-text);\r\n  cursor: pointer;\r\n  transition: all .25s cubic-bezier(.4, 0, .2, 1);\r\n  text-decoration: none;\r\n}\r\n\r\n.cert-btn[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-2px);\r\n}\r\n\r\n.cert-btn-view[_ngcontent-%COMP%] {\r\n  border-color: var(--%NS%color-border);\r\n  color: var(--%NS%color-text-muted);\r\n}\r\n.cert-btn-view[_ngcontent-%COMP%]:hover {\r\n  border-color: var(--%NS%color-primary);\r\n  color: var(--%NS%color-primary);\r\n  box-shadow: 0 4px 20px -8px var(--%NS%color-primary-glow);\r\n}\r\n\r\n.cert-btn-download[_ngcontent-%COMP%] {\r\n  background: var(--%NS%color-primary);\r\n  border-color: var(--%NS%color-primary);\r\n  color: #16130A;\r\n  font-weight: 500;\r\n}\r\n.cert-btn-download[_ngcontent-%COMP%]:hover {\r\n  background: var(--%NS%color-primary-dim);\r\n  border-color: var(--%NS%color-primary-dim);\r\n  box-shadow: 0 4px 20px -4px var(--%NS%color-primary-glow);\r\n}\r\n\r\n.cert-btn-verify[_ngcontent-%COMP%] {\r\n  border-color: var(--%NS%color-secondary);\r\n  color: var(--%NS%color-secondary);\r\n}\r\n.cert-btn-verify[_ngcontent-%COMP%]:hover {\r\n  background: rgba(78, 201, 160, 0.1);\r\n  box-shadow: 0 4px 20px -8px var(--%NS%color-secondary-glow);\r\n}\r\n\r\n\r\n.cert-modal-backdrop[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  inset: 0;\r\n  background: rgba(5, 8, 12, 0.85);\r\n  backdrop-filter: blur(12px);\r\n  z-index: 200;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 24px;\r\n  animation: _ngcontent-%COMP%_modal-fade .25s ease;\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_modal-fade {\r\n  from { opacity: 0; }\r\n  to { opacity: 1; }\r\n}\r\n\r\n.cert-modal[_ngcontent-%COMP%] {\r\n  background: var(--%NS%color-surface);\r\n  border: 1px solid var(--%NS%color-border);\r\n  border-radius: var(--%NS%radius-lg);\r\n  max-width: 560px;\r\n  width: 100%;\r\n  max-height: 85vh;\r\n  overflow-y: auto;\r\n  padding: 36px 32px;\r\n  position: relative;\r\n  animation: _ngcontent-%COMP%_modal-pop .35s cubic-bezier(.16, 1, .3, 1);\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_modal-pop {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale(0.92) translateY(20px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: scale(1) translateY(0);\r\n  }\r\n}\r\n\r\n.cert-modal-close[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 16px;\r\n  right: 16px;\r\n  width: 36px;\r\n  height: 36px;\r\n  border-radius: 10px;\r\n  border: 1px solid var(--%NS%color-border);\r\n  background: var(--%NS%color-bg);\r\n  color: var(--%NS%color-text-muted);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  transition: all .2s ease;\r\n}\r\n\r\n.cert-modal-close[_ngcontent-%COMP%]:hover {\r\n  border-color: var(--%NS%color-danger);\r\n  color: var(--%NS%color-danger);\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.cert-modal-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 18px;\r\n  margin-bottom: 24px;\r\n}\r\n\r\n.cert-modal-icon[_ngcontent-%COMP%] {\r\n  width: 60px;\r\n  height: 60px;\r\n  border-radius: 16px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.cert-modal-org[_ngcontent-%COMP%] {\r\n  font-family: var(--%NS%font-mono);\r\n  font-size: 0.72rem;\r\n  font-weight: 500;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.08em;\r\n}\r\n\r\n.cert-modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 1.3rem;\r\n  margin-top: 4px;\r\n  line-height: 1.3;\r\n}\r\n\r\n.cert-modal-year[_ngcontent-%COMP%] {\r\n  font-family: var(--%NS%font-mono);\r\n  font-size: 0.72rem;\r\n  color: var(--%NS%color-text-faint);\r\n  margin-top: 4px;\r\n  display: inline-block;\r\n}\r\n\r\n.cert-modal-desc[_ngcontent-%COMP%] {\r\n  color: var(--%NS%color-text-muted);\r\n  font-size: 0.95rem;\r\n  line-height: 1.8;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.cert-modal-skills[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 8px;\r\n  margin-bottom: 28px;\r\n}\r\n\r\n.cert-modal-skill[_ngcontent-%COMP%] {\r\n  font-family: var(--%NS%font-mono);\r\n  font-size: 0.68rem;\r\n  color: var(--%NS%color-text-muted);\r\n  border: 1px solid var(--%NS%color-border);\r\n  padding: 4px 10px;\r\n  border-radius: 100px;\r\n}\r\n\r\n.cert-modal-actions[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 12px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n\r\n@media (max-width: 900px) {\r\n  .cert-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr 1fr; gap: 16px; }\r\n}\r\n\r\n@media (max-width: 640px) {\r\n  .cert-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\r\n  .cert-filters[_ngcontent-%COMP%] { gap: 8px; }\r\n  .cert-filter[_ngcontent-%COMP%] { font-size: 0.72rem; padding: 8px 14px; }\r\n  .cert-modal[_ngcontent-%COMP%] { padding: 28px 20px; }\r\n  .cert-modal-actions[_ngcontent-%COMP%] { flex-direction: column; }\r\n  .cert-modal-actions[_ngcontent-%COMP%]   .cert-btn[_ngcontent-%COMP%] { justify-content: center; }\r\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Certifications, [{
        type: Component,
        args: [{ selector: 'app-certifications', standalone: true, template: "<section class=\"certifications-section\">\r\n  <div class=\"container\">\r\n    <div class=\"cert-head\">\r\n      <span class=\"eyebrow\">Certifications</span>\r\n      <h2>Un parcours certifiant en continu</h2>\r\n      <p>\r\n        ALX et Orange Digital Center m'ont form\u00E9 \u00E0 l'ing\u00E9nierie logicielle, \u00E0 l'IA,\r\n        au design UI/UX et au d\u00E9veloppement Angular. Chaque certificat est consultable\r\n        et d\u00E9taill\u00E9 ci-dessous. Les justificatifs t\u00E9l\u00E9chargeables sont affich\u00E9s lorsqu'ils sont disponibles.\n      </p>\r\n    </div>\r\n\r\n    <!-- Filtres -->\r\n    <div class=\"cert-filters\">\r\n      <button\r\n        class=\"cert-filter\"\n        [class.active]=\"activeOrg() === null\"\n        [attr.aria-pressed]=\"activeOrg() === null\"\n        type=\"button\"\n        (click)=\"setFilter(null)\"\r\n      >\r\n        Toutes\r\n        <span class=\"filter-count\">{{ certifications().length }}</span>\r\n      </button>\r\n      <button\r\n        class=\"cert-filter\"\n        [class.active]=\"activeOrg() === 'alx'\"\n        [attr.aria-pressed]=\"activeOrg() === 'alx'\"\n        type=\"button\"\n        (click)=\"setFilter('alx')\"\r\n      >\r\n        ALX\r\n        <span class=\"filter-count\">{{ certifications().filter(c => c.organization === 'alx').length }}</span>\r\n      </button>\r\n      <button\r\n        class=\"cert-filter\"\n        [class.active]=\"activeOrg() === 'orange-digital-center'\"\n        [attr.aria-pressed]=\"activeOrg() === 'orange-digital-center'\"\n        type=\"button\"\n        (click)=\"setFilter('orange-digital-center')\"\r\n      >\r\n        Orange Digital Center\r\n        <span class=\"filter-count\">{{ certifications().filter(c => c.organization === 'orange-digital-center').length }}</span>\r\n      </button>\r\n    </div>\r\n\r\n    <!-- Grille -->\r\n    @if (loading()) {\r\n      <p class=\"cert-state\">Chargement des certifications\u2026</p>\r\n    } @else if (error()) {\r\n      <p class=\"cert-state cert-error\">{{ error() }}</p>\r\n    } @else {\r\n      <div class=\"cert-grid\">\r\n        @for (cert of certifications(); track cert.id) {\r\n          <article class=\"cert-card\" data-tilt>\r\n            <div class=\"cert-card-top\">\r\n              <div class=\"cert-icon\" [style.background]=\"cert.accent + '1A'\" [style.color]=\"cert.accent\" [style.borderColor]=\"cert.accent + '33'\">\r\n                @switch (cert.iconType) {\r\n                  @case ('code') {\r\n                    <svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n                      <path d=\"M8 6l-6 6 6 6M16 6l6 6-6 6M13 4l-2 16\"/>\r\n                    </svg>\r\n                  }\r\n                  @case ('robot') {\r\n                    <svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n                      <rect x=\"4\" y=\"8\" width=\"16\" height=\"12\" rx=\"2\"/>\r\n                      <circle cx=\"9\" cy=\"14\" r=\"1.5\"/>\r\n                      <circle cx=\"15\" cy=\"14\" r=\"1.5\"/>\r\n                      <path d=\"M12 8V4M9 4h6M2 14h2M20 14h2\"/>\r\n                    </svg>\r\n                  }\r\n                  @case ('assistant') {\r\n                    <svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n                      <path d=\"M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z\"/>\r\n                      <path d=\"M4 12a8 8 0 0 0 16 0M12 20v2\"/>\r\n                    </svg>\r\n                  }\r\n                  @case ('ai') {\r\n                    <svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n                      <path d=\"M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z\"/>\r\n                      <path d=\"M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14z\"/>\r\n                    </svg>\r\n                  }\r\n                  @case ('figma') {\r\n                    <svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n                      <circle cx=\"12\" cy=\"6\" r=\"3\"/>\r\n                      <circle cx=\"12\" cy=\"12\" r=\"3\"/>\r\n                      <circle cx=\"12\" cy=\"18\" r=\"3\"/>\r\n                      <path d=\"M6 6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3z\"/>\r\n                    </svg>\r\n                  }\r\n                  @case ('animation') {\r\n                    <svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n                      <path d=\"M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1\"/>\r\n                      <circle cx=\"12\" cy=\"12\" r=\"3\"/>\r\n                    </svg>\r\n                  }\r\n                  @case ('angular') {\r\n                    <svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n                      <circle cx=\"12\" cy=\"12\" r=\"9\"/>\r\n                      <path d=\"M12 7l5 10M12 7l-5 10M9.5 13h5\"/>\r\n                    </svg>\r\n                  }\r\n                }\r\n              </div>\r\n              <span class=\"cert-org\" [style.color]=\"cert.accent\">{{ cert.organizationLabel }}</span>\r\n              <span class=\"cert-year\">{{ cert.year }}</span>\r\n            </div>\r\n\r\n            <h3 class=\"cert-title\">{{ cert.title }}</h3>\r\n            <p class=\"cert-desc\">{{ cert.description }}</p>\r\n\r\n            <div class=\"cert-skills\">\r\n              @for (skill of cert.skills; track skill) {\r\n                <span class=\"cert-skill\">{{ skill }}</span>\r\n              }\r\n            </div>\r\n\r\n            <div class=\"cert-actions\">\r\n              <button type=\"button\" class=\"cert-btn cert-btn-view\" (click)=\"openModal(cert)\">\n                <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n                  <path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"/>\r\n                  <circle cx=\"12\" cy=\"12\" r=\"3\"/>\r\n                </svg>\r\n                Voir\r\n              </button>\r\n              @if (cert.pdfUrl) {\n                <a class=\"cert-btn cert-btn-download\" [href]=\"cert.pdfUrl\" download>\n                  <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path d=\"M12 3v12M6 10l6 6 6-6M4 21h16\"/>\n                  </svg>\n                  T\u00E9l\u00E9charger\n                </a>\n              }\n            </div>\r\n          </article>\r\n        }\r\n      </div>\r\n    }\r\n  </div>\r\n</section>\r\n\r\n<!-- Modal -->\r\n@if (modalOpen() && selectedCert()) {\r\n  <div\r\n    class=\"cert-modal-backdrop\"\r\n    (click)=\"onBackdropClick($event)\"\r\n    (keydown.escape)=\"closeModal()\"\r\n    role=\"dialog\"\n    aria-modal=\"true\"\n    tabindex=\"-1\"\n    [attr.aria-label]=\"'Certificat : ' + selectedCert()!.title\"\r\n  >\r\n    <div class=\"cert-modal\">\r\n      <button type=\"button\" class=\"cert-modal-close\" (click)=\"closeModal()\" aria-label=\"Fermer\">\n        <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\">\r\n          <path d=\"M6 6l12 12M18 6L6 18\"/>\r\n        </svg>\r\n      </button>\r\n\r\n      <div class=\"cert-modal-header\">\r\n        <div class=\"cert-modal-icon\" [style.background]=\"selectedCert()!.accent + '1A'\" [style.color]=\"selectedCert()!.accent\">\r\n          <svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n            <path d=\"M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z\"/>\r\n            <path d=\"M9 12l2 2 4-4\"/>\r\n          </svg>\r\n        </div>\r\n        <div>\r\n          <span class=\"cert-modal-org\" [style.color]=\"selectedCert()!.accent\">{{ selectedCert()!.organizationLabel }}</span>\r\n          <h3>{{ selectedCert()!.title }}</h3>\r\n          <span class=\"cert-modal-year\">{{ selectedCert()!.year }}</span>\r\n        </div>\r\n      </div>\r\n\r\n      <p class=\"cert-modal-desc\">{{ selectedCert()!.description }}</p>\r\n\r\n      <div class=\"cert-modal-skills\">\r\n        @for (skill of selectedCert()!.skills; track skill) {\r\n          <span class=\"cert-modal-skill\">{{ skill }}</span>\r\n        }\r\n      </div>\r\n\r\n      <div class=\"cert-modal-actions\">\r\n        @if (selectedCert()!.pdfUrl) {\n          <a class=\"cert-btn cert-btn-download\" [href]=\"selectedCert()!.pdfUrl\" download>\n            <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <path d=\"M12 3v12M6 10l6 6 6-6M4 21h16\"/>\n            </svg>\n            T\u00E9l\u00E9charger le PDF\n          </a>\n        }\n        @if (selectedCert()!.verifiable && selectedCert()!.verificationUrl) {\r\n          <a class=\"cert-btn cert-btn-verify\" [href]=\"selectedCert()!.verificationUrl\" target=\"_blank\" rel=\"noopener noreferrer\">\r\n            <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n              <path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3\"/>\r\n            </svg>\r\n            V\u00E9rifier\r\n          </a>\r\n        }\r\n      </div>\r\n    </div>\r\n  </div>\r\n}\n", styles: [".certifications-section {\r\n  padding: 110px 0;\r\n  position: relative;\r\n  background:\r\n    radial-gradient(ellipse 50% 40% at 10% 20%, rgba(160, 32, 240, 0.04), transparent),\r\n    radial-gradient(ellipse 50% 40% at 90% 80%, rgba(240, 169, 62, 0.04), transparent);\r\n}\r\n\r\n.cert-head {\r\n  max-width: 640px;\r\n  margin-bottom: 48px;\r\n}\r\n\r\n.cert-head h2 {\r\n  font-size: clamp(1.6rem, 3vw, 2.2rem);\r\n  margin-top: 12px;\r\n  background: linear-gradient(90deg, var(--color-text) 40%, var(--color-text-faint) 100%);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  background-clip: text;\r\n}\r\n\r\n.cert-head p {\r\n  color: var(--color-text-muted);\r\n  margin-top: 12px;\r\n  font-size: 1.02rem;\r\n  line-height: 1.7;\r\n}\r\n\r\n/* ============ FILTRES ============ */\r\n.cert-filters {\r\n  display: flex;\r\n  gap: 10px;\r\n  flex-wrap: wrap;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.cert-filter {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  font-family: var(--font-mono);\r\n  font-size: 0.8rem;\r\n  padding: 10px 18px;\r\n  border-radius: 100px;\r\n  border: 1px solid var(--color-border);\r\n  background: var(--color-surface);\r\n  color: var(--color-text-muted);\r\n  cursor: pointer;\r\n  transition: all .25s cubic-bezier(.4, 0, .2, 1);\r\n}\r\n\r\n.cert-filter:hover {\r\n  border-color: var(--color-primary);\r\n  color: var(--color-text);\r\n  transform: translateY(-2px);\r\n}\r\n\r\n.cert-filter.active {\r\n  background: var(--color-primary);\r\n  border-color: var(--color-primary);\r\n  color: #16130A;\r\n  font-weight: 500;\r\n  box-shadow: 0 4px 20px -4px var(--color-primary-glow);\r\n}\r\n\r\n.filter-count {\r\n  font-size: 0.65rem;\r\n  background: rgba(255, 255, 255, 0.1);\r\n  padding: 2px 8px;\r\n  border-radius: 100px;\r\n}\r\n\r\n.cert-filter.active .filter-count {\r\n  background: rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n/* ============ GRILLE ============ */\r\n.cert-state {\r\n  color: var(--color-text-muted);\r\n  font-size: 0.95rem;\r\n  text-align: center;\r\n  padding: 40px 0;\r\n}\r\n.cert-error { color: var(--color-danger); }\r\n\r\n.cert-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 24px;\r\n}\r\n\r\n.cert-card {\r\n  background: var(--color-surface);\r\n  border: 1px solid var(--color-border);\r\n  border-radius: var(--radius-lg);\r\n  padding: 28px 26px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: relative;\r\n  overflow: hidden;\r\n  transition: transform .3s cubic-bezier(.4, 0, .2, 1), border-color .3s ease, box-shadow .3s ease;\r\n  will-change: transform;\r\n}\r\n\r\n.cert-card::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: -60%;\r\n  width: 50%;\r\n  height: 100%;\r\n  background: linear-gradient(105deg, transparent, rgba(255, 255, 255, 0.03), transparent);\r\n  animation: cert-shimmer 4.5s ease-in-out infinite;\r\n  pointer-events: none;\r\n}\r\n\r\n@keyframes cert-shimmer {\r\n  0% { left: -60%; }\r\n  50%, 100% { left: 130%; }\r\n}\r\n\r\n.cert-card:hover {\r\n  border-color: rgba(240, 169, 62, 0.35);\r\n  box-shadow: 0 16px 50px -16px rgba(0, 0, 0, 0.6), 0 0 40px -16px var(--color-primary-glow);\r\n}\r\n\r\n.cert-card-top {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.cert-icon {\r\n  width: 48px;\r\n  height: 48px;\r\n  border-radius: 14px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: 1px solid;\r\n  flex-shrink: 0;\r\n  transition: transform .3s ease;\r\n}\r\n\r\n.cert-card:hover .cert-icon {\r\n  transform: scale(1.1) rotate(-5deg);\r\n}\r\n\r\n.cert-org {\r\n  font-family: var(--font-mono);\r\n  font-size: 0.72rem;\r\n  font-weight: 500;\r\n  letter-spacing: 0.06em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.cert-year {\r\n  margin-left: auto;\r\n  font-family: var(--font-mono);\r\n  font-size: 0.7rem;\r\n  color: var(--color-text-faint);\r\n  border: 1px solid var(--color-border);\r\n  padding: 3px 10px;\r\n  border-radius: 100px;\r\n}\r\n\r\n.cert-title {\r\n  font-size: 1.15rem;\r\n  margin-bottom: 10px;\r\n  line-height: 1.3;\r\n}\r\n\r\n.cert-desc {\r\n  color: var(--color-text-muted);\r\n  font-size: 0.88rem;\r\n  line-height: 1.7;\r\n  flex: 1;\r\n  margin-bottom: 18px;\r\n}\r\n\r\n.cert-skills {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 6px;\r\n  margin-bottom: 22px;\r\n}\r\n\r\n.cert-skill {\r\n  font-family: var(--font-mono);\r\n  font-size: 0.62rem;\r\n  color: var(--color-text-muted);\r\n  border: 1px solid var(--color-border);\r\n  padding: 3px 8px;\r\n  border-radius: 100px;\r\n  background: rgba(21, 28, 38, 0.5);\r\n  transition: border-color .2s ease, color .2s ease;\r\n}\r\n\r\n.cert-skill:hover {\r\n  border-color: var(--color-primary);\r\n  color: var(--color-primary);\r\n}\r\n\r\n.cert-actions {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n.cert-btn {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 7px;\r\n  font-family: var(--font-mono);\r\n  font-size: 0.75rem;\r\n  padding: 9px 16px;\r\n  border-radius: 8px;\r\n  border: 1px solid var(--color-border);\r\n  background: transparent;\r\n  color: var(--color-text);\r\n  cursor: pointer;\r\n  transition: all .25s cubic-bezier(.4, 0, .2, 1);\r\n  text-decoration: none;\r\n}\r\n\r\n.cert-btn:hover {\r\n  transform: translateY(-2px);\r\n}\r\n\r\n.cert-btn-view {\r\n  border-color: var(--color-border);\r\n  color: var(--color-text-muted);\r\n}\r\n.cert-btn-view:hover {\r\n  border-color: var(--color-primary);\r\n  color: var(--color-primary);\r\n  box-shadow: 0 4px 20px -8px var(--color-primary-glow);\r\n}\r\n\r\n.cert-btn-download {\r\n  background: var(--color-primary);\r\n  border-color: var(--color-primary);\r\n  color: #16130A;\r\n  font-weight: 500;\r\n}\r\n.cert-btn-download:hover {\r\n  background: var(--color-primary-dim);\r\n  border-color: var(--color-primary-dim);\r\n  box-shadow: 0 4px 20px -4px var(--color-primary-glow);\r\n}\r\n\r\n.cert-btn-verify {\r\n  border-color: var(--color-secondary);\r\n  color: var(--color-secondary);\r\n}\r\n.cert-btn-verify:hover {\r\n  background: rgba(78, 201, 160, 0.1);\r\n  box-shadow: 0 4px 20px -8px var(--color-secondary-glow);\r\n}\r\n\r\n/* ============ MODAL ============ */\r\n.cert-modal-backdrop {\r\n  position: fixed;\r\n  inset: 0;\r\n  background: rgba(5, 8, 12, 0.85);\r\n  backdrop-filter: blur(12px);\r\n  z-index: 200;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 24px;\r\n  animation: modal-fade .25s ease;\r\n}\r\n\r\n@keyframes modal-fade {\r\n  from { opacity: 0; }\r\n  to { opacity: 1; }\r\n}\r\n\r\n.cert-modal {\r\n  background: var(--color-surface);\r\n  border: 1px solid var(--color-border);\r\n  border-radius: var(--radius-lg);\r\n  max-width: 560px;\r\n  width: 100%;\r\n  max-height: 85vh;\r\n  overflow-y: auto;\r\n  padding: 36px 32px;\r\n  position: relative;\r\n  animation: modal-pop .35s cubic-bezier(.16, 1, .3, 1);\r\n}\r\n\r\n@keyframes modal-pop {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale(0.92) translateY(20px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: scale(1) translateY(0);\r\n  }\r\n}\r\n\r\n.cert-modal-close {\r\n  position: absolute;\r\n  top: 16px;\r\n  right: 16px;\r\n  width: 36px;\r\n  height: 36px;\r\n  border-radius: 10px;\r\n  border: 1px solid var(--color-border);\r\n  background: var(--color-bg);\r\n  color: var(--color-text-muted);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  transition: all .2s ease;\r\n}\r\n\r\n.cert-modal-close:hover {\r\n  border-color: var(--color-danger);\r\n  color: var(--color-danger);\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.cert-modal-header {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 18px;\r\n  margin-bottom: 24px;\r\n}\r\n\r\n.cert-modal-icon {\r\n  width: 60px;\r\n  height: 60px;\r\n  border-radius: 16px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.cert-modal-org {\r\n  font-family: var(--font-mono);\r\n  font-size: 0.72rem;\r\n  font-weight: 500;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.08em;\r\n}\r\n\r\n.cert-modal-header h3 {\r\n  font-size: 1.3rem;\r\n  margin-top: 4px;\r\n  line-height: 1.3;\r\n}\r\n\r\n.cert-modal-year {\r\n  font-family: var(--font-mono);\r\n  font-size: 0.72rem;\r\n  color: var(--color-text-faint);\r\n  margin-top: 4px;\r\n  display: inline-block;\r\n}\r\n\r\n.cert-modal-desc {\r\n  color: var(--color-text-muted);\r\n  font-size: 0.95rem;\r\n  line-height: 1.8;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.cert-modal-skills {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 8px;\r\n  margin-bottom: 28px;\r\n}\r\n\r\n.cert-modal-skill {\r\n  font-family: var(--font-mono);\r\n  font-size: 0.68rem;\r\n  color: var(--color-text-muted);\r\n  border: 1px solid var(--color-border);\r\n  padding: 4px 10px;\r\n  border-radius: 100px;\r\n}\r\n\r\n.cert-modal-actions {\r\n  display: flex;\r\n  gap: 12px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n/* ============ RESPONSIVE ============ */\r\n@media (max-width: 900px) {\r\n  .cert-grid { grid-template-columns: 1fr 1fr; gap: 16px; }\r\n}\r\n\r\n@media (max-width: 640px) {\r\n  .cert-grid { grid-template-columns: 1fr; }\r\n  .cert-filters { gap: 8px; }\r\n  .cert-filter { font-size: 0.72rem; padding: 8px 14px; }\r\n  .cert-modal { padding: 28px 20px; }\r\n  .cert-modal-actions { flex-direction: column; }\r\n  .cert-modal-actions .cert-btn { justify-content: center; }\r\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Certifications, { className: "Certifications", filePath: "app/features/certifications/certifications.ts", lineNumber: 11 }); })();
//# sourceMappingURL=certifications.js.map