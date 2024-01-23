import { EmptyCardListComponent } from './empty-card-list.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('EmptyCardListComponent', () => {
  let component: EmptyCardListComponent;
  let fixture: ComponentFixture<EmptyCardListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EmptyCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
