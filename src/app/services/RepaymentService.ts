import { Injectable } from '@angular/core';

import { HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { Repayment } from '../entities/Repayment';

import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RepaymentService {
  readonly API_URL = 'http://localhost:9191';
  
  constructor(private httpClient: HttpClient) { }

  getAllRepayments() : Observable<Repayment[]>  {  
  return this.httpClient.get<Repayment[]>(`${this.API_URL}/Repayment/select`);//.pipe(map(data => data), catchError(this.handleError));
     
  }
   
  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
