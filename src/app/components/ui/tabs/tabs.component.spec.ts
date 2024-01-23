import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TabsComponent } from './tabs.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('TabsComponent', () => {
  let element: DebugElement;
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TabsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    fixture.detectChanges();
  }));

  it('should create', () => {
    const tabPlannedElement = element.query(By.css('.tab--planned'));

    expect(component).toBeTruthy();
    expect(tabPlannedElement).toBeTruthy();
  });

  it('should react to tab click', () => {
    const clickSpy = jest.spyOn(TabsComponent.prototype, 'onSelectTab');
    const tabElements = element.queryAll(By.css('.tab'));

    const [_, secondElement] = tabElements;

    secondElement.triggerEventHandler('click');

    fixture.detectChanges();

    expect(clickSpy).toHaveBeenCalledTimes(1);

    const tabProgressElement = element.query(By.css('.tab--in_progress'));

    expect(tabProgressElement).toBeTruthy();
  });
});
