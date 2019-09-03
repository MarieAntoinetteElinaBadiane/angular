import { TestBed } from '@angular/core/testing';

import { UserpartenaireService } from './userpartenaire.service';

describe('UserpartenaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserpartenaireService = TestBed.get(UserpartenaireService);
    expect(service).toBeTruthy();
  });
});
