import { Component } from '@angular/core';
import { injectT } from '../../../../core/services/i18n.service';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css',
})
export class ProfileCard {
  protected readonly t = injectT();
}

