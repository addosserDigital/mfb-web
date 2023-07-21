import { Component } from '@angular/core';
import { LoanService } from '../services/loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss'],
})
export class LoanComponent {
  loan: any
  constructor(
    private _loan: LoanService
  ) {
    this._loan.getLoanDetails()
    this._loan.loanSubject
      .subscribe((res) => {
        this.loan = res;
    })
  }
}
