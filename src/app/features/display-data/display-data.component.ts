import { Component } from '@angular/core';
import { EmailsService } from '../service/emails.service';


@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrl: './display-data.component.css'
})
export class DisplayDataComponent {
  users:any;
  constructor(private wrongEmails: EmailsService)
  {
    wrongEmails.showOutput().subscribe((data)=>this.users=data);
  }
}
