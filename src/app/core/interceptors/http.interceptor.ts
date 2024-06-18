import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../services/token.service';
import { catchError, retry, throwError } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);

  const token = tokenService.getToken();
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: token
      },
    });
  }

  return next(req).pipe(
    retry(2),
    catchError((e: HttpErrorResponse) => {
      if (e.status === 401) {
        tokenService.remoteToken();
        location.assign('/login');
      }

      const error = e.error?.message || e.statusText;
      return throwError(() => error);
    })
  );
};
