import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyCardListComponent } from './empty-card-list.component';

describe('EmptyCardListComponent', () => {
  let component: EmptyCardListComponent;
  let fixture: ComponentFixture<EmptyCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyCardListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmptyCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
