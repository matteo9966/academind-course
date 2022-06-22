import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCustomInputComponent } from './form-custom-input.component';

describe('FormCustomInputComponent', () => {
  let component: FormCustomInputComponent;
  let fixture: ComponentFixture<FormCustomInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCustomInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCustomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
