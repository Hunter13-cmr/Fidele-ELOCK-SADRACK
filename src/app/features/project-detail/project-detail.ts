import { Component, DestroyRef, OnInit, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectsService } from '../../core/services/projects.service';
import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly projectsService = inject(ProjectsService);
  private readonly destroyRef = inject(DestroyRef);

  private readonly slug = signal<string>(this.route.snapshot.paramMap.get('slug') ?? '');
  readonly loading = this.projectsService.loading;

  readonly project = computed<Project | undefined>(() =>
    this.projectsService.getBySlug(this.slug())
  );

  readonly notFound = computed(() => !this.loading() && !this.project());

  getProjectImages(project: Project): string[] {
    return project.images ?? [];
  }

  constructor() {
    this.route.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        this.slug.set(params.get('slug') ?? '');
      });
  }

  ngOnInit(): void {
    this.projectsService.load();
  }
}
