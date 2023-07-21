import { Component, OnInit } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { LightGallery } from 'lightgallery/lightgallery';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  private lightGallery!: LightGallery;
  private needRefresh = false;
  ngAfterViewChecked(): void {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }
  features: any;
  gridSlide: any;
  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  constructor() {}
  ngOnInit() {
    this.features = [
      {
        img: '../../../assets/img/mfb-cover1.svg',
        name: 'Celebrating 15 years Anniversary',
        description: 'Standing Tall, Growing Stronger',
      },
      {
        img: '../../../assets/img/mfb-cover2.svg',
        name: 'Serving to Empower',
        description:
          'We exist to improve the living conditions of everyday people.',
      },
      {
        img: '../../../assets/img/mfb-cover3.svg',
        name: 'Financial Inclusion for all',
        description:
          'We empower both individuals and small businesses with easily accessible financial solutions.',
      },
      {
        img: '../../../assets/img/mfb-cover4.svg',
        name: 'Partner in Progress',
        description:
          'We are a reliable partner in progress for MSMEs to attain',
      },
      {
        img: '../../../assets/img/mfb-cover5.svg',
        name: 'Banking on the GO!',
        description:
          'Enjoy convenient banking on our Mobile App and USSD Dial *258# Play store app/App store ',
      },
    ];
    this.gridSlide = [
      {
        img: '../../../assets/img/news-1.png',
        name: 'Addosser Microfinance Bank Ranked Top 5 Microfinance Banks in Nigeria By Business Day',
        date: 'June 27, 2023',
      },
      {
        img: '../../../assets/img/news-3.png',
        name: 'Addosser MFB Holds Christmas Fair for Children in its Host Community',
        date:'June 27, 2023',
      },
      {
        img: '../../../assets/img/news-4.png',
        name: 'Addosser MFB Hosts Customers to its 2022 Customer Forum: Navigating the Current Business Realities.',
        date:'June 27, 2023',
      },
      {
        img: '../../../assets/img/news-2.png',
        name: 'Addosser MFB Empowers 200 women on Skill Acquisition',
        date:'June 27, 2023',
      },
      {
        img: '../../../assets/img/news-3.png',
        name: 'Addosser MFB Holds Christmas Fair for Children in its Host Community',
        date:'June 27, 2023',
      },
    ];
  }

  items = [
    {
      id: '1',
      size: '1400-933',
      src:
        '//vimeo.com/112836958',
      thumb:
        '../../assets/img/testimonial-1.svg',
      subHtml: `<div class="lightGallery-captions">
            <h4>Photo by <a href="https://unsplash.com/@kylepyt">Kyle Peyton</a></h4>
            <p>Published on September 14, 2016</p>
        </div>`
    },
    {
      id: '2',
      size: '1400-933',
      src: 'https://www.youtube.com/embed/mFW1qVTH8Hs',
      thumb: '../../assets/img/testimonial-2.svg',
      subHtml: `<div class="lightGallery-captions">
            <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
            <p>Published on November 13, 2018</p>
        </div>`
    },
    {
      id: '3',
      size: '1400-932',
      src:
        'https://www.youtube.com/embed/mFW1qVTH8Hs',
      thumb:
        '../../assets/img/testimonial-3.svg',
      subHtml: `<div class="lightGallery-captions">
            <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
            <p>Published on May 8, 2020</p>
        </div>`
    }
  ];
  onInit = (detail: any): void => {
    this.lightGallery = detail.instance;
  };
}
