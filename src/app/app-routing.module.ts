import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { OurPeopleComponent } from './our-people/our-people.component';
import { OurJourneyComponent } from './our-journey/our-journey.component';
import { LoanComponent } from './loan/loan.component';
import { SavingsComponent } from './savings/savings.component';
import { NewsComponent } from './news/news.component';
import { OurSocialComponent } from './our-social/our-social.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { SavingsDetailsComponent } from './savings-details/savings-details.component';
import { WhistleComponent } from './whistle/whistle.component';
import { PolicyComponent } from './policy/policy.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: LandingComponent,
  },
  {
    path: 'who-we-are',
    component: WhoWeAreComponent,
  },
  {
    path: 'our-people',
    component: OurPeopleComponent,
  },
  {
    path: 'our-journey',
    component: OurJourneyComponent,
  },
  {
    path: 'loan',
    component: LoanComponent,
  },
  {
    path: 'loan/:name',
    component: LoanDetailsComponent,
  },
  {
    path: 'savings',
    component: SavingsComponent,
  },
  {
    path: 'savings/:name',
    component: SavingsDetailsComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'social-impact',
    component: OurSocialComponent,
  },
  {
    path: 'career',
    component: CareersComponent,
  },
  {
    path: 'contact-us',
    component: ContactComponent,
  },
  {
    path: 'whistle',
    component: WhistleComponent,
  },
  {
    path: 'policy',
    component: PolicyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
