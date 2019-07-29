import { City } from './../models/city';
import { State } from './../models/state';
import { ClimaTempoService } from './clima-tempo.service';
import { Component, OnInit } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

 // declare var Morris: any;
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
  states: State[];
  cities: City;
  citySelected: any;
  stateSelected: any;
  public loading: boolean;
  forecastNextDays = new Array();
  whatDoOnweekend = new Array();

  constructor(private climaTempoService: ClimaTempoService) {
    this.loading = true;
    this.getStates();
  }

  getStates() {
    this.climaTempoService.getStates().subscribe(x => {
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
    this.climaTempoService.getCityId(this.stateSelected, this.citySelected).subscribe((city: City[]) => {
      this.climaTempoService.get(city[0].id).subscribe(x => {
        this.response = x;
        this.forecastNextDays = x['data'].splice(1);
        this.forecastNextDays.forEach(y => {
          if (new Date(y.date).getUTCDay()%6==0) {
            this.weekend(y);
          }
        });
        this.graphics();
        this.loading = false;
      });
   });
  }

  favoriteCity() {
    localStorage.setItem('state', this.stateSelected);
    localStorage.setItem('city', this.citySelected);
  }


  weekend(day) {
    if (this.whatDoOnweekend.length > 0 && this.whatDoOnweekend[0].rain && day.rain.probability > 0) {
      // chuva chuva
      this.whatDoOnweekend = [];
      this.whatDoOnweekend.push({rain: true, text: `Final de semana com chuva, que tal ler um livro,
      começar uma nova série na netflix ou aprender algo novo?`});
    } else if (this.whatDoOnweekend.length > 0 && !this.whatDoOnweekend[0].rain && day.rain.probability === 0) {
      // sol sol
      this.whatDoOnweekend = [];
      this.whatDoOnweekend.push({rain: false, text: `Final de semana com sol, Que tal curtir um tempo ao ar livre? fazer um piquenique,
       andar de bicicleta pela cidade ou aprender um novo esporte?`});
    } else if (day.rain.probability > 0) {
      this.whatDoOnweekend.push({rain: true, text: `${day.date_br}: vai chover, que tal ler um livro,
      ou começar uma nova série na netflix?`});
    } else {
      this.whatDoOnweekend.push({rain: false, text: `${day.date_br}: vai dar sol, Que tal curtir um tempo ao ar livre?
      fazer um piquenique, andar de bicicleta pela cidade ou aprender um novo esporte?`});
    }
  }

  graphics() {
    const dataMax = [];
    const dataMin = [];
    // '#0000FF',
    this.forecastNextDays.forEach(x => {
      dataMax.push({ day: x.date, max: x.temperature.max });
      dataMin.push({ day: x.date, min: x.temperature.min });
    });
    setTimeout(() => {
    /*  Morris.Line({
        element: 'morris-extra-area-max',
        data: dataMax,
        xkey: 'day',
        ykeys: ['max'],
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
        xkey: 'day',
        ykeys: ['min'],
        labels: ['Minimo'],
        hideHover: false,
        resize: true,
        smooth: false,
        ymax: 'auto',
        ymin: 'auto',
        xLabels: 'day',
        lineColors: [ '#0000FF']
      });*/
    });
  }
}
