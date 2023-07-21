import { Component } from '@angular/core';
import { SavingsService } from '../services/savings.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss']
})
export class SavingsComponent {
  saving: any
  constructor(
    private _savings: SavingsService
  ) {
    this._savings.getSavingsDetails()
    this._savings.savingsSubject
      .subscribe((res) => {
        this.saving = res;
    })
  }
}
