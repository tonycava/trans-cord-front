import { Component, OnInit } from '@angular/core';
import { Select } from "@ngxs/store";
import { UserState } from "../../store/UserState";
import { Observable } from "rxjs";
import { User } from "../../core/models/User";
import Cookie from "js-cookie";
import { COOKEYS } from "../../core/common/helpers/cookie.helper";
import { ActivatedRoute } from "@angular/router";
import { ProfileService } from "../../core/services/profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  @Select(UserState.selectUser) user$!: Observable<User>;
  public currentParentRoute: string = '';
  public currentChildRoute: string = '';
  public currentRoute: string = '';

  constructor(private route: ActivatedRoute) { }

  onLogout() {
    Cookie.remove(COOKEYS.JWT_TOKEN);
    location.assign('/login');
  }

  ngOnInit(): void {
    this.currentParentRoute = this.route.snapshot.routeConfig?.path || '';
    this.currentChildRoute = this.route.snapshot.firstChild?.routeConfig?.path || '';
    this.currentRoute = this.currentParentRoute + '/' + this.currentChildRoute;
  }
}
