import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DiscordService } from '../../../../core/services/discord.service';
import Cookie from 'js-cookie';
import { COOKEYS } from '../../../../core/common/helpers/cookie.helper';


@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
})
export class RedirectComponent implements OnInit {
  constructor(
    private discordService: DiscordService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(this.fetchData.bind(this));
  }

  async fetchData(params: Params) {
    const data = await this.discordService.getToken(params);
    Cookie.set(COOKEYS.JWT_TOKEN, data.data.token);
    await this.router.navigateByUrl('/');
  }

}
