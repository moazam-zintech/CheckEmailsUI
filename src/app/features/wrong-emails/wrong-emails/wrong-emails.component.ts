import { Component } from '@angular/core';
import { WrnogEmails } from '../../model/wrong-emails.model';
import { EmailsService } from '../../service/emails.service';

@Component({
  selector: 'app-wrong-emails',
  templateUrl: './wrong-emails.component.html',
  styleUrl: './wrong-emails.component.css'
})
export class WrongEmailsComponent {
  users:any;
  constructor(private wrongEmails: EmailsService)
  {
    wrongEmails.showOutput().subscribe((data)=>this.users=data);

  }
}