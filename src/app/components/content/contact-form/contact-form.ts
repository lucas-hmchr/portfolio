import { Component, inject } from '@angular/core';
import { BreakpointService } from '../../../services/breakpoint';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [TranslocoModule, FormsModule, RouterLink],
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

  mailTest = false;

  // UI-Status
  isSubmitting = false;
  status: 'idle' | 'success' | 'error' = 'idle';
  private hideStatusTimeout?: ReturnType<typeof setTimeout>;

  post = {
    endPoint: 'https://portfolio.lucashamacher.de/sendMail.php',
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
      this.isSubmitting = true;
      this.status = 'idle';

      this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: (textResponse: any) => {
            this.status = 'success';
            ngForm.resetForm();
            this.isSubmitting = false;
            this.startAutoHide();
          },
          error: (err) => {
            this.status = 'error';
            this.isSubmitting = false;
            this.startAutoHide();
          }
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

  private startAutoHide() {
    if (this.hideStatusTimeout) clearTimeout(this.hideStatusTimeout);

    const delay = this.status === 'success' ? 3000 : 6000;
    this.hideStatusTimeout = setTimeout(() => {
      this.status = 'idle';
    }, delay);
  }

  ngOnDestroy() {
    if (this.hideStatusTimeout) clearTimeout(this.hideStatusTimeout);
  }
}


