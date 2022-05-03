import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
    readonly API_URL = 'http://localhost:8093';
  
  constructor(private httpClient: HttpClient) { }

  retrieveAllClaims() {
    return this.httpClient.get(`${this.API_URL}/Claim/retrieve-all-claims`)
  }
  addClaim(claim: any) {
    return this.httpClient.post(`${this.API_URL}/Claim/addclaim`, claim)
  }
  updateClaim(claim : any){
    return  this.httpClient.put(`${this.API_URL}/Claim/modify-claims`, claim)
  }
  deleteClaim(id_claim : any){
    return  this.httpClient.delete(`${this.API_URL}/Claim/remove-operateur/${id_claim}`)
  }
}
