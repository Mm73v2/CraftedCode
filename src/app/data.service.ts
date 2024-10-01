import { Injectable } from '@angular/core';
import { Database, ref, get, child } from '@angular/fire/database';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private db: Database) {}

  // Fetch all projects from the Realtime Database
  getProjects(): Observable<any[]> {
    const projectsRef = ref(this.db, 'projects');
    return from(
      get(projectsRef).then((snapshot) => {
        const data = snapshot.val();
        if (data) {
          // Convert to an array, filtering out nulls
          return Object.values(data).filter((item) => item !== null);
        }
        return []; // return an empty array if no data
      })
    );
  }

  // Fetch a single project by ID
  getProjectById(id: string): Observable<any> {
    const projectRef = ref(this.db, `/projects/${+id}`);
    return from(get(projectRef).then((snapshot) => snapshot.val()));
  }
}
