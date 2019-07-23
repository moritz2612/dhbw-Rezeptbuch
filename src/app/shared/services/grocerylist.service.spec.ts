import { TestBed } from '@angular/core/testing';

import { GrocerylistService } from './grocerylist.service';

describe('GrocerylistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrocerylistService = TestBed.get(GrocerylistService);
    expect(service).toBeTruthy();
  });
});
