import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableContainerComponent } from './reusable-container.component';

describe('ReusableContainerComponent', () => {
  let component: ReusableContainerComponent;
  let fixture: ComponentFixture<ReusableContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
