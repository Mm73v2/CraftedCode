import { Component } from '@angular/core';
import { ProjectItemComponent } from '../project-item/project-item.component';
import { SkillsItemComponent } from '../skills-item/skills-item.component';
import { DataService } from '../../data.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
interface ISkills {
  title: string;
  percent: number;
  icon: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProjectItemComponent,
    SkillsItemComponent,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  projects: any[] = [];
  skills: ISkills[] = [
    {
      title: 'Html',
      percent: 100,
      icon: '/html.svg',
    },
    {
      title: 'CSS',
      percent: 95,
      icon: '/css.svg',
    },
    {
      title: 'JavaScript',
      percent: 90,
      icon: '/js.svg',
    },
    {
      title: 'React',
      percent: 85,
      icon: '/react.svg',
    },
    {
      title: 'Api',
      percent: 85,
      icon: '/api.svg',
    },
    {
      title: 'Angular',
      percent: 75,
      icon: '/angular.svg',
    },
    {
      title: 'Bootstrap',
      percent: 85,
      icon: '/bootstrap.svg',
    },
    {
      title: 'Tailwind CSS',
      percent: 80,
      icon: '/tailwind.svg',
    },
    {
      title: 'SASS',
      percent: 75,
      icon: '/sass.svg',
    },
    {
      title: 'TypeScript',
      percent: 70,
      icon: '/typescript.svg',
    },
    {
      title: 'Next.js',
      percent: 75,
      icon: '/next.svg',
    },
    {
      title: 'Redux',
      percent: 70,
      icon: '/redux.svg',
    },
  ];
  loading: boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getProjects().subscribe((data: any) => {
      this.projects = data.slice(0, 3);
      this.loading = false;
      this.truncateDescriptions();
    });
  }
  truncateDescriptions() {
    this.projects.forEach((project) => {
      if (project.description.length > 100) {
        project.description = project.description.substring(0, 150) + '...';
      }
    });
  }
}
