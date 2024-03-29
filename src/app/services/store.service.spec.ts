import { StoreService } from './store.service';
import { TestBed } from '@angular/core/testing';

describe('StoreService', () => {
  let service: StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should reject voting if already voted', () => {
    service.upvotesStore.set(['777']);

    expect(service.didUserAlreadyVote(777)()).toBe(true);
  });
});
