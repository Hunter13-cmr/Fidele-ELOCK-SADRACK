import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { injectT } from '../../core/services/i18n.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {
  protected readonly t = injectT();
}

