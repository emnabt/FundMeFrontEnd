import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Repayment } from 'src/app/entities/Repayment';
import { RepaymentService } from 'src/app/services/RepaymentService';

@Component({
  selector: 'app-repayment',
  templateUrl: './repayment.component.html',
  styleUrls: ['./repayment.component.scss']
})
export class RepaymentComponent implements OnInit {

  
  listRepayments : Repayment[]  = [];
  
   
 


 

  constructor(private repaymentservice : RepaymentService, private modalService: NgbModal  ) {  

    
   }

  ngOnInit(): void {
    this.getAllRepayments();
  }
  

  getAllRepayments()  {
    this.repaymentservice.getAllRepayments().subscribe( data  => { 
      this.listRepayments=data 
      });
  }
   
  delete(id  : any){
    //this.repaymentservice.deleteCredit(id).subscribe(() => this.getAllRepayments())
  }
  

  

}

 
