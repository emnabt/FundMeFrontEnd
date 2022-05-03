import { FinancialTrainingService } from './../../../services/FinancialTrainingService';
import { Component, OnInit } from '@angular/core';
import { FinancialTraining } from 'src/app/entities/financial-training';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-financialtraining',
  templateUrl: './financialtraining.component.html',
  styleUrls: ['./financialtraining.component.scss']
})
export class FinancialtrainingComponent implements OnInit {

  listFinancialTrainings : any; 
  form : boolean = false;
  financialtraining!: FinancialTraining;
   closeResult! : string;
   imgURL : any ;
   public imagePath: any ;
   userFile: any ;

  constructor(private financialtrainingService : FinancialTrainingService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.retrieveAllFinancialTrainings(); 

    this.financialtraining = {
      idTraining: null,
      trainer : "" ,
      imageTrainer : "" , 
      descriptionTrain : "" ,
      typeTrain : "" ,
      dateTrain : ""
  }

}

retrieveAllFinancialTrainings() {
  this.financialtrainingService.retrieveAllFinancialTrainings().subscribe(res => {
    this.listFinancialTrainings = res;
    console.log(res);} )
}

addFinancialTraining(ft: any){
  this.financialtrainingService.addFinancialTraining(ft).subscribe(() => {
    this.retrieveAllFinancialTrainings();
    this.form = false;
  });
}

updateFinancialTraining(financialtraining : FinancialTraining){
  this.financialtrainingService.updateFinancialTraining(financialtraining).subscribe();
}
deleteFinancialTraining(idTraining : any){
  this.financialtrainingService.deleteFinancialTraining(idTraining).subscribe(() => this.retrieveAllFinancialTrainings())
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
