import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { CreditService } from 'src/app/services/CreditService';
import { credits } from '../../entities/Credits';
 
 

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss']
})
export class CreditComponent implements OnInit {

  listCredits :   credits[]  = [];
  
  form : boolean = false;
   credits!: credits;
   closeResult! : string;



 

  constructor(private creditService : CreditService, private modalService: NgbModal,private route: ActivatedRoute ) {  
    
   }

  ngOnInit(): void {
    this.getAllCredits();
  }
  

  getAllCredits()  {
    this.creditService.getAllCredits().subscribe( data  => { 
      this.listCredits=data 
      });
  }
  edit(c : credits){
    this.creditService.editCredit(c).subscribe();
  }
  delete(id  : any){
    this.creditService.deleteCredit(id).subscribe(() => this.getAllCredits())
  }
  

  

}
