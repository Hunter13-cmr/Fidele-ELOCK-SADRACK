import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class Footer {
    year = new Date().getFullYear();
    static ɵfac = function Footer_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Footer)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Footer, selectors: [["app-footer"]], decls: 26, vars: 1, consts: [[1, "site-footer"], [1, "footer-accent"], [1, "container", "footer-inner"], [1, "footer-brand"], [1, "footer-logo"], [1, "footer-copy"], [1, "footer-certs"], [1, "footer-links"], ["href", "https://github.com/Hunter13-cmr", "target", "_blank", "rel", "noopener noreferrer"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"], ["href", "https://linkedin.com/in/esf1305", "target", "_blank", "rel", "noopener noreferrer"], ["d", "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"], ["href", "mailto:felocksadrack@gmail.com"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x", "2", "y", "4", "width", "20", "height", "16", "rx", "2"], ["d", "M22 6l-10 7L2 6"]], template: function Footer_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "footer", 0);
            i0.ɵɵdomElement(1, "div", 1);
            i0.ɵɵdomElementStart(2, "div", 2)(3, "div", 3)(4, "span", 4);
            i0.ɵɵtext(5, "fidele");
            i0.ɵɵdomElementStart(6, "span");
            i0.ɵɵtext(7, ".dev");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(8, "span", 5);
            i0.ɵɵtext(9);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(10, "span", 6);
            i0.ɵɵtext(11, "Certifi\u00E9 ALX \u00D7 Orange Digital Center \u2014 7 certifications");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(12, "div", 7)(13, "a", 8);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵdomElementStart(14, "svg", 9);
            i0.ɵɵdomElement(15, "path", 10);
            i0.ɵɵdomElementEnd();
            i0.ɵɵtext(16, " GitHub ");
            i0.ɵɵdomElementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵdomElementStart(17, "a", 11);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵdomElementStart(18, "svg", 9);
            i0.ɵɵdomElement(19, "path", 12);
            i0.ɵɵdomElementEnd();
            i0.ɵɵtext(20, " LinkedIn ");
            i0.ɵɵdomElementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵdomElementStart(21, "a", 13);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵdomElementStart(22, "svg", 14);
            i0.ɵɵdomElement(23, "rect", 15)(24, "path", 16);
            i0.ɵɵdomElementEnd();
            i0.ɵɵtext(25, " Email ");
            i0.ɵɵdomElementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate1("\u00A9 ", ctx.year, " Fid\u00E8le Elock Sadrack \u2014 Built with Angular 22");
        } }, styles: [".site-footer[_ngcontent-%COMP%] {\n  padding: 48px 0 40px;\n  position: relative;\n  background: rgba(10, 14, 20, 0.8);\n  border-top: 1px solid var(--%NS%color-border);\n  overflow: hidden;\n}\n\n.footer-accent[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 60%;\n  height: 1px;\n  background: linear-gradient(90deg, transparent, var(--%NS%color-primary-glow), var(--%NS%color-secondary-glow), transparent);\n}\n\n.footer-inner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n\n.footer-brand[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.footer-logo[_ngcontent-%COMP%] {\n  font-family: var(--%NS%font-mono);\n  font-size: 0.95rem;\n  font-weight: 500;\n}\n.footer-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: var(--%NS%color-primary); }\n\n.footer-copy[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--%NS%color-text-faint);\n}\n\n.footer-certs[_ngcontent-%COMP%] {\n  font-family: var(--%NS%font-mono);\n  font-size: 0.68rem;\n  color: var(--%NS%color-secondary);\n}\n\n.footer-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  font-family: var(--%NS%font-mono);\n  font-size: 0.78rem;\n  color: var(--%NS%color-text-muted);\n}\n\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: color .2s ease, transform .2s ease;\n}\n\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--%NS%color-primary);\n  transform: translateY(-2px);\n}\n\n@media (max-width: 640px) {\n  .footer-inner[_ngcontent-%COMP%] { flex-direction: column; align-items: flex-start; gap: 16px; }\n  .footer-links[_ngcontent-%COMP%] { flex-wrap: wrap; gap: 16px; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Footer, [{
        type: Component,
        args: [{ selector: 'app-footer', standalone: true, template: "<footer class=\"site-footer\">\n  <div class=\"footer-accent\"></div>\n  <div class=\"container footer-inner\">\n    <div class=\"footer-brand\">\n      <span class=\"footer-logo\">fidele<span>.dev</span></span>\n      <span class=\"footer-copy\">\u00A9 {{ year }} Fid\u00E8le Elock Sadrack \u2014 Built with Angular 22</span>\n      <span class=\"footer-certs\">Certifi\u00E9 ALX \u00D7 Orange Digital Center \u2014 7 certifications</span>\n    </div>\n    <div class=\"footer-links\">\n      <a href=\"https://github.com/Hunter13-cmr\" target=\"_blank\" rel=\"noopener noreferrer\">\n        <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n          <path d=\"M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z\"/>\n        </svg>\n        GitHub\n      </a>\n      <a href=\"https://linkedin.com/in/esf1305\" target=\"_blank\" rel=\"noopener noreferrer\">\n        <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n          <path d=\"M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z\"/>\n        </svg>\n        LinkedIn\n      </a>\n      <a href=\"mailto:felocksadrack@gmail.com\">\n        <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n          <rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\"/>\n          <path d=\"M22 6l-10 7L2 6\"/>\n        </svg>\n        Email\n      </a>\n    </div>\n  </div>\n</footer>", styles: [".site-footer {\n  padding: 48px 0 40px;\n  position: relative;\n  background: rgba(10, 14, 20, 0.8);\n  border-top: 1px solid var(--color-border);\n  overflow: hidden;\n}\n\n.footer-accent {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 60%;\n  height: 1px;\n  background: linear-gradient(90deg, transparent, var(--color-primary-glow), var(--color-secondary-glow), transparent);\n}\n\n.footer-inner {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n\n.footer-brand {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.footer-logo {\n  font-family: var(--font-mono);\n  font-size: 0.95rem;\n  font-weight: 500;\n}\n.footer-logo span { color: var(--color-primary); }\n\n.footer-copy {\n  font-size: 0.78rem;\n  color: var(--color-text-faint);\n}\n\n.footer-certs {\n  font-family: var(--font-mono);\n  font-size: 0.68rem;\n  color: var(--color-secondary);\n}\n\n.footer-links {\n  display: flex;\n  gap: 24px;\n  font-family: var(--font-mono);\n  font-size: 0.78rem;\n  color: var(--color-text-muted);\n}\n\n.footer-links a {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: color .2s ease, transform .2s ease;\n}\n\n.footer-links a:hover {\n  color: var(--color-primary);\n  transform: translateY(-2px);\n}\n\n@media (max-width: 640px) {\n  .footer-inner { flex-direction: column; align-items: flex-start; gap: 16px; }\n  .footer-links { flex-wrap: wrap; gap: 16px; }\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Footer, { className: "Footer", filePath: "app/layout/footer/footer.ts", lineNumber: 9 }); })();
//# sourceMappingURL=footer.js.map