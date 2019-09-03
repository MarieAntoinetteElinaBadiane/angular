import { TestBed } from '@angular/core/testing';

import { UsercompteService } from './usercompte.service';

describe('UsercompteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsercompteService = TestBed.get(UsercompteService);
    expect(service).toBeTruthy();
  });
});
