import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  features: any;
  constructor() {
    this.features = [
      {
        img: '../../../assets/img/news-1.png',
        name: 'Addosser Microfinance Bank Ranked Top 5 Microfinance Banks in Nigeria By Business Day',
        date: 'June 27, 2023',
      },
      {
        img: '../../../assets/img/news-3.png',
        name: 'Addosser MFB Holds Christmas Fair for Children in its Host Community',
        date: 'June 27, 2023',
      },
      {
        img: '../../../assets/img/news-4.png',
        name: 'Addosser MFB Hosts Customers to its 2022 Customer Forum: Navigating the Current Business Realities.',
        date: 'June 27, 2023',
      },
      {
        img: '../../../assets/img/news-2.png',
        name: 'Addosser MFB Empowers 200 women on Skill Acquisition',
        date: 'June 27, 2023',
      },
      {
        img: '../../../assets/img/news-3.png',
        name: 'Addosser MFB Holds Christmas Fair for Children in its Host Community',
        date: 'June 27, 2023',
      },
    ];
  }
}
