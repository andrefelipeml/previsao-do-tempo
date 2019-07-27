import { TestBed } from '@angular/core/testing';

import { ClimaTempoService } from './clima-tempo.service';

describe('ClimaTempoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClimaTempoService = TestBed.get(ClimaTempoService);
    expect(service).toBeTruthy();
  });
});
