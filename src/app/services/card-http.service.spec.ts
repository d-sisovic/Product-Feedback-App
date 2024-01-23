import { TestBed } from '@angular/core/testing';
import { CardHttpService } from './card-http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CardHttpService', () => {
  let service: CardHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CardHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
