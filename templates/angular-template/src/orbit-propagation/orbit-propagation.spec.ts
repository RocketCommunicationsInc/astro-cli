import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbitPropagation } from './orbit-propagation';

describe('OrbitPropagation', () => {
  let component: OrbitPropagation;
  let fixture: ComponentFixture<OrbitPropagation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrbitPropagation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrbitPropagation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
