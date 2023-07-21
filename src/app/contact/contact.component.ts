import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  branches: any;
  constructor(
    private _contact : ContactService
  ) {
    this._contact.getBranches()
    this._contact.branchesSubject 
      .subscribe((res) => {
        this.branches = res;
    })
  }
}
