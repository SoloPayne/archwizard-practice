import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArchwizardModule } from 'angular-archwizard';
import { IntranetModule } from './intranet/intranet.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstWizardComponent } from './first-wizard/first-wizard.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstWizardComponent,
    Step1Component,
    Step2Component,
    Step3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArchwizardModule,
    IntranetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
