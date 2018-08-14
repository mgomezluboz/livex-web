import { TestBed, inject } from '@angular/core/testing';

import { EstablecimientosService } from './establecimientos.service';

describe('EstablecimientosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstablecimientosService]
    });
  });

  it('should be created', inject([EstablecimientosService], (service: EstablecimientosService) => {
    expect(service).toBeTruthy();
  }));
});
