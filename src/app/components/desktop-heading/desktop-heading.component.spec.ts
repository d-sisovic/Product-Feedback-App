import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopHeadingComponent } from './desktop-heading.component';

describe('DesktopHeadingComponent', () => {
  let component: DesktopHeadingComponent;
  let fixture: ComponentFixture<DesktopHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopHeadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesktopHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
