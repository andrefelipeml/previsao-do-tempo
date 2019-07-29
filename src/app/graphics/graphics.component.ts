import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.sass']
})
export class GraphicsComponent implements OnInit {

  @Input() set forecastNextDays(date: Array<any>) {
    const dataMax = [];
    const dataMin = [];
    const labels = [];
    date.forEach(x => {
      dataMax.push( x.temperature.max );
      dataMin.push( x.temperature.min );
      labels.push(x.date_br);
    });
    this.lineChartData = [
      { data: dataMax, label: 'Máximo' },
      { data: dataMin, label: 'Minimo' },
    ];
    this.lineChartLabels = labels;
  }
  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'red',
    },
    {
      borderColor: 'blue',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}
