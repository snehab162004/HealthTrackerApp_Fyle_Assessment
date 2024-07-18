import { Routes } from '@angular/router';
import { WorkoutFormComponent } from './components/workout-form/workout-form.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';

export const routes: Routes = [
  { path: 'form', component: WorkoutFormComponent },
  { path: 'list', component: WorkoutListComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' }
];
