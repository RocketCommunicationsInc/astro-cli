import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdRunSelector } from './od-run-selector';

describe('OdRunSelector', () => {
  let component: OdRunSelector;
  let fixture: ComponentFixture<OdRunSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OdRunSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdRunSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
