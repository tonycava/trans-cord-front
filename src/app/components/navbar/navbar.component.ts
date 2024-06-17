import { Component } from '@angular/core';
import Cookie from "js-cookie";
import { COOKEYS } from "../../core/common/helpers/cookie.helper";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  public isDropdownOpen: boolean = false;
  onMenuClick() {
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log(this.isDropdownOpen);
  }

  onLogout() {
    Cookie.remove(COOKEYS.JWT_TOKEN);
    location.assign('/login');
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }
}
