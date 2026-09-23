import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
export class NotFound {
    static ɵfac = function NotFound_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NotFound)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NotFound, selectors: [["app-not-found"]], decls: 10, vars: 0, consts: [[1, "section", "not-found", 2, "border-bottom", "none"], [1, "container"], [1, "eyebrow"], ["routerLink", "/", 1, "btn", "btn-primary"]], template: function NotFound_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "span", 2);
            i0.ɵɵtext(3, "404");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h1");
            i0.ɵɵtext(5, "Cette page n'existe pas.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7, "Elle a peut-\u00EAtre \u00E9t\u00E9 d\u00E9plac\u00E9e ou l'adresse comporte une erreur.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "a", 3);
            i0.ɵɵtext(9, "Retour \u00E0 l'accueil");
            i0.ɵɵelementEnd()()();
        } }, dependencies: [RouterLink], styles: [".not-found[_ngcontent-%COMP%] { text-align: center; padding: 140px 0; }\n.not-found[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { font-size: clamp(1.8rem, 4vw, 2.6rem); margin-top: 10px; }\n.not-found[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: var(--%NS%color-text-muted); margin: 18px 0 32px; }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotFound, [{
        type: Component,
        args: [{ selector: 'app-not-found', standalone: true, imports: [RouterLink], template: "<section class=\"section not-found\" style=\"border-bottom:none;\">\n  <div class=\"container\">\n    <span class=\"eyebrow\">404</span>\n    <h1>Cette page n'existe pas.</h1>\n    <p>Elle a peut-\u00EAtre \u00E9t\u00E9 d\u00E9plac\u00E9e ou l'adresse comporte une erreur.</p>\n    <a routerLink=\"/\" class=\"btn btn-primary\">Retour \u00E0 l'accueil</a>\n  </div>\n</section>\n", styles: [".not-found { text-align: center; padding: 140px 0; }\n.not-found h1 { font-size: clamp(1.8rem, 4vw, 2.6rem); margin-top: 10px; }\n.not-found p { color: var(--color-text-muted); margin: 18px 0 32px; }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NotFound, { className: "NotFound", filePath: "app/features/not-found/not-found.ts", lineNumber: 11 }); })();
//# sourceMappingURL=not-found.js.map