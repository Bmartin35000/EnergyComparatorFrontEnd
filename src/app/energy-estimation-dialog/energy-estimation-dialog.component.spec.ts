import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyEstimationDialogComponent } from './energy-estimation-dialog.component';

describe('EnergyEstimationDialogComponent', () => {
  let component: EnergyEstimationDialogComponent;
  let fixture: ComponentFixture<EnergyEstimationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyEstimationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyEstimationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
