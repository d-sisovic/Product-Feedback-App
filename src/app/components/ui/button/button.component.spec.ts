import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from './button.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('ButtonComponent', () => {
  let element: DebugElement;
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not emit clickEvent if button is disabled', () => {
    const clickEventSpy = jest.spyOn(component.clickEvent, 'emit');

    component.disabled = true;

    fixture.detectChanges();

    const buttonElement = element.query(By.css('.button'));

    buttonElement.triggerEventHandler('click');

    fixture.detectChanges();

    expect(clickEventSpy).toHaveBeenCalledTimes(0);
  });
});
