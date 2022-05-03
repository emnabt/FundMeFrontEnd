import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from '../account/account.component';
 import { CreditComponent } from './credit.component';
import { RepaymentComponent } from './repayment/repayment.component';
 

const routes: Routes = [
  {
    path: '',
    component: CreditComponent,
    
    children: [
 
    ],
  },
  {
    path: 'repayment',
    component: RepaymentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditRoutingModule {}
