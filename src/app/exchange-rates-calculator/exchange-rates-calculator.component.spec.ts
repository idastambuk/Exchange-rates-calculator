import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRatesCalculatorComponent } from './exchange-rates-calculator.component';
import { FormsModule } from '@angular/forms';
import { SortableColumnComponent } from '../table_sorting/sortable-column.component';
import { RatesService } from '../services/rates-service/rates.service';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ExchangeRatesCalculatorComponent', () => {
  let component: ExchangeRatesCalculatorComponent;
  let fixture: ComponentFixture<ExchangeRatesCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ExchangeRatesCalculatorComponent,
        SortableColumnComponent],
      imports: [ 
        RouterTestingModule.withRoutes([
          { path: 'calculator', component: ExchangeRatesCalculatorComponent}
      ]),
        FormsModule, 
        HttpModule
      ],
      providers: [
        RatesService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRatesCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
