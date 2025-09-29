import { Component, inject } from '@angular/core';
import { BreakpointService } from '../../../services/breakpoint';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [TranslocoModule, FormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss'
})
export class ContactForm {

  constructor(public bp: BreakpointService) {

  }

  http = inject(HttpClient)
  contactData = {
    name: "",
    email: "",
    message: "",
    privacy: false,
  }

  mailTest = true;

  post = {
    endPoint: 'https://potfolio.lucashamacher.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
      },
      responseType: 'text' as const,
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.invalid) {
      ngForm.control.markAllAsTouched();
      return;
    }
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }
}
