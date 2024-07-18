import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkoutService } from '../../services/workout.service.ts.service';
import { Workout } from '../../models/workout.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css']
})
export class WorkoutFormComponent {
  workoutForm: FormGroup;

  constructor(private fb: FormBuilder, private workoutService: WorkoutService, private router: Router) {
    this.workoutForm = this.fb.group({
      userName: ['', Validators.required],
      workoutType: ['', Validators.required],
      minutes: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    if (this.workoutForm.valid) {
      const newWorkout: Workout = this.workoutForm.value;
      this.workoutService.addWorkout(newWorkout);
      this.workoutForm.reset();
      this.router.navigate(['/list']); // Redirect to the workout list after adding
    }
  }
}
