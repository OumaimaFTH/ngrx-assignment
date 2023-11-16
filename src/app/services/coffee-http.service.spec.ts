import { TestBed } from '@angular/core/testing';

import { CoffeeHttpService } from './coffee-http.service';

describe('CoffeeHttpService', () => {
  let service: CoffeeHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeeHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
