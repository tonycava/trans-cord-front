import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Cookie from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { User } from '../models/User';
import { COOKEYS } from '../common/helpers/cookie.helper';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  isAuthentication: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );

  constructor() {
    const token = this.getToken();
    const isAuthenticated = this.decodeToken(token);
    console.log(isAuthenticated);
    if (isAuthenticated) {
      this.updateToken(true);
    } /* else {
      this.updateToken(false);
    } */
  }

  updateToken(status: boolean) {
    this.isAuthentication.next(status);
  }

  getToken(): string | undefined {
    return Cookie.get(COOKEYS.JWT_TOKEN);
  }

  decodeToken(token: string | undefined): User | null {
    if (!token) return null;
    return jwtDecode<User | null>(token);
  }

  remoteToken() {
    Cookie.remove(COOKEYS.JWT_TOKEN);
  }

}
