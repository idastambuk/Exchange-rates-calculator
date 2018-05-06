export const CURRENCIES: Array<string> = ['EUR', 'USD', 'GBP', 'AUD', 'CAD', 'JPY'];

export class Rate {

    currency;
    ecb_rate;
    buy_rate;
    sell_rate;

    constructor(currency: String, ecb_rate: Number) {
      this.currency = currency;
      this.ecb_rate = ecb_rate;
      
      this.buy_rate = this.calculateBuy(this.ecb_rate); 
      this.sell_rate = this.calculateSell(this.ecb_rate); 
    }

    // 5% on buy/sell rates
    private commission = 0.05;
      
    calculateBuy(ecb) {
      return (ecb - (ecb * this.commission)).toFixed(4);
      
    }
    calculateSell(ecb) {
      return (ecb + (ecb * this.commission)).toFixed(4);
    }
  }