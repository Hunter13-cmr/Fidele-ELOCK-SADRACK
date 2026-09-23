import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import * as i0 from "@angular/core";
function Header_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17)(1, "a", 18);
    i0.ɵɵlistener("click", function Header_Conditional_31_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeMenu()); });
    i0.ɵɵtext(2, "\u00C0 propos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 19);
    i0.ɵɵlistener("click", function Header_Conditional_31_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeMenu()); });
    i0.ɵɵtext(4, "Comp\u00E9tences");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 20);
    i0.ɵɵlistener("click", function Header_Conditional_31_Template_a_click_5_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeMenu()); });
    i0.ɵɵtext(6, "Projets");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "a", 21);
    i0.ɵɵlistener("click", function Header_Conditional_31_Template_a_click_7_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeMenu()); });
    i0.ɵɵtext(8, "Certifications");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "a", 22);
    i0.ɵɵlistener("click", function Header_Conditional_31_Template_a_click_9_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeMenu()); });
    i0.ɵɵtext(10, "Parcours");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "a", 23);
    i0.ɵɵlistener("click", function Header_Conditional_31_Template_a_click_11_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeMenu()); });
    i0.ɵɵtext(12, "Contact");
    i0.ɵɵelementEnd()();
} }
export class Header {
    menuOpen = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "menuOpen" }] : /* istanbul ignore next */ []));
    toggleMenu() {
        this.menuOpen.update((open) => !open);
    }
    closeMenu() {
        this.menuOpen.set(false);
    }
    static ɵfac = function Header_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Header)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Header, selectors: [["app-header"]], decls: 32, vars: 4, consts: [[1, "site-header"], [1, "container", "nav-inner"], ["routerLink", "/", 1, "logo"], [1, "logo-bracket"], ["aria-label", "Navigation principale", 1, "nav-links"], ["routerLink", "/about", "routerLinkActive", "active"], ["routerLink", "/", "fragment", "skills"], ["routerLink", "/projects", "routerLinkActive", "active"], ["routerLink", "/certifications", "routerLinkActive", "active"], ["routerLink", "/", "fragment", "about-preview"], ["routerLink", "/contact", "routerLinkActive", "active"], [1, "nav-cta"], ["title", "Ajoutez le PDF du CV dans src/assets pour activer ce lien", 1, "btn", "btn-ghost", "nav-unavailable"], ["routerLink", "/contact", 1, "btn", "btn-primary"], ["type", "button", "aria-controls", "mobilePanel", "aria-label", "Ouvrir le menu", 1, "menu-toggle", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 18 18", "fill", "none"], ["d", "M2 5h14M2 9h14M2 13h14", "stroke", "currentColor", "stroke-width", "1.6", "stroke-linecap", "round"], ["id", "mobilePanel", 1, "container", "mobile-panel"], ["routerLink", "/about", 3, "click"], ["routerLink", "/", "fragment", "skills", 3, "click"], ["routerLink", "/projects", 3, "click"], ["routerLink", "/certifications", 3, "click"], ["routerLink", "/", "fragment", "about-preview", 3, "click"], ["routerLink", "/contact", 3, "click"]], template: function Header_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "div", 1)(2, "a", 2)(3, "span", 3);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(5, " fidele");
            i0.ɵɵelementStart(6, "span");
            i0.ɵɵtext(7, ".dev");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "span", 3);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "nav", 4)(11, "a", 5);
            i0.ɵɵtext(12, "\u00C0 propos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "a", 6);
            i0.ɵɵtext(14, "Comp\u00E9tences");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "a", 7);
            i0.ɵɵtext(16, "Projets");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "a", 8);
            i0.ɵɵtext(18, "Certifications");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "a", 9);
            i0.ɵɵtext(20, "Parcours");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "a", 10);
            i0.ɵɵtext(22, "Contact");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "div", 11)(24, "span", 12);
            i0.ɵɵtext(25, "CV \u00E0 ajouter");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "a", 13);
            i0.ɵɵtext(27, "Me contacter");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "button", 14);
            i0.ɵɵlistener("click", function Header_Template_button_click_28_listener() { return ctx.toggleMenu(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(29, "svg", 15);
            i0.ɵɵelement(30, "path", 16);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵconditionalCreate(31, Header_Conditional_31_Template, 13, 0, "div", 17);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate("{");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate("}");
            i0.ɵɵadvance(19);
            i0.ɵɵattribute("aria-expanded", ctx.menuOpen());
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.menuOpen() ? 31 : -1);
        } }, dependencies: [RouterLink, RouterLinkActive], styles: [".site-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: rgba(10, 14, 20, 0.85);\n  backdrop-filter: blur(16px);\n  border-bottom: 1px solid var(--%NS%color-border);\n  transition: box-shadow .3s ease;\n}\n\n.site-header[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 40px -12px rgba(240, 169, 62, 0.08);\n}\n\n.nav-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 76px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  font-family: var(--%NS%font-mono);\n  font-size: 1.05rem;\n  font-weight: 500;\n  letter-spacing: -0.02em;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  transition: color .2s ease;\n}\n\n.logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: var(--%NS%color-primary); }\n.logo[_ngcontent-%COMP%]   .logo-bracket[_ngcontent-%COMP%] {\n  color: var(--%NS%color-text-faint);\n  font-size: 0.85rem;\n  transition: color .2s ease;\n}\n\n.logo[_ngcontent-%COMP%]:hover   .logo-bracket[_ngcontent-%COMP%] { color: var(--%NS%color-primary); }\n\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  font-size: 0.92rem;\n  color: var(--%NS%color-text-muted);\n}\n\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  transition: color .2s ease;\n  padding: 4px 2px;\n}\n\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 0;\n  height: 2px;\n  background: var(--%NS%gradient-primary);\n  border-radius: 2px;\n  transition: width .3s cubic-bezier(.4, 0, .2, 1);\n}\n\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.nav-links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: var(--%NS%color-text);\n}\n\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::after, \n.nav-links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]::after {\n  width: 100%;\n}\n\n.nav-cta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n\n.nav-cta[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  font-size: 0.8rem;\n}\n.nav-unavailable[_ngcontent-%COMP%] {\n  cursor: default;\n  opacity: 0.72;\n}\n.nav-unavailable[_ngcontent-%COMP%]:hover {\n  transform: none;\n  border-color: var(--%NS%color-border);\n  color: var(--%NS%color-text-muted);\n  box-shadow: none;\n}\n.nav-unavailable[_ngcontent-%COMP%]:hover::after { transform: scaleX(0); }\n\n.menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  background: none;\n  border: 1px solid var(--%NS%color-border);\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  align-items: center;\n  justify-content: center;\n  color: var(--%NS%color-text);\n  transition: border-color .2s ease;\n}\n\n.menu-toggle[_ngcontent-%COMP%]:hover { border-color: var(--%NS%color-primary); }\n\n.mobile-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 12px 0 20px;\n  border-top: 1px solid var(--%NS%color-border);\n}\n\n.mobile-panel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 12px 4px;\n  color: var(--%NS%color-text-muted);\n  border-bottom: 1px solid var(--%NS%color-border);\n  font-size: 0.95rem;\n  transition: color .2s ease, padding-left .2s ease;\n}\n\n.mobile-panel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child { border-bottom: none; }\n\n.mobile-panel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--%NS%color-primary);\n  padding-left: 10px;\n}\n\n.mobile-panel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n  color: var(--%NS%color-primary);\n  font-weight: 600;\n}\n\n@media (max-width: 640px) {\n  .nav-links[_ngcontent-%COMP%] { display: none; }\n  .nav-cta[_ngcontent-%COMP%] { gap: 8px; }\n  .nav-cta[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%] { display: inline-flex; padding: 8px 10px; font-size: 0.72rem; }\n  .menu-toggle[_ngcontent-%COMP%] { display: flex; }\n  .nav-cta[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] { padding: 9px 14px; font-size: 0.75rem; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Header, [{
        type: Component,
        args: [{ selector: 'app-header', standalone: true, imports: [RouterLink, RouterLinkActive], template: "<header class=\"site-header\">\n  <div class=\"container nav-inner\">\n    <a routerLink=\"/\" class=\"logo\">\n      <span class=\"logo-bracket\">{{ '{' }}</span>\n      fidele<span>.dev</span>\n      <span class=\"logo-bracket\">{{ '}' }}</span>\n    </a>\n\n    <nav class=\"nav-links\" aria-label=\"Navigation principale\">\n      <a routerLink=\"/about\" routerLinkActive=\"active\">\u00C0 propos</a>\n      <a routerLink=\"/\" fragment=\"skills\">Comp\u00E9tences</a>\n      <a routerLink=\"/projects\" routerLinkActive=\"active\">Projets</a>\n      <a routerLink=\"/certifications\" routerLinkActive=\"active\">Certifications</a>\n      <a routerLink=\"/\" fragment=\"about-preview\">Parcours</a>\n      <a routerLink=\"/contact\" routerLinkActive=\"active\">Contact</a>\n    </nav>\n\n    <div class=\"nav-cta\">\n      <span class=\"btn btn-ghost nav-unavailable\" title=\"Ajoutez le PDF du CV dans src/assets pour activer ce lien\">CV \u00E0 ajouter</span>\n      <a routerLink=\"/contact\" class=\"btn btn-primary\">Me contacter</a>\n      <button\n        class=\"menu-toggle\"\n        type=\"button\"\n        (click)=\"toggleMenu()\"\n        [attr.aria-expanded]=\"menuOpen()\"\n        aria-controls=\"mobilePanel\"\n        aria-label=\"Ouvrir le menu\"\n      >\n        <svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\">\n          <path d=\"M2 5h14M2 9h14M2 13h14\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" />\n        </svg>\n      </button>\n    </div>\n  </div>\n\n  @if (menuOpen()) {\n    <div class=\"container mobile-panel\" id=\"mobilePanel\">\n      <a routerLink=\"/about\" (click)=\"closeMenu()\">\u00C0 propos</a>\n      <a routerLink=\"/\" fragment=\"skills\" (click)=\"closeMenu()\">Comp\u00E9tences</a>\n      <a routerLink=\"/projects\" (click)=\"closeMenu()\">Projets</a>\n      <a routerLink=\"/certifications\" (click)=\"closeMenu()\">Certifications</a>\n      <a routerLink=\"/\" fragment=\"about-preview\" (click)=\"closeMenu()\">Parcours</a>\n      <a routerLink=\"/contact\" (click)=\"closeMenu()\">Contact</a>\n    </div>\n  }\n</header>\n", styles: [".site-header {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: rgba(10, 14, 20, 0.85);\n  backdrop-filter: blur(16px);\n  border-bottom: 1px solid var(--color-border);\n  transition: box-shadow .3s ease;\n}\n\n.site-header:hover {\n  box-shadow: 0 4px 40px -12px rgba(240, 169, 62, 0.08);\n}\n\n.nav-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 76px;\n}\n\n.logo {\n  font-family: var(--font-mono);\n  font-size: 1.05rem;\n  font-weight: 500;\n  letter-spacing: -0.02em;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  transition: color .2s ease;\n}\n\n.logo span { color: var(--color-primary); }\n.logo .logo-bracket {\n  color: var(--color-text-faint);\n  font-size: 0.85rem;\n  transition: color .2s ease;\n}\n\n.logo:hover .logo-bracket { color: var(--color-primary); }\n\n.nav-links {\n  display: flex;\n  gap: 32px;\n  font-size: 0.92rem;\n  color: var(--color-text-muted);\n}\n\n.nav-links a {\n  position: relative;\n  transition: color .2s ease;\n  padding: 4px 2px;\n}\n\n.nav-links a::after {\n  content: '';\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 0;\n  height: 2px;\n  background: var(--gradient-primary);\n  border-radius: 2px;\n  transition: width .3s cubic-bezier(.4, 0, .2, 1);\n}\n\n.nav-links a:hover,\n.nav-links a.active {\n  color: var(--color-text);\n}\n\n.nav-links a:hover::after,\n.nav-links a.active::after {\n  width: 100%;\n}\n\n.nav-cta {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n\n.nav-cta .btn {\n  padding: 9px 18px;\n  font-size: 0.8rem;\n}\n.nav-unavailable {\n  cursor: default;\n  opacity: 0.72;\n}\n.nav-unavailable:hover {\n  transform: none;\n  border-color: var(--color-border);\n  color: var(--color-text-muted);\n  box-shadow: none;\n}\n.nav-unavailable:hover::after { transform: scaleX(0); }\n\n.menu-toggle {\n  display: none;\n  background: none;\n  border: 1px solid var(--color-border);\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text);\n  transition: border-color .2s ease;\n}\n\n.menu-toggle:hover { border-color: var(--color-primary); }\n\n.mobile-panel {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 12px 0 20px;\n  border-top: 1px solid var(--color-border);\n}\n\n.mobile-panel a {\n  padding: 12px 4px;\n  color: var(--color-text-muted);\n  border-bottom: 1px solid var(--color-border);\n  font-size: 0.95rem;\n  transition: color .2s ease, padding-left .2s ease;\n}\n\n.mobile-panel a:last-child { border-bottom: none; }\n\n.mobile-panel a:hover {\n  color: var(--color-primary);\n  padding-left: 10px;\n}\n\n.mobile-panel a:first-child {\n  color: var(--color-primary);\n  font-weight: 600;\n}\n\n@media (max-width: 640px) {\n  .nav-links { display: none; }\n  .nav-cta { gap: 8px; }\n  .nav-cta .btn-ghost { display: inline-flex; padding: 8px 10px; font-size: 0.72rem; }\n  .menu-toggle { display: flex; }\n  .nav-cta .btn-primary { padding: 9px 14px; font-size: 0.75rem; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Header, { className: "Header", filePath: "app/layout/header/header.ts", lineNumber: 11 }); })();
//# sourceMappingURL=header.js.map