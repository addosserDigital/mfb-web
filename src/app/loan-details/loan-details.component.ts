import { Component, HostListener } from '@angular/core';
import { LoanService } from '../services/loan.service';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.scss'],
})
export class LoanDetailsComponent {
  loan: any;
  result: any;
  name: any;
  public show: boolean = false;

  constructor(
    private _loan: LoanService,
    private actRoute: ActivatedRoute,
    private viewScroller: ViewportScroller
  ) {
    this.actRoute.paramMap.subscribe((res) => {
      this.name = res.get('name');
      // console.log(this.name)
      this.tapToTop();
      this.onLoadLoanData();
    });
  }

  // @HostListener Decorator
  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number > 600) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
  onLoanDes(data: any) {}
  tapToTop() {
    this.viewScroller.scrollToPosition([0, 0]);
  }

  onLoadLoanData() {
    this._loan.getLoanDetails();
    this._loan.loanSubject.subscribe((res) => {
      const filteredLoan = res.filter((item: any) => {
        let removed = item.id !== parseInt(this.name);
        return removed;
      });
      this.loan = filteredLoan;
      // this.loan = res;
    });
    this.onLoanData(parseInt(this.name));
  }

  onLoanData(data: any) {
    this._loan.loanSubject.subscribe((res) => {
      console.log(typeof data);
      console.log(res);
      let boo = res.filter((el: any) => el.id === data);

      // console.log(boo[0])
      this.result = boo[0];
    });
  }
}
