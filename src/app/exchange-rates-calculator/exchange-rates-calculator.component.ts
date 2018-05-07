import { Component, OnInit, DoCheck, ViewChild, AfterViewInit } from '@angular/core';

import { CURRENCIES, Rate } from '../services/constants/rates-constants' 
import { RatesService } from '../services/rates-service/rates.service'
import { FormBuilder, FormGroup, Validators, AbstractControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-exchange-rates-calculator',
  templateUrl: './exchange-rates-calculator.component.html',
  styleUrls: ['./exchange-rates-calculator.component.css']
})

export class ExchangeRatesCalculatorComponent implements OnInit {

  @ViewChild('f') ratesForm: NgForm;
  
  constructor(
    private ratesService: RatesService
  ) { }

  public currencies = CURRENCIES;

  private data: any;
  private rates : Array<Rate> = [];

  private date: String;
  private base: String;

  private showTable = false;

  private error_msg;

  ngOnInit() {
    
  }

  onGetRates(f) {
    this.date = f.value.date;
    this.base = f.value.base;
    this.ratesService.getRates(this.date, this.base)
      .subscribe(
          response => {
            this.rates = [];
            this.data = response.rates;
            this.ratesHandler(this.data);
            this.showTable = true;
            document.querySelector('#currency-column').setAttribute("class", "asc");
          },
          error => {
            console.log(error.error_msg);
          },	
      )  
  }

  ratesHandler(data) {
    for(var i in this.data) {
      if (data.hasOwnProperty(i)) {
        var obj = new Rate (i, this.data[i]);
        this.rates.push(obj);
      }
    }
  }

}
