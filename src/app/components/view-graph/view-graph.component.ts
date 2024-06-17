import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { CommonModule } from "@angular/common";
import { ProfileService } from "../../core/services/profile.service";
import { UserService } from "../../core/services/user.service";

@Component({
  selector: 'app-view-graph',
  templateUrl: './view-graph.component.html',
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class ViewGraphComponent implements OnInit {

  constructor(private userService: UserService, private profileService: ProfileService) {
  }

  public options: any = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Nombre de traduction en fonction  de la langue',
    },
    xAxis: {
      categories: ['Français', 'Anglais', 'Espagnol', 'Russe', 'Chinois', 'Allemand'],
      crosshair: true,
      accessibility: {
        description: 'Countries'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Nombre de traduction'
      }
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [
      {
        name: 'Langues',
        data: [10, 0, 3, 11, 3, 20]
      }
    ]
  }

  ngOnInit() {
    Highcharts.chart('container', this.options);
    //const user = this.userService.getUser();
    console.log(this.profileService.getTranslations("44c571e3-69db-4ac5-915b-c613f7b1177d"));
  }
}
