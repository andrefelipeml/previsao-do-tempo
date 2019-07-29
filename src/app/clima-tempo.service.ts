import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { State } from 'src/models/state';
import { City } from 'src/models/city';
@Injectable({
  providedIn: 'root'
})
export class ClimaTempoService {

  url = 'https://apiadvisor.climatempo.com.br/api/v1/';
  token = '9612814012618a1ff330afef395aad92';
  constructor(public http: HttpClient) { }

  getStates(): Observable<State[]> {
    return this.http.get<State[]>('https://br-cidade-estado-nodejs.glitch.me/estados/');
  }

  getCities(stateId): Observable<City> {
    return this.http.get<City>(`https://br-cidade-estado-nodejs.glitch.me/estados/${stateId}/cidades?`);
}

  get(id) {
    return this.http.get(`${this.url}forecast/locale/${id}/days/15?token=${this.token}`);
  }

  getCityId(state, city): Observable<City[]> {
    return this.http.get<City[]>(`${this.url}locale/city?name=${city}&state=${state}&token=${this.token}`);
    
  }

}
