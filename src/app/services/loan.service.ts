import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  loan: any[] = [];

  public loanSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor() {
    this.loan = [
      {
        id: 1,
        name: 'Trader Loans',
        img: '../../assets/img/loan-1.svg',
        des: 'With our trader’s loan, we empower micro and small business entrepreneur, artisans, petty traders and more on their journey to achieve growth. We understand the importance of convenient access to money for your business and we are committed to making it happen.',
        benefits: [
          {
            id: 1,
            name: 'Benefits Fast processing time of 2-5days.',
          },
          {
            id: 2,
            name: 'Convenience (Access loans at your comfort).',
          },
          {
            id: 3,
            name: 'Flexibility in repayment patterns, collaterals, tenor etc.',
          },
          {
            id: 4,
            name: 'No pre-liquidation charge.',
          },
          {
            id: 5,
            name: 'Competitive pricing with no hidden cost.',
          },
          {
            id: 6,
            name: 'Enhanced eligibility for higher loan amounts based on a strong.',
          },
          {
            id: 7,
            name: 'history of timely loan repayments.',
          },
        ],
      },
      {
        id: 2,
        name: 'SME Loans',
        img: '../../assets/img/loan-2.svg',
        des: 'Our SME loan offerings provide funding and loans for business looking to scale and expand. Our diverse range of SME loan products includes working capital loans, Duty Finance, asset acquisition loans, Bridge finance, LPO, Invoice Discounting, and more. With credit of up to N30million your business would be better for it',
        benefits: [
          {
            id: 1,
            name: 'Benefits Fast processing time of 2-5days.',
          },
          {
            id: 2,
            name: 'Convenience (Access loans at your comfort).',
          },
          {
            id: 3,
            name: 'Flexibility in repayment patterns, collaterals, tenor etc.',
          },
          {
            id: 4,
            name: 'No pre-liquidation charge.',
          },
          {
            id: 5,
            name: 'Competitive pricing with no hidden cost.',
          },
          {
            id: 6,
            name: 'Enhanced eligibility for higher loan amounts based on a strong.',
          },
          {
            id: 7,
            name: 'history of timely loan repayments.',
          },
        ],
      },
      {
        id: 3,
        name: 'Group Loans Product',
        img: '../../assets/img/loan-3.svg',
        des: 'The group loan product allows micro entrepreneurs to easily access funds through self-forming groups, empowering them to expand their businesses and achieve their financial goals.',
        benefits: [
          {
            id: 1,
            name: 'Benefits Fast processing time of 2-5days.',
          },
          {
            id: 2,
            name: 'Convenience (Access loans at your comfort).',
          },
          {
            id: 3,
            name: 'Flexibility in repayment patterns, collaterals, tenor etc.',
          },
          {
            id: 4,
            name: 'No pre-liquidation charge.',
          },
          {
            id: 5,
            name: 'Competitive pricing with no hidden cost.',
          },
          {
            id: 6,
            name: 'Enhanced eligibility for higher loan amounts based on a strong.',
          },
          {
            id: 7,
            name: 'history of timely loan repayments.',
          },
        ],
      },
      {
        id: 4,
        name: 'Micro health Insurance Loan',
        img: '../../assets/img/loan-4.svg',
        des: 'Individuals and family members (spouse and up to four children) can access better, quality and affordable healthcare. Our Micro health insurance loans enables customers have flexible premium payment options and customize their coverage to suit their needs for a year period.',
        benefits: [
          {
            id: 1,
            name: 'Benefits Fast processing time of 2-5days.',
          },
          {
            id: 2,
            name: 'Convenience (Access loans at your comfort).',
          },
          {
            id: 3,
            name: 'Flexibility in repayment patterns, collaterals, tenor etc.',
          },
          {
            id: 4,
            name: 'No pre-liquidation charge.',
          },
          {
            id: 5,
            name: 'Competitive pricing with no hidden cost.',
          },
          {
            id: 6,
            name: 'Enhanced eligibility for higher loan amounts based on a strong.',
          },
          {
            id: 7,
            name: 'history of timely loan repayments.',
          },
        ],
      },
      {
        id: 5,
        name: 'ADDOSSER ENERGY',
        img: '../../assets/img/loan-5.svg',
        des: 'This product is targeted at people with low incomes and small businesses, especially women. It allows customers enjoy affordable, efficient, and safe energy for their homes and businesses. Customers can get to pay for the energy as they use it, enjoy clean energy while repaying their loans at their convenience.',
        benefits: [
          {
            id: 1,
            name: 'Benefits Fast processing time of 2-5days.',
          },
          {
            id: 2,
            name: 'Convenience (Access loans at your comfort).',
          },
          {
            id: 3,
            name: 'Flexibility in repayment patterns, collaterals, tenor etc.',
          },
          {
            id: 4,
            name: 'No pre-liquidation charge.',
          },
          {
            id: 5,
            name: 'Competitive pricing with no hidden cost.',
          },
          {
            id: 6,
            name: 'Enhanced eligibility for higher loan amounts based on a strong.',
          },
          {
            id: 7,
            name: 'history of timely loan repayments.',
          },
        ],
      },
    ];
  }
  getLoanDetails() {
    this.loanSubject.next(this.loan)
  }
}
