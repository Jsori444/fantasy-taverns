import { TestBed } from '@angular/core/testing';

import { TavernsService } from './taverns.service';

describe('TavernsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TavernsService = TestBed.get(TavernsService);
    expect(service).toBeTruthy();
  });
});
