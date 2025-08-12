import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjunctionAssessment } from './conjunction-assessment';

describe('ConjunctionAssessment', () => {
  let component: ConjunctionAssessment;
  let fixture: ComponentFixture<ConjunctionAssessment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConjunctionAssessment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConjunctionAssessment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
