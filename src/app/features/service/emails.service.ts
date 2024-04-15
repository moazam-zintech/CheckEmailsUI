import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddEmailsRequest } from '../model/add-emails-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {

  constructor(private http: HttpClient) {}

  addInput(model: AddEmailsRequest): Observable<void>{
   return this.http.post<void>('https://localhost:44304/api/EmailAddress',model);
}
}