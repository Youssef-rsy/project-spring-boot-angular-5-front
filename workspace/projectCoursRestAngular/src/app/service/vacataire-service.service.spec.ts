import { TestBed, inject } from '@angular/core/testing';

import { VacataireServiceService } from './vacataire-service.service';

describe('VacataireServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VacataireServiceService]
    });
  });

  it('should be created', inject([VacataireServiceService], (service: VacataireServiceService) => {
    expect(service).toBeTruthy();
  }));
});
