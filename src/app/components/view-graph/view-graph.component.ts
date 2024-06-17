import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-view-graph',
  templateUrl: './view-graph.component.html',
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class ViewGraphComponent implements OnInit {
  public options: any = {
    Chart: {
      type: 'area',
      height: 700
    },
    title: {
      text: "Evolution du nombre d'utilisation en fonction des pays"
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['2024', '2025', '2026', '2027', '2028', '2029', '2030'],
      tickmarkPlacement: 'on',
      title: {
        enabled: false
      }
    },
    series: [{
      name: 'Asia',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'Europe',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'America',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }]
  }

  constructor() {
  }

  ngOnInit() {
    Highcharts.chart('container', this.options);
  }

}
