import { Injectable } from '@angular/core';
import { Workout } from '../models/workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private storageKey = 'workouts';
  private workouts: Workout[] = [];

  constructor() {
    this.loadInitialData();
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  private loadInitialData(): void {
    if (typeof window === 'undefined' || !this.isLocalStorageAvailable()) {
      console.warn('LocalStorage is not available. Workouts will not be persisted.');
      return;
    }

    const data = localStorage.getItem(this.storageKey);
    if (data) {
      this.workouts = JSON.parse(data);
    } else {
      this.workouts = [];
      this.saveData();
    }
  }

  private saveData(): void {
    if (typeof window === 'undefined' || !this.isLocalStorageAvailable()) {
      return;
    }
    localStorage.setItem(this.storageKey, JSON.stringify(this.workouts));
  }

  getWorkouts(): Workout[] {
    return this.workouts;
  }

  addWorkout(workout: Workout): void {
    workout.id = this.workouts.length ? Math.max(...this.workouts.map(w => w.id)) + 1 : 1;
    this.workouts.push(workout);
    this.saveData();
  }

  searchWorkouts(name: string): Workout[] {
    return this.workouts.filter(w => w.userName.toLowerCase().includes(name.toLowerCase()));
  }

  filterWorkouts(type: string): Workout[] {
    return this.workouts.filter(w => w.workoutType === type);
  }
}
