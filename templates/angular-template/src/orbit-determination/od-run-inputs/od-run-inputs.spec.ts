import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdRunInputs } from './od-run-inputs';

describe('OdRunInputs', () => {
  let component: OdRunInputs;
  let fixture: ComponentFixture<OdRunInputs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OdRunInputs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdRunInputs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
