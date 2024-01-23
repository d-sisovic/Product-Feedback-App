import { CardHttpService } from './card-http.service';
import { TestBed, fakeAsync, flush } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

const mockResponse = {
  "currentUser": {
    "image": "image-zena.jpg",
    "name": "Zena Kelley",
    "username": "velvetround"
  },
  "productRequests": [{
    "id": 1,
    "title": "Add tags for solutions",
    "category": "enhancement",
    "upvotes": 112,
    "status": "suggestion",
    "description": "Easier to search for solutions based on a specific stack.",
    "comments": [
      {
        "id": 1,
        "content": "Awesome idea! Trying to find framework-specific projects within the hubs can be tedious",
        "user": {
          "image": "image-suzanne.jpg",
          "name": "Suzanne Chang",
          "username": "upbeat1811"
        }
      },
      {
        "id": 2,
        "content": "Please use fun, color-coded labels to easily identify them at a glance",
        "user": {
          "image": "image-thomas.jpg",
          "name": "Thomas Hood",
          "username": "brawnybrave"
        }
      }
    ]
  }]
};

describe('CardHttpService', () => {
  let service: CardHttpService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CardHttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct GET response', fakeAsync(() => {
    service.fetchData$().subscribe(response => {
      expect(response).toBeTruthy();

      expect(response.currentUser.username).toBe("velvetround");
    });

    const req = httpTestingController.expectOne('assets/data.json');

    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);

    flush();
  }));
});
