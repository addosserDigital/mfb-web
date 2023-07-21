import { Component, OnInit, HostListener } from '@angular/core';
import { TeamsService } from '../services/teams.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-our-people',
  templateUrl: './our-people.component.html',
  styleUrls: ['./our-people.component.scss'],
})
export class OurPeopleComponent implements OnInit {
  boardTeam: any;
  managementTeam: any;
  result: any;
  public show: boolean = false;
  constructor(
    private _Team: TeamsService,
    private viewScroller: ViewportScroller
  ) {
    this._Team.teamSubject.subscribe((res) => {
      this.boardTeam = res;
    });
    this._Team.teamManagementSubject.subscribe((res) => {
      this.managementTeam = res;
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

  ngOnInit() {
    this._Team.getTeam();
    this._Team.getTeamManagement();
  }

  tapToTop() {
    this.viewScroller.scrollToPosition([0, 0]);
  }

  onTeam(data: any) {
    this.tapToTop();
    this._Team.teamSubject.subscribe((res) => {
      // console.log(res)
      let boo = res.filter((el: any) => {
        return el.name === data;
      });

      // console.log(boo)
      this.result = boo[0];
    });
  }

  onTeamManagement(data: any) {
    this.tapToTop();
    this._Team.teamManagementSubject.subscribe((res) => {
      // console.log(res)
      let boo = res.filter((el: any) => {
        return el.name === data;
      });

      // console.log(boo)
      this.result = boo[0];
    });
  }
}
