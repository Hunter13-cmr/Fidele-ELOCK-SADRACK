import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { injectT } from '../../core/services/i18n.service';
import { CvPicker } from '../../shared/cv-picker/cv-picker';
import { Email } from '../../services/email';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CvPicker],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly emailService = inject(Email);

  protected readonly t = injectT();

  readonly submitted = signal(false);
  readonly isSending = signal(false);
  readonly successMessage = signal('');
  readonly errorMessage = signal('');

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],

    email: ['', [
      Validators.required,
      Validators.email
    ]],

    subject: ['', [
      Validators.required,
      Validators.minLength(3)
    ]],

    message: ['', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(2000)
    ]],

    // Pot de miel : les humains ne remplissent jamais ce champ.
    website: [''],
  });

  get f() {
    return this.form.controls;
  }

  async onSubmit(): Promise<void> {

    // Protection anti-bot
    if (this.form.controls.website.value) {
      return;
    }

    this.submitted.set(true);

    this.successMessage.set('');
    this.errorMessage.set('');

    // Validation
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // Évite plusieurs clics pendant l'envoi
    if (this.isSending()) {
      return;
    }

    this.isSending.set(true);

    const {
      name,
      email,
      subject,
      message,
    } = this.form.getRawValue();

    try {

      await this.emailService.sendEmail({
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
      });

      this.successMessage.set(
        'Votre message a été envoyé avec succès.'
      );

      this.form.reset({
        name: '',
        email: '',
        subject: '',
        message: '',
        website: '',
      });

      this.submitted.set(false);

    } catch (error) {

      console.error(
        'Erreur EmailJS :',
        error
      );

      this.errorMessage.set(
        'Une erreur est survenue lors de l’envoi. Veuillez réessayer.'
      );

    } finally {

      this.isSending.set(false);

    }
  }
}