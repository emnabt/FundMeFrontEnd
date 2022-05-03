import { ClaimComponent } from './claim/claim.component';
import { FinancialtrainingComponent } from './financialtraining/financialtraining.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'financialtraining',
    component: FinancialtrainingComponent,
  },
  {
    path: 'claim',
    component: ClaimComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmnaRoutingModule { }
