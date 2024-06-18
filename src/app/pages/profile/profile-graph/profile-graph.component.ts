import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpClient } from "@angular/common/http";
import environment from "../../../core/environments/environment";

@Component({
  selector: 'app-profile-graph',
  templateUrl: './profile-graph.component.html',
})
export class ProfileGraphComponent implements OnInit {
  public options: any = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Nombre de traduction par langue',
      align: 'left'
    },
    xAxis: {
      categories: ['Francais ', 'Anglais'],
      title: {
        text: null
      },
      gridLineWidth: 1,
      lineWidth: 0
    },
    yAxis: {
      min: 0,
      labels: {
        overflow: 'justify'
      },
      gridLineWidth: 0
    },
    tooltip: {
      valueSuffix: ' millions'
    },
    plotOptions: {
      bar: {
        borderRadius: '50%',
        dataLabels: {
          enabled: true
        },
        groupPadding: 0.1
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor: '#FFFFFF',
      shadow: true
    },
    series: [{
      name: 'Year 1990',
      data: [631, 727]
    }, {
      name: 'Year 2000',
      data: [814, 841]
    }, {
      name: 'Year 2018',
      data: [1276, 1007]
    }]
  }

  constructor(private http: HttpClient) {
  }

  async ngOnInit() {


    const res = await this.http.get<{ data: any }>(`${environment.API_URL}/user/get-graph`).toPromise()

   console.dir(res?.data)

    Highcharts.chart('graph', this.options);
  }
}
