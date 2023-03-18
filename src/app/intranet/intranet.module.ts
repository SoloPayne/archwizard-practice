import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchwizardModule } from 'angular-archwizard';

import { IntranetRoutingModule } from './intranet-routing.module';
import { SecondWizardComponent } from './second-wizard/second-wizard.component';
import { Step4Component } from './step4/step4.component';
import { Step5Component } from './step5/step5.component';
import { Step6Component } from './step6/step6.component';



@NgModule({
  declarations: [
    SecondWizardComponent,
    Step4Component,
    Step5Component,
    Step6Component
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule,
    ArchwizardModule
  ]
})
export class IntranetModule { }
