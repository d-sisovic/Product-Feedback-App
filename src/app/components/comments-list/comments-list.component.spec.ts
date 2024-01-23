import { RouterTestingModule } from '@angular/router/testing';
import { CommentsListComponent } from './comments-list.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('CommentsListComponent', () => {
  let component: CommentsListComponent;
  let fixture: ComponentFixture<CommentsListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommentsListComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsListComponent);
    component = fixture.componentInstance;
    component.comments = [
      {
        id: 1,
        content: "",
        user: {
          image: "",
          name: "Daniel",
          username: "siskoftn"
        }
      }
    ];

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
