import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CvsService } from '../../core/services/cvs.service';
import { CvPicker } from '../../shared/cv-picker/cv-picker';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CvPicker],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  private readonly cvsService = inject(CvsService);

  readonly menuOpen = signal(false);

  ngOnInit(): void {
    this.cvsService.load();
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
