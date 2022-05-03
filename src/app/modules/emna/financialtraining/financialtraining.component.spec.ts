import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialtrainingComponent } from './financialtraining.component';

describe('FinancialtrainingComponent', () => {
  let component: FinancialtrainingComponent;
  let fixture: ComponentFixture<FinancialtrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialtrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialtrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
