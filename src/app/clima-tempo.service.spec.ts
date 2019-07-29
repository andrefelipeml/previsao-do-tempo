import { TestBed } from '@angular/core/testing';

import { ClimaTempoService } from './clima-tempo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('ClimaTempoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
  }));

  it('should be created', () => {
    const service: ClimaTempoService = TestBed.get(ClimaTempoService);
    expect(service).toBeTruthy();
  });
});
