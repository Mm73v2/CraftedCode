import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css',
})
export class ProjectDetailsComponent {
  projectId: string | null = null;
  project: any;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id');
    if (this.projectId) {
      this.getProject(this.projectId);
    }
  }

  getProject(id: string) {
    this.dataService.getProjectById(id).subscribe(
      (data) => {
        this.project = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching project:', error);
      }
    );
  }
}
