import { Component } from '@angular/core';
import { AddEmailsRequest } from '../model/add-emails-request.model';
import { EmailsService } from '../service/emails.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-emails',
  templateUrl: './add-emails.component.html',
  styleUrl: './add-emails.component.css'
})
export class AddEmailsComponent {
   model: AddEmailsRequest;
   private addEmailsSubscription?: Subscription;
    constructor(private emailsService: EmailsService){
     this.model={
       inputString: 'hello',
     };
   }
   onFormSubmit()
   {
      console.log(this.model);
    this.addEmailsSubscription=this.emailsService.addInput(this.model).subscribe(
      {
        next: (response) =>{
          console.log("Transaction was succesful");
    
        },
        error: (error) =>{
          console.log("Emails are not correct");
    
        }
        
      }
    )
   };

}
