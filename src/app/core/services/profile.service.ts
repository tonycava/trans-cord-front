import { Injectable } from '@angular/core';
import { TokenService } from "./token.service";
import { HttpClient } from "@angular/common/http";
import environment from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private tokenService: TokenService, private httpClient: HttpClient) {
  }

  getTranslations(userId: string) : any {
    const token = this.tokenService.getToken();
    this.httpClient.get(`${environment.API_URL}/translate/language/${userId}`, {
      headers: {
        Authorization: `${token}`
      }
    }).subscribe((response) => {
      console.log(response);
    });
  }
}
