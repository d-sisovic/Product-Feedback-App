import { SortButtonComponent } from './sort-button.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SortButtonComponent', () => {
  let component: SortButtonComponent;
  let fixture: ComponentFixture<SortButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
