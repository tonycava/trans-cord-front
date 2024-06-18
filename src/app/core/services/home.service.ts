import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import environment from "../environments/environment";
import { Observable } from "rxjs";

type ApiResponse<T = any> = {
  status: number,
  message: string
  data: T
}

type WelcomeResponse = {
  serverCount: number,
  translationCount: number,
  languageCount: number,
}


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {
  }

  welcome(): Observable<ApiResponse<WelcomeResponse>> {
    return this.http.get<ApiResponse<WelcomeResponse>>(`${environment.API_URL}/welcome`)
  }

}
