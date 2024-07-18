#Workout Tracker App

This is an Angular 14+ single-page application (SPA) designed to track workouts. The application allows users to input their workout details, display the workout list with functionalities to search by name, filter by workout type, and paginate the results. Data is persisted using localStorage.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0.

Features
Add Workout: Input user name, workout type, and workout minutes.
Workout List: Display the list of workouts with search, filter, and pagination functionalities.
Persistent Data: Data is stored in localStorage for persistence across sessions.
Initial Data: Includes 3 users added to the list by default.
Tailwind CSS: Styling is done using Tailwind CSS.
Pagination: Pagination is added for more than 5 users

Installation
Clone the repository:
git clone https://github.com/snehab162004/HealthTrackerApp_Fyle_Assessment.git
cd workout-tracker-app

Install the dependencies:
npm install

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

Unit Tests
This project includes unit tests for the WorkoutService and WorkoutFormComponent.

Running Unit Tests
To run the unit tests, execute:
ng test

Unit Test Coverage
WorkoutService: Tests include adding a workout, retrieving all workouts, searching workouts by name, and filtering workouts by type.
WorkoutFormComponent: Tests include form validity, invalid form scenarios, and form submission behavior.

Code Coverage
To generate the code coverage report, run:
ng test --code-coverage

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
