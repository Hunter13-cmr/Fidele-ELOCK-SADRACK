import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectsService } from '../../core/services/projects.service';
import { Project } from '../../core/models/project.model';

type FilterValue = 'Tous' | Project['category'];

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {
  private readonly projectsService = inject(ProjectsService);

  readonly filters: FilterValue[] = ['Tous', 'Angular', 'Front-End', 'Full Stack', 'API'];
  readonly activeFilter = signal<FilterValue>('Tous');

  readonly loading = this.projectsService.loading;
  readonly error = this.projectsService.error;

  readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    const all = this.projectsService.projects();
    return filter === 'Tous' ? all : all.filter((p) => p.category === filter);
  });

  ngOnInit(): void {
    this.projectsService.load();
  }

  setFilter(filter: FilterValue): void {
    this.activeFilter.set(filter);
  }

  getProjectImages(project: Project): string[] {
    return project.images ?? [];
  }
}
