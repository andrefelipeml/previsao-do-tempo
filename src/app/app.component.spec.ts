import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ClimaTempoService } from './clima-tempo.service';
import { ClimaTempoServiceMock } from './clima-tempo.service.mock';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { State } from 'src/models/state';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        HttpClientTestingModule,
        FormsModule
      ],
      providers: [
        {
          provide: ClimaTempoService,
          useClass: ClimaTempoServiceMock
        }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });


  it('deve buscar estados e cidades', () => {
    const spy = spyOn(component['climaTempoService'], 'getStates').and.callThrough();
    component.getStates();
    expect(spy).toHaveBeenCalled();
    let state = new Object();
    state = {id: 'DF', estado: 'Distrito Federal' };
    expect(component.states).toContain(state as State);
    expect(component.cities).toContain({
      estadoId: 'DF',
      cidade: 'Brasília',
      capital: true
    });
  });
});
