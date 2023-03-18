import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstWizardComponent } from './first-wizard/first-wizard.component';
import { IntranetModule } from './intranet/intranet.module';

const routes: Routes = [
  {
    path: '',
    component: FirstWizardComponent
  },

  { path: 'intranet', loadChildren: () => import('./intranet/intranet.module').then(m => m.IntranetModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
