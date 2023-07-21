import { Component, OnInit, Input } from '@angular/core';
import SwiperCore, { SwiperOptions, Pagination, Navigation, Autoplay } from 'swiper';
SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-grid-slider',
  templateUrl: './grid-slider.component.html',
  styleUrls: ['./grid-slider.component.scss']
})
export class GridSliderComponent  implements OnInit {

  
  config!: SwiperOptions;

  features: any;
  @Input() product: any
  @Input() perview: any
  @Input() spaces: any
  constructor() { }

  ngOnInit() {
    this.features = this.product
  }
  // onSwiper([swiper]: any) {
  //   console.log(swiper);
  // }
  // onSlideChange() {
  //   console.log('slide change');
  // }

  ngAfterContentChecked() {
    this.config = {
      slidesPerView: this.perview,
      spaceBetween: 10,
      // pagination: { clickable: true },
      scrollbar: { draggable: true },
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 2,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    };
    // this.featureConfig = {
    //   // slidesPerView: 5.5,
    //   slidesPerView: 1,
    // breakpoints: {~
    //   640: {
    //     slidesPerView: 3.5,
    //   },
    //   1024: {
    //     slidesPerView: 5.5,
    //   },
    // },
    // };
  }

}

