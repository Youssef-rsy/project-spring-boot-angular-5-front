import { TestBed, inject } from '@angular/core/testing';

import { ServiceEtudiantService } from './service-etudiant.service';

describe('ServiceEtudiantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceEtudiantService]
    });
  });

  it('should be created', inject([ServiceEtudiantService], (service: ServiceEtudiantService) => {
    expect(service).toBeTruthy();
  }));
});
