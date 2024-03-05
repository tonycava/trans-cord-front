import { CanActivateFn } from '@angular/router';
import { TokenService } from '../services/token.service';
import { inject } from '@angular/core';

export const guestGuard: CanActivateFn = () => {
  const tokenService = inject(TokenService);

  tokenService.isAuthentication.subscribe((isAuthenticated) => {
    if (isAuthenticated) {
      location.assign('/');
    }
  });

  return true;
};
