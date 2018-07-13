import { TestBed, inject } from '@angular/core/testing';

import { SnackbarServiceService } from './snackbar-service.service';

describe('SnackbarServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnackbarServiceService]
    });
  });

  it('should be created', inject([SnackbarServiceService], (service: SnackbarServiceService) => {
    expect(service).toBeTruthy();
  }));
});
