import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'auth-layout',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  public authPage: '/register' | '/login' = '/login';

  ngOnInit() {
    const pathName = location.pathname;

    if (pathName === '/login') {
      return;
    } else if (pathName === '/register') {
      this.authPage = '/register';
      return;
    }

    location.assign('/login');
  }
}
