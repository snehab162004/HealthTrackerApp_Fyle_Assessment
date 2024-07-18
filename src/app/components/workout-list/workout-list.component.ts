import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../services/workout.service.ts.service';
import { Workout } from '../../models/workout.model';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {
  workouts: Workout[] = [];
  filteredWorkouts: Workout[] = [];
  searchText = '';
  filterType = '';
  currentPage = 1;
  itemsPerPage = 5;

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.loadWorkouts();
  }

  loadWorkouts(): void {
    this.workouts = this.workoutService.getWorkouts();
    this.filteredWorkouts = this.workouts;
  }

  onSearch(): void {
    this.applyFilters();
  }

  onFilter(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    let filtered = this.workouts;

    if (this.searchText) {
      filtered = this.workoutService.searchWorkouts(this.searchText);
    }

    if (this.filterType) {
      filtered = filtered.filter(w => w.workoutType === this.filterType);
    }

    this.filteredWorkouts = filtered;
    this.currentPage = 1; // Reset to first page
  }

  get paginatedWorkouts(): Workout[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredWorkouts.slice(start, end);
  }

  nextPage(): void {
    if (this.currentPage * this.itemsPerPage < this.filteredWorkouts.length) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
