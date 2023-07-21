import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SavingsService {
  savings: any[] = [];

  public savingsSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor() {
    this.savings = [
      {
        id: 1,
        name: 'Addosser Regular Savings Account',
        img: '../../assets/img/savings-1.svg',
        des: 'Our ARSA savings account is designed to provide you with an easy and affordable way to save at your convenience and increase your money.',
        benefits: [
          {
            id: 1,
            name: 'Easy and convenient',
          },
          {
            id: 2,
            name: 'It help customers build a savings habit',
          },
          {
            id: 3,
            name: 'Easy access to loans',
          },
          {
            id: 4,
            name: 'Competitive interest with no hidden charges',
          },
          {
            id: 5,
            name: 'Can serve as collateral for loans',
          },
        ],
        features: [
          {
            id: 1,
            name: 'Minimum opening balance of N1,000',
          },
          {
            id: 2,
            name: '3% interest rate',
          },
          {
            id: 3,
            name: 'Flexible contribution: daily, weekly, monthly',
          },
          {
            id: 4,
            name: 'Withdrawals on demand',
          },
        ],
      },
      {
        id: 2,
        name: 'Addosser Future Target Account',
        img: '../../assets/img/savings-2.svg',
        des: 'This account is designed for those who want to save money for future needs or emergencies. You can deposit money into the account on a daily, weekly, or monthly basis, making it flexible and convenient for you',
        benefits: [
          {
            id: 1,
            name: 'Easy and convenient',
          },
          {
            id: 2,
            name: 'It help customers build a savings habit',
          },
          {
            id: 3,
            name: 'Easy access to loans',
          },
          {
            id: 4,
            name: 'Competitive interest with no hidden charges',
          },
          {
            id: 5,
            name: 'Can serve as collateral for loans',
          },
        ],
        features: [
          {
            id: 1,
            name: 'Minimum opening balance of N1,000',
          },
          {
            id: 2,
            name: '3% interest rate',
          },
          {
            id: 3,
            name: 'Flexible contribution: daily, weekly, monthly',
          },
          {
            id: 4,
            name: 'Withdrawals on demand',
          },
        ],
      },
      {
        id: 3,
        name: 'Addosser Business Support Account',
        img: '../../assets/img/savings-3.svg',
        des: 'With ABSA, you can easily save money to meet your business needs without breaking the bank. We offer you flexibility by allowing you to contribute daily, weekly, or monthly deposits based on what works best for you.',
        benefits: [
          {
            id: 1,
            name: 'Easy and convenient',
          },
          {
            id: 2,
            name: 'It help customers build a savings habit',
          },
          {
            id: 3,
            name: 'Easy access to loans',
          },
          {
            id: 4,
            name: 'Competitive interest with no hidden charges',
          },
          {
            id: 5,
            name: 'Can serve as collateral for loans',
          },
        ],
        features: [
          {
            id: 1,
            name: 'Minimum opening balance of N1,000',
          },
          {
            id: 2,
            name: '3% interest rate',
          },
          {
            id: 3,
            name: 'Flexible contribution: daily, weekly, monthly',
          },
          {
            id: 4,
            name: 'Withdrawals on demand',
          },
        ],
      },
      {
        id: 4,
        name: 'Addosser junior savers account',
        img: '../../assets/img/savings-4.svg',
        des: "This is specifically designed to help parents save for their children's education. With AJASA, you have the freedom to contribute funds on a daily, weekly, or monthly basis, making it easier to plan for your child's future educational needs.",
        benefits: [
          {
            id: 1,
            name: 'Easy and convenient',
          },
          {
            id: 2,
            name: 'It help customers build a savings habit',
          },
          {
            id: 3,
            name: 'Easy access to loans',
          },
          {
            id: 4,
            name: 'Competitive interest with no hidden charges',
          },
          {
            id: 5,
            name: 'Can serve as collateral for loans',
          },
        ],
        features: [
          {
            id: 1,
            name: 'Minimum opening balance of N1,000',
          },
          {
            id: 2,
            name: '3% interest rate',
          },
          {
            id: 3,
            name: 'Flexible contribution: daily, weekly, monthly',
          },
          {
            id: 4,
            name: 'Withdrawals on demand',
          },
        ],
      },
      {
        id: 5,
        name: 'ADDOSSER ENERGY',
        img: '../../assets/img/savings-5.svg',
        des: "A cutting-edge savings account tailored for individuals seeking a streamlined and efficient way to make the most of their dormant funds. With our Tenor-Based Savings Account, you'll enjoy a range of benefits that set us apart from the competition.",
        benefits: [
          {
            id: 1,
            name: 'Easy and convenient',
          },
          {
            id: 2,
            name: 'It help customers build a savings habit',
          },
          {
            id: 3,
            name: 'Easy access to loans',
          },
          {
            id: 4,
            name: 'Competitive interest with no hidden charges',
          },
          {
            id: 5,
            name: 'Can serve as collateral for loans',
          },
        ],
        features: [
          {
            id: 1,
            name: 'Minimum opening balance of N1,000',
          },
          {
            id: 2,
            name: '3% interest rate',
          },
          {
            id: 3,
            name: 'Flexible contribution: daily, weekly, monthly',
          },
          {
            id: 4,
            name: 'Withdrawals on demand',
          },
        ],
      },
    ];
  }
  getSavingsDetails() {
    this.savingsSubject.next(this.savings)
  }
}
