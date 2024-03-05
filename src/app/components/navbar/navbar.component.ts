import { Component } from '@angular/core';

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

  closeDropdown() {
    this.isDropdownOpen = false;
  }
}
