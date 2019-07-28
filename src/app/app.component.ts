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
export class AppComponent  {

  response;
  title = 'tempo-clima';
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faCloudSun = faCloudSun;
  states: State;
  cities: City;
  citySelected: any;
  stateSelected: any;
  public loading: boolean;
  forecastNextDays = new Array();

  constructor(private climaTempoService: ClimaTempoService) {
    this.loading = true;
    this.climaTempoService.getStates().subscribe(x => {
      console.log('States', x);
      this.states = x;
      const state = localStorage.getItem('state');
      const city = localStorage.getItem('city');
      if (state && city) {
        this.stateSelected = state;
        this.getCities(state);
        this.citySelected = city;
      } else {
        this.getCities('SC');
        localStorage.setItem('state', 'SC');
        localStorage.setItem('city', 'Blumenau');
        this.stateSelected = 'SC';
        this.citySelected = 'Blumenau';
      }
      this.getInformations();
      this.loading = false;
    });

  }

 async getCities(id: string) {
    this.loading = true;
    this.climaTempoService.getCities(id).subscribe(x => {
      this.cities = x;
      this.loading = false;
    });
  }

  getInformations() {
    this.loading = true;
    this.climaTempoService.getCityId(this.stateSelected, this.citySelected).subscribe(city => {
      this.climaTempoService.get(city.id).subscribe(x => {
        this.response = x;
        this.loading = false;
        this.forecastNextDays = x['data'].splice(1, 5);
        this.graphics();
      });
    });
  }

  favoriteCity(){
    localStorage.setItem('state', this.stateSelected);
    localStorage.setItem('city', this.citySelected);
  }

  graphics(){
    const dataMax = [];
    const dataMin = [];
    // '#0000FF',
    this.forecastNextDays.forEach(x => {
      dataMax.push({ day: x.date, max: x.temperature.max });
      dataMin.push({ day: x.date, min: x.temperature.min });
    });
    setTimeout(() => {
      Morris.Line({
        element: 'morris-extra-area-max',
        data: dataMax,
        // The name of the data record attribute that contains x-values.
        xkey: 'day',
        // A list of names of data record attributes that contain y-values.
        ykeys: ['max'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Maximo'],
        hideHover: false,
        resize: true,
        smooth: false,
        ymax: 'auto',
        ymin: 'auto',
        xLabels: 'day',
        lineColors: [ '#FF0000']
      });
      Morris.Line({
        element: 'morris-extra-area-min',
        data: dataMin,
        // The name of the data record attribute that contains x-values.
        xkey: 'day',
        // A list of names of data record attributes that contain y-values.
        ykeys: ['min'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Minimo'],
        hideHover: false,
        resize: true,
        smooth: false,
        ymax: 'auto',
        ymin: 'auto',
        xLabels: 'day',
        lineColors: [ '#0000FF']
      });
    });
  }
}
