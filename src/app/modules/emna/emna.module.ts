import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmnaRoutingModule } from './emna-routing.module';
import { FinancialtrainingComponent } from './financialtraining/financialtraining.component';
import { ClaimComponent } from './claim/claim.component';


@NgModule({
  declarations: [
    FinancialtrainingComponent,
    ClaimComponent
  ],
  imports: [
    CommonModule,
    EmnaRoutingModule,
    FormsModule,
  ]
})
export class EmnaModule { }
