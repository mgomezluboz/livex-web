import { TestBed, inject } from '@angular/core/testing';

import { EspectaculosService } from './espectaculos.service';

describe('EspectaculosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EspectaculosService]
    });
  });

  it('should be created', inject([EspectaculosService], (service: EspectaculosService) => {
    expect(service).toBeTruthy();
  }));
});
