import { TestBed, inject } from '@angular/core/testing';

import { PermanentServiceService } from './permanent-service.service';

describe('PermanentServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PermanentServiceService]
    });
  });

  it('should be created', inject([PermanentServiceService], (service: PermanentServiceService) => {
    expect(service).toBeTruthy();
  }));
});
