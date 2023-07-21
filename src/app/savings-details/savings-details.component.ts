import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoanService } from '../services/loan.service';
import { SavingsService } from '../services/savings.service';

@Component({
  selector: 'app-savings-details',
  templateUrl: './savings-details.component.html',
  styleUrls: ['./savings-details.component.scss']
})
export class SavingsDetailsComponent {
  loan: any;
  result: any;
  name: any;
  public show: boolean = false;

  constructor(
    private _saving: SavingsService,
    private actRoute: ActivatedRoute,
    private viewScroller: ViewportScroller
  ) {
    this.actRoute.paramMap.subscribe((res) => {
      this.name = res.get('name');
      // console.log(this.name)
      this.tapToTop();
      this.onLoadSavingsData();
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

  onLoadSavingsData() {
    this._saving.getSavingsDetails();
    this._saving.savingsSubject.subscribe((res) => {
      const filteredLoan = res.filter((item: any) => {
        let removed = item.id !== parseInt(this.name);
        return removed;
      });
      this.loan = filteredLoan;
      // this.loan = res;
    });
    this.onSavingsData(parseInt(this.name));
  }

  onSavingsData(data: any) {
    this._saving.savingsSubject.subscribe((res) => {
      console.log(typeof data);
      console.log(res);
      let boo = res.filter((el: any) => el.id === data);

      // console.log(boo[0])
      this.result = boo[0];
    });
  }


}
