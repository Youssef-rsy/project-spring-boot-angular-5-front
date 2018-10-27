import { TestBed, inject } from '@angular/core/testing';

import { CoursServiceService } from './cours-service.service';

describe('CoursServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursServiceService]
    });
  });

  it('should be created', inject([CoursServiceService], (service: CoursServiceService) => {
    expect(service).toBeTruthy();
  }));
});
