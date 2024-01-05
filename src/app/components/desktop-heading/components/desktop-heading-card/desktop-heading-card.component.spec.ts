import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopHeadingCardComponent } from './desktop-heading-card.component';

describe('DesktopHeadingCardComponent', () => {
  let component: DesktopHeadingCardComponent;
  let fixture: ComponentFixture<DesktopHeadingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopHeadingCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesktopHeadingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
