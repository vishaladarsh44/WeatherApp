import { TestBed } from '@angular/core/testing';

import { ApiuxService } from './apiux.service';


describe('ApiuxService', () => {
  let service: ApiuxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiuxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
