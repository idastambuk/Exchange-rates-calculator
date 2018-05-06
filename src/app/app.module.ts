import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExchangeRatesCalculatorComponent } from './exchange-rates-calculator/exchange-rates-calculator.component';
import { AppRoutingModule } from './app-routing';
import { RatesService } from './services/rates-service/rates.service';
import { HttpModule } from '@angular/http';
import { DateValidator } from './directives/date-validator';
import { SortableColumnComponent } from './table_sorting/sortable-column.component';



@NgModule({
  declarations: [
    AppComponent,
    ExchangeRatesCalculatorComponent,
    SortableColumnComponent,
    DateValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    HttpModule,
  ],
  providers: [
    RatesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
