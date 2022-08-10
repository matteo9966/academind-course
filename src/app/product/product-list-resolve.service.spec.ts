import { TestBed } from '@angular/core/testing';

import { ProductListResolveService } from './product-list-resolve.service';

describe('ProductListResolveService', () => {
  let service: ProductListResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductListResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
