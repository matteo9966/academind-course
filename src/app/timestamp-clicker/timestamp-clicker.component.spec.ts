import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimestampClickerComponent } from './timestamp-clicker.component';

describe('TimestampClickerComponent', () => {
  let component: TimestampClickerComponent;
  let fixture: ComponentFixture<TimestampClickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimestampClickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimestampClickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
