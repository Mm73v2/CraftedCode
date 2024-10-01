import { Component } from '@angular/core';
import { ProjectItemComponent } from '../project-item/project-item.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectItemComponent, CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: any = [];
  paginatedProjects: any[] = [];
  currentPage = 1;
  projectsPerPage = 6;
  totalPages = 0;
  loading: boolean = true;
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService.getProjects().subscribe((data: any) => {
      this.projects = data;
      this.totalPages = Math.ceil(this.projects.length / this.projectsPerPage);
      this.setPaginatedProjects();
      this.loading = false;
      this.truncateDescriptions();
    });
  }
  setPaginatedProjects(): void {
    const startIndex = (this.currentPage - 1) * this.projectsPerPage;
    const endIndex = startIndex + this.projectsPerPage;
    this.paginatedProjects = this.projects.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.setPaginatedProjects();
  }

  truncateDescriptions() {
    this.projects.forEach((project: any) => {
      if (project.description.length > 100) {
        project.description = project.description.substring(0, 150) + '...';
      }
    });
  }
}
