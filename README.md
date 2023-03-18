# ArchwizardPractice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## USING ANGULAR ARCHWIZARD (SIMPLE STEPS)

## First Step: run **npm install angular-archwizard

run angular archwizard.

You can decide to import archwizard css in case you need to style its process flow indicators, but this is optional and it does not have an impact on of the wizard works or not.  ( @import '../node_modules/angular-archwizard/styles/archwizard.css';).

Also check your "Package.json" to ensure the package is properly installed.

## Second Step: import ArchWizardModule in the nearest app-module/ the app-module the component belongs

Ensure the ArchWizard module is imported into the app-module of the component you wish to use the wizard inside.

Also ensure the component is routed in your app-routing-module.ts or the routing-module your component belongs to.

Make sure your imports are correct and avoid mistakenly importing components from wrong routes.

## Third Step: Use "<aw-wizard></aw-wizard>" to wrap the components html content e.g

<aw-wizard>

<aw-wizard-step><button ></button></aw-wizard-step>

</aw-wizard-step>

The aw-wizard-steps wrap the components or html contents you wish to have in the steps. The first aw-wizard-step isautomatically the first step while the second aw-wizard-step is the second step and so on. 


## Last Step: Use "awNextStep and awPreviousStep>" to navigate between steps e.g

<aw-wizard>

<aw-wizard-step><button awNextStep></button></aw-wizard-step>This button takes the step forward one step


<aw-wizard-step>
<button awPreviousStep></button> This button takes the step back one step
<button awNextStep></button> This button takes the step forward one step
</aw-wizard-step>

</aw-wizard-step>


**Enjoy**