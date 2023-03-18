import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from 'path';
import { SecondWizardComponent } from './second-wizard/second-wizard.component';

const routes: Routes = [
{  path: '',
  component: SecondWizardComponent 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
