import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FullSliderComponent } from './shared/full-slider/full-slider.component';
import { GridSliderComponent } from './shared/grid-slider/grid-slider.component';
import { LandingComponent } from './landing/landing.component';
import { SwiperModule } from 'swiper/angular';
import {LightgalleryModule} from 'lightgallery/angular';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { OurPeopleComponent } from './our-people/our-people.component';
import { OurJourneyComponent } from './our-journey/our-journey.component';
import { LoanComponent } from './loan/loan.component';
import { SavingsComponent } from './savings/savings.component';
import { NewsComponent } from './news/news.component';
import { OurSocialComponent } from './our-social/our-social.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component'
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { SavingsDetailsComponent } from './savings-details/savings-details.component';
import { PolicyComponent } from './policy/policy.component';
import { WhistleComponent } from './whistle/whistle.component';
// import { LazyloadDirective } from './directives/lazyload.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FullSliderComponent,
    GridSliderComponent,
    LandingComponent,
    WhoWeAreComponent,
    OurPeopleComponent,
    OurJourneyComponent,
    LoanComponent,
    SavingsComponent,
    NewsComponent,
    OurSocialComponent,
    CareersComponent,
    ContactComponent,
    LoanDetailsComponent,
    SavingsDetailsComponent,
    PolicyComponent,
    WhistleComponent,
    // LazyloadDirectives
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    LightgalleryModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
