import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalStatusBarComponent } from './global-status-bar.component';

describe('GlobalStatusBarComponent', () => {
  let component: GlobalStatusBarComponent;
  let fixture: ComponentFixture<GlobalStatusBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalStatusBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalStatusBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
