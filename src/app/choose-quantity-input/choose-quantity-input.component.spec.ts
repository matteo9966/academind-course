import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseQuantityInputComponent } from './choose-quantity-input.component';

describe('ChooseQuantityInputComponent', () => {
  let component: ChooseQuantityInputComponent;
  let fixture: ComponentFixture<ChooseQuantityInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseQuantityInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseQuantityInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
