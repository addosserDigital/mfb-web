import { Component, OnInit, Input } from '@angular/core';
import SwiperCore, { SwiperOptions, Pagination, Navigation, Autoplay } from 'swiper';
SwiperCore.use([Pagination, Autoplay, Navigation]);

@Component({
  selector: 'app-full-slider',
  templateUrl: './full-slider.component.html',
  styleUrls: ['./full-slider.component.scss']
})
export class FullSliderComponent implements OnInit {

  
  config!: SwiperOptions;

  features: any;
  @Input() product:any
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
      slidesPerView: 1,
      spaceBetween: 20,
      // pagination: { clickable: true },
    navigation: true,
      scrollbar: { draggable: true },
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          spaceBetween: 50,
        },
        1024: {
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
