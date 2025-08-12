import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbitDetermination } from './orbit-determination';

describe('OrbitDetermination', () => {
  let component: OrbitDetermination;
  let fixture: ComponentFixture<OrbitDetermination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrbitDetermination]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrbitDetermination);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
