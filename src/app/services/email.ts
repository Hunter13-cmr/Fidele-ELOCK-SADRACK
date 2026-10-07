import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class Email {
  private readonly serviceId = 'service_portfolio';
  private readonly templateId = 'template_contact';
  private readonly publicKey = '1ra24xoZN0QU15z9I';

  async sendEmail(templateParams: {
    from_name: string;
    from_email: string;
    subject: string;
    message: string;
  }): Promise<void> {
    await emailjs.send(
      this.serviceId,
      this.templateId,
      templateParams,
      {
        publicKey: this.publicKey,
      }
    );
  }
}
