import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import environment from "../environments/environment";
import { TokenService } from "./token.service";
import { HttpClient } from "@angular/common/http";
import environment from "../environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, private tokenService: TokenService) {

  editProfile(editedProfile: any): Observable<{ data: string }> {
    return this.http.put<{ data: string }>(`${environment.API_URL}/user/edit-profile`, editedProfile)
  };

}
