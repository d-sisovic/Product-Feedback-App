import { SubheadingComponent } from './subheading.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SubheadingComponent', () => {
  let component: SubheadingComponent;
  let fixture: ComponentFixture<SubheadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubheadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
