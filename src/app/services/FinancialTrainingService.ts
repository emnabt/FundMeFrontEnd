import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FinancialTrainingService {
    readonly API_URL = 'http://localhost:8093';
  
  constructor(private httpClient: HttpClient) { }

  retrieveAllFinancialTrainings() {
    return this.httpClient.get(`${this.API_URL}/financialtraining/retrieve-all-financialtrainings`)
  }
  addFinancialTraining(financialtraining: any) {
    return this.httpClient.post(`${this.API_URL}/financialtraining/add`, financialtraining)
  }
  updateFinancialTraining(financialtraining : any){
    return this.httpClient.put(`${this.API_URL}/financialtraining/modify`, financialtraining)
  }
  deleteFinancialTraining(idTraining : any){
    return  this.httpClient.delete(`${this.API_URL}/financialtraining/remove-financialtraining/${idTraining}`)
  }

}
