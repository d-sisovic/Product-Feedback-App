import { InputComponent } from './input.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ControlContainer, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(waitForAsync(() => {
    const fg: FormGroup = new FormGroup({});

    const fgd: FormGroupDirective = new FormGroupDirective([], []);
    fgd.form = fg;

    TestBed.configureTestingModule({
      imports: [
        InputComponent,
        ReactiveFormsModule
      ],
      providers: [
        { provide: ControlContainer, useValue: fgd }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
