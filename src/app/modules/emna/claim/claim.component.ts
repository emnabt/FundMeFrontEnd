import { ClaimService } from './../../../services/ClaimService';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Claim } from './../../../entities/claim';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.scss']
})
export class ClaimComponent implements OnInit {

  listClaims : any; 
  form : boolean = false;
  claim!: Claim;
  closeResult! : string;


  constructor(private claimService : ClaimService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.retrieveAllClaims(); 

    this.claim = {
      id_claim : null ,
      typeClaims : "" ,
      descriptionClaim : "" , 
      dateClaim : "" ,
      etatClaim : "" ,
      id_Credit : "" ,

    }
  }
  retrieveAllClaims() {
    this.claimService.retrieveAllClaims().subscribe(res => {
      this.listClaims = res;
      console.log(res);} )
  }

  addClaim(c: any){
    this.claimService.addClaim(c).subscribe(() => {
      this.retrieveAllClaims();
      this.form = false;
    });
  }

  updateClaim(claim : Claim){
    this.claimService.updateClaim(claim).subscribe();
  }

  deleteClaim(id_claim : any){
    this.claimService.deleteClaim(id_claim).subscribe(() => this.retrieveAllClaims())
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    }
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }
  closeForm(){
  }
  cancel(){
    this.form = false;
  }
  
}
