import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExperienceService } from '../../core/services/experience.service';
import { ExperienceEntry } from '../../core/models/experience.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  private readonly experienceService = inject(ExperienceService);

  readonly jobs = this.experienceService.jobs;
  readonly training = this.experienceService.training;
  readonly loading = this.experienceService.loading;
  readonly error = this.experienceService.error;

  ngOnInit(): void {
    this.experienceService.load();
  }

  /** Rang de l'entrée dans sa liste, pour la numérotation des cartes. */
  indexOf(list: ExperienceEntry[], entry: ExperienceEntry): number {
    return list.indexOf(entry) + 1;
  }
}
