import { TestBed } from '@angular/core/testing';

import { MapaMarketService } from './mapa-market.service';

describe('MapaMarketService', () => {
  let service: MapaMarketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapaMarketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
