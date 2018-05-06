import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router/';
import { AppComponent } from './app.component';
import { ExchangeRatesCalculatorComponent } from './exchange-rates-calculator/exchange-rates-calculator.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' }, 
    { path: 'calculator', component: ExchangeRatesCalculatorComponent}
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}