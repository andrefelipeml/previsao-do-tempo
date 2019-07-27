import { City } from './../models/city';
import { State } from './../models/state';
import { ClimaTempoService } from './clima-tempo.service';
import { Component, OnInit } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

declare const $: any;
declare var Morris: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit  {

  response;
  title = 'tempo-clima';
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faCloudSun = faCloudSun;
  states: State;
  cities: City;
  citySelected: City;

  constructor(private climaTempoService: ClimaTempoService) {
    this.climaTempoService.getStates().subscribe(x => {
      console.log('States', x);
      this.states = x;
    });

  }

  ngOnInit(): void {
    setTimeout(() => {
      const dataa = [
      { day: '26/07/2019', min: 20, max: 25 },
      { day: '27/07/2019', min: 14, max: 20 },
      { day: '28/07/2019', min: 18, max: 22 },
      { day: '29/07/2019', min: 12, max: 18 },
      { day: '30/07/2019', min: 13, max: 17  }];
      Morris.Line({
        element: 'morris-extra-area',
        data: dataa,
        // The name of the data record attribute that contains x-values.
        xkey: 'day',
        // A list of names of data record attributes that contain y-values.
        ykeys: ['min', 'max'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Minimo', 'Maximo']
      });
    });
  }

  getCities(id: string) {
    this.climaTempoService.getCities(id).subscribe(x => {
      this.cities = x;
    });
  }

  getInformations(i) {
    this.climaTempoService.getCityId(this.cities[i]).subscribe(city => {
      console.log('aaaaaaaaaaaaa', city);
      this.climaTempoService.get(city[0]).subscribe(x => {
        this.response = x;
      });
    });
  }
}
