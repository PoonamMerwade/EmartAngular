import { TestBed } from '@angular/core/testing';

import { NewCheckService } from './new-check.service';

describe('NewCheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewCheckService = TestBed.get(NewCheckService);
    expect(service).toBeTruthy();
  });
});
