import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
function Contact_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtext(1, "Veuillez renseigner votre nom.");
    i0.ɵɵelementEnd();
} }
function Contact_Conditional_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtext(1, "Veuillez renseigner votre adresse email.");
    i0.ɵɵelementEnd();
} }
function Contact_Conditional_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtext(1, "Veuillez renseigner un sujet.");
    i0.ɵɵelementEnd();
} }
function Contact_Conditional_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtext(1, "Veuillez renseigner un message d'au moins 10 caract\u00E8res.");
    i0.ɵɵelementEnd();
} }
export class Contact {
    fb = inject(FormBuilder);
    recipientEmail = 'felocksadrack@gmail.com';
    submitted = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "submitted" }] : /* istanbul ignore next */ []));
    form = this.fb.nonNullable.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        subject: ['', [Validators.required, Validators.minLength(3)]],
        message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(2000)]],
    });
    get f() {
        return this.form.controls;
    }
    onSubmit() {
        this.submitted.set(true);
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        const { name, email, subject, message } = this.form.getRawValue();
        const body = `${message}\n\n— ${name} (${email})`;
        const mailto = `mailto:${this.recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
    }
    static ɵfac = function Contact_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Contact)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Contact, selectors: [["app-contact"]], decls: 55, vars: 13, consts: [[1, "section", 2, "border-bottom", "none"], [1, "container", "contact-wrap"], [1, "contact-info"], [1, "eyebrow"], [1, "contact-channels"], ["href", "mailto:felocksadrack@gmail.com"], ["href", "https://linkedin.com/in/esf1305", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://github.com/Hunter13-cmr", "target", "_blank", "rel", "noopener noreferrer"], [1, "contact-channel"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "name"], ["id", "name", "type", "text", "autocomplete", "name", "formControlName", "name"], ["id", "name-error", 1, "form-error"], ["for", "email"], ["id", "email", "type", "email", "autocomplete", "email", "formControlName", "email"], ["id", "email-error", 1, "form-error"], ["for", "subject"], ["id", "subject", "type", "text", "formControlName", "subject"], ["id", "subject-error", 1, "form-error"], ["for", "message"], ["id", "message", "rows", "5", "formControlName", "message"], ["id", "message-error", 1, "form-error"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn"], [1, "form-note"]], template: function Contact_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
            i0.ɵɵtext(4, "Contact");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6, "Un besoin en d\u00E9veloppement Angular ou Front-End ?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8, " Je serais heureux d'\u00E9changer autour de votre produit, de votre \u00E9quipe ou de votre prochain projet. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 4)(10, "a", 5)(11, "span");
            i0.ɵɵtext(12, "Email");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "span");
            i0.ɵɵtext(14, "felocksadrack@gmail.com");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "a", 6)(16, "span");
            i0.ɵɵtext(17, "LinkedIn");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "span");
            i0.ɵɵtext(19, "esf1305 \u2197");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "a", 7)(21, "span");
            i0.ɵɵtext(22, "GitHub");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "span");
            i0.ɵɵtext(24, "Hunter13-cmr \u2197");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "div", 8)(26, "span");
            i0.ɵɵtext(27, "CV (PDF)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "span");
            i0.ɵɵtext(29, "fichier \u00E0 ajouter");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(30, "form", 9);
            i0.ɵɵlistener("ngSubmit", function Contact_Template_form_ngSubmit_30_listener() { return ctx.onSubmit(); });
            i0.ɵɵelementStart(31, "div", 10)(32, "label", 11);
            i0.ɵɵtext(33, "Nom");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(34, "input", 12);
            i0.ɵɵcontrolCreate();
            i0.ɵɵconditionalCreate(35, Contact_Conditional_35_Template, 2, 0, "div", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "div", 10)(37, "label", 14);
            i0.ɵɵtext(38, "Email");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(39, "input", 15);
            i0.ɵɵcontrolCreate();
            i0.ɵɵconditionalCreate(40, Contact_Conditional_40_Template, 2, 0, "div", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "div", 10)(42, "label", 17);
            i0.ɵɵtext(43, "Sujet");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(44, "input", 18);
            i0.ɵɵcontrolCreate();
            i0.ɵɵconditionalCreate(45, Contact_Conditional_45_Template, 2, 0, "div", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "div", 10)(47, "label", 20);
            i0.ɵɵtext(48, "Message");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(49, "textarea", 21);
            i0.ɵɵcontrolCreate();
            i0.ɵɵconditionalCreate(50, Contact_Conditional_50_Template, 2, 0, "div", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "button", 23);
            i0.ɵɵtext(52, "Envoyer le message");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "p", 24);
            i0.ɵɵtext(54, "Le formulaire ouvre votre client mail ; aucun message n'est stock\u00E9 par le site.");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(30);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(4);
            i0.ɵɵattribute("aria-invalid", ctx.f.name.invalid && (ctx.f.name.touched || ctx.submitted()))("aria-describedby", ctx.f.name.invalid && (ctx.f.name.touched || ctx.submitted()) ? "name-error" : null);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.f.name.invalid && (ctx.f.name.touched || ctx.submitted()) ? 35 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵattribute("aria-invalid", ctx.f.email.invalid && (ctx.f.email.touched || ctx.submitted()))("aria-describedby", ctx.f.email.invalid && (ctx.f.email.touched || ctx.submitted()) ? "email-error" : null);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.f.email.invalid && (ctx.f.email.touched || ctx.submitted()) ? 40 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵattribute("aria-invalid", ctx.f.subject.invalid && (ctx.f.subject.touched || ctx.submitted()))("aria-describedby", ctx.f.subject.invalid && (ctx.f.subject.touched || ctx.submitted()) ? "subject-error" : null);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.f.subject.invalid && (ctx.f.subject.touched || ctx.submitted()) ? 45 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵattribute("aria-invalid", ctx.f.message.invalid && (ctx.f.message.touched || ctx.submitted()))("aria-describedby", ctx.f.message.invalid && (ctx.f.message.touched || ctx.submitted()) ? "message-error" : null);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.f.message.invalid && (ctx.f.message.touched || ctx.submitted()) ? 50 : -1);
        } }, dependencies: [ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName], styles: [".contact-wrap[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; }\n.contact-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { font-size: clamp(1.8rem, 3.5vw, 2.4rem); margin-top: 10px; }\n.contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: var(--%NS%color-text-muted); margin-top: 16px; max-width: 46ch; }\n.contact-channels[_ngcontent-%COMP%] { margin-top: 30px; display: flex; flex-direction: column; gap: 4px; }\n.contact-channels[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.contact-channel[_ngcontent-%COMP%] {\n  display: flex; justify-content: space-between; padding: 14px 2px;\n  border-bottom: 1px solid var(--%NS%color-border); font-size: 0.95rem; color: var(--%NS%color-text-muted);\n}\n.contact-channels[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover { color: var(--%NS%color-text); }\n.contact-channels[_ngcontent-%COMP%]   :is(a[_ngcontent-%COMP%], .contact-channel[_ngcontent-%COMP%])   span[_ngcontent-%COMP%]:last-child { font-family: var(--%NS%font-mono); font-size: 0.8rem; color: var(--%NS%color-text-faint); }\n\n.form-group[_ngcontent-%COMP%] { margin-bottom: 18px; }\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { display: block; font-size: 0.82rem; color: var(--%NS%color-text-muted); margin-bottom: 7px; font-family: var(--%NS%font-mono); }\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%; background: var(--%NS%color-surface); border: 1px solid var(--%NS%color-border);\n  border-radius: 4px; padding: 12px 14px; color: var(--%NS%color-text); font-family: var(--%NS%font-body); font-size: 0.94rem;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus { border-color: var(--%NS%color-primary); outline: none; }\n.form-group[_ngcontent-%COMP%]   input[aria-invalid=\"true\"][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[aria-invalid=\"true\"][_ngcontent-%COMP%] { border-color: var(--%NS%color-danger); }\n.form-error[_ngcontent-%COMP%] { font-size: 0.78rem; color: var(--%NS%color-danger); margin-top: 6px; }\n.submit-btn[_ngcontent-%COMP%] { width: 100%; justify-content: center; }\n.form-note[_ngcontent-%COMP%] { font-size: 0.78rem; color: var(--%NS%color-text-faint); margin-top: 14px; }\n\n@media (max-width: 900px) { .contact-wrap[_ngcontent-%COMP%] { grid-template-columns: 1fr; gap: 40px; } }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Contact, [{
        type: Component,
        args: [{ selector: 'app-contact', standalone: true, imports: [ReactiveFormsModule], template: "<section class=\"section\" style=\"border-bottom:none;\">\n  <div class=\"container contact-wrap\">\n    <div class=\"contact-info\">\n      <span class=\"eyebrow\">Contact</span>\n      <h1>Un besoin en d\u00E9veloppement Angular ou Front-End ?</h1>\n      <p>\n        Je serais heureux d'\u00E9changer autour de votre produit, de votre \u00E9quipe ou de votre\n        prochain projet.\n      </p>\n      <div class=\"contact-channels\">\n        <a href=\"mailto:felocksadrack@gmail.com\"><span>Email</span><span>felocksadrack@gmail.com</span></a>\n        <a href=\"https://linkedin.com/in/esf1305\" target=\"_blank\" rel=\"noopener noreferrer\"><span>LinkedIn</span><span>esf1305 \u2197</span></a>\n        <a href=\"https://github.com/Hunter13-cmr\" target=\"_blank\" rel=\"noopener noreferrer\"><span>GitHub</span><span>Hunter13-cmr \u2197</span></a>\n        <div class=\"contact-channel\"><span>CV (PDF)</span><span>fichier \u00E0 ajouter</span></div>\n      </div>\n    </div>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"name\">Nom</label>\n        <input id=\"name\" type=\"text\" autocomplete=\"name\" formControlName=\"name\" [attr.aria-invalid]=\"f.name.invalid && (f.name.touched || submitted())\" [attr.aria-describedby]=\"f.name.invalid && (f.name.touched || submitted()) ? 'name-error' : null\" />\n        @if (f.name.invalid && (f.name.touched || submitted())) {\n          <div id=\"name-error\" class=\"form-error\">Veuillez renseigner votre nom.</div>\n        }\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input id=\"email\" type=\"email\" autocomplete=\"email\" formControlName=\"email\" [attr.aria-invalid]=\"f.email.invalid && (f.email.touched || submitted())\" [attr.aria-describedby]=\"f.email.invalid && (f.email.touched || submitted()) ? 'email-error' : null\" />\n        @if (f.email.invalid && (f.email.touched || submitted())) {\n          <div id=\"email-error\" class=\"form-error\">Veuillez renseigner votre adresse email.</div>\n        }\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"subject\">Sujet</label>\n        <input id=\"subject\" type=\"text\" formControlName=\"subject\" [attr.aria-invalid]=\"f.subject.invalid && (f.subject.touched || submitted())\" [attr.aria-describedby]=\"f.subject.invalid && (f.subject.touched || submitted()) ? 'subject-error' : null\" />\n        @if (f.subject.invalid && (f.subject.touched || submitted())) {\n          <div id=\"subject-error\" class=\"form-error\">Veuillez renseigner un sujet.</div>\n        }\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"message\">Message</label>\n        <textarea id=\"message\" rows=\"5\" formControlName=\"message\" [attr.aria-invalid]=\"f.message.invalid && (f.message.touched || submitted())\" [attr.aria-describedby]=\"f.message.invalid && (f.message.touched || submitted()) ? 'message-error' : null\"></textarea>\n        @if (f.message.invalid && (f.message.touched || submitted())) {\n          <div id=\"message-error\" class=\"form-error\">Veuillez renseigner un message d'au moins 10 caract\u00E8res.</div>\n        }\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-primary submit-btn\">Envoyer le message</button>\n      <p class=\"form-note\">Le formulaire ouvre votre client mail ; aucun message n'est stock\u00E9 par le site.</p>\n    </form>\n  </div>\n</section>\n", styles: [".contact-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; }\n.contact-info h1 { font-size: clamp(1.8rem, 3.5vw, 2.4rem); margin-top: 10px; }\n.contact-info p { color: var(--color-text-muted); margin-top: 16px; max-width: 46ch; }\n.contact-channels { margin-top: 30px; display: flex; flex-direction: column; gap: 4px; }\n.contact-channels a,\n.contact-channel {\n  display: flex; justify-content: space-between; padding: 14px 2px;\n  border-bottom: 1px solid var(--color-border); font-size: 0.95rem; color: var(--color-text-muted);\n}\n.contact-channels a:hover { color: var(--color-text); }\n.contact-channels :is(a, .contact-channel) span:last-child { font-family: var(--font-mono); font-size: 0.8rem; color: var(--color-text-faint); }\n\n.form-group { margin-bottom: 18px; }\n.form-group label { display: block; font-size: 0.82rem; color: var(--color-text-muted); margin-bottom: 7px; font-family: var(--font-mono); }\n.form-group input, .form-group textarea {\n  width: 100%; background: var(--color-surface); border: 1px solid var(--color-border);\n  border-radius: 4px; padding: 12px 14px; color: var(--color-text); font-family: var(--font-body); font-size: 0.94rem;\n}\n.form-group input:focus, .form-group textarea:focus { border-color: var(--color-primary); outline: none; }\n.form-group input[aria-invalid=\"true\"], .form-group textarea[aria-invalid=\"true\"] { border-color: var(--color-danger); }\n.form-error { font-size: 0.78rem; color: var(--color-danger); margin-top: 6px; }\n.submit-btn { width: 100%; justify-content: center; }\n.form-note { font-size: 0.78rem; color: var(--color-text-faint); margin-top: 14px; }\n\n@media (max-width: 900px) { .contact-wrap { grid-template-columns: 1fr; gap: 40px; } }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Contact, { className: "Contact", filePath: "app/features/contact/contact.ts", lineNumber: 11 }); })();
//# sourceMappingURL=contact.js.map