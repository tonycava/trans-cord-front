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
    false
  );

  constructor() {
    const token = this.getToken();
    const isAuthenticated = this.decodeToken(token);

    if (isAuthenticated) {
      this.updateToken(true);
    } /* else {
      this.updateToken(false);
    } */
  }

  setToken(token: string): void {
    Cookie.set(COOKEYS.JWT_TOKEN, token);
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
