import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddEmailsRequest } from '../model/add-emails-request.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {
       //   baseApiURL: string = environment.baseApiURL;
          constructor(private http: HttpClient) {}

  addInput(model: AddEmailsRequest): Observable<void>{
   return this.http.post<void>('https://localhost:44304/api/EmailAddress',model);
}
showOutput(){
  return this.http.get('https://localhost:44304/api/EmailAddress');
}
}