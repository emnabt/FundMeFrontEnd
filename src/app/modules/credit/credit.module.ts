import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditComponent } from './credit.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CreditRoutingModule } from './credit-routing.module';
import { CreditService } from 'src/app/services/CreditService';
import { RepaymentComponent } from './repayment/repayment.component';



@NgModule({
  declarations: [CreditComponent, RepaymentComponent ],
  imports: [
    CommonModule,
    CreditRoutingModule 
  ],
  providers: [CreditService],
})
export class CreditModule { }
