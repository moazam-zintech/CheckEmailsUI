import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddEmailsRequest } from '../model/add-emails-request.model';
import { Observable } from 'rxjs';
import { WrnogEmails } from '../model/wrong-emails.model';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {

  constructor(private http: HttpClient) {}

  addInput(model: AddEmailsRequest): Observable<void>{
   return this.http.post<void>('https://localhost:44304/api/EmailAddress',model);
}
showOutput(){
  return this.http.get('https://localhost:44304/api/EmailAddress');
}
}