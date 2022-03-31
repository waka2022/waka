import { TestBed } from '@angular/core/testing';

import { WakaFileService } from './waka-file.service';

describe('WakaFileService', () => {
  let service: WakaFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WakaFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
