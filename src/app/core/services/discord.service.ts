import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import environment from '../environments/environment';
import { Params } from '@angular/router';
import { Token } from '../models/Discord';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DiscordService {

  constructor() {
  }

  getToken(params: Params) {
    return axios.get<any>(`${environment.API_URL}/api/auth/discord/redirect?code=${params["code"]}`);
  }

}
