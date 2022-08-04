import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronoutComponent } from './astronout.component';

describe('AstronoutComponent', () => {
  let component: AstronoutComponent;
  let fixture: ComponentFixture<AstronoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstronoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstronoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
