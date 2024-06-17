import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import environment from "../environments/environment";
import { Observable } from "rxjs";

type AuthResponse<T = any> = {
  status: number,
  message: string
  data: T
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(user: { username: string, password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.API_URL}/auth/login`, user)
  }

  register(user: { username: string, password: string, confirmPassword: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.API_URL}/auth/register`, user)
  }

}
