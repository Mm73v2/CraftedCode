import { Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'projects', component: ProjectsComponent }, // Projects page
      { path: 'projects/:id', component: ProjectDetailsComponent }, // Dynamic route for project details
      { path: 'contact', component: ContactComponent }, // Contact page
    ],
  },
  { path: '**', redirectTo: '' }, // Redirect any unknown paths to home
];
