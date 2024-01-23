import { InputComponent } from './input.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlContainer, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    const fg: FormGroup = new FormGroup({});

    const fgd: FormGroupDirective = new FormGroupDirective([], []);
    fgd.form = fg;

    await TestBed.configureTestingModule({
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
