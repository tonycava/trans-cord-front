import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private tokenService: TokenService) {
  }

  getUser(): User {
    const token = this.tokenService.getToken();
    const user = this.tokenService.decodeToken(token);
    return user!;
  };
}
