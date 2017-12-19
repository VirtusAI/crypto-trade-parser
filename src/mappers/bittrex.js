const moment = require("moment");

module.exports = (raw) => {
  return raw.map((obj) => {
    let [fromCurrency, toCurrency] = obj.Exchange.split('-');
    let feePercentage = (parseFloat(obj.CommissionPaid) / parseFloat(obj.Quantity)) * 100;
    let boughtAmount = parseFloat(obj.Quantity);
    let rate = parseFloat(obj.Limit);
    let feeToCurrency = parseFloat(obj.CommissionPaid);
    let feeFromCurrency = feeToCurrency / rate;
    return {
      bookID: obj.OrderUuid,
      fee: {
        percentage: feePercentage,
        absolute: {
          [fromCurrency]: feeFromCurrency, [toCurrency]: feeToCurrency
        }
      },
      sold: {
        currency: fromCurrency,
        valueGross: parseFloat(obj.Price) //Gross value
      },
      bought: {
        currency: toCurrency,
        valueNet: boughtAmount // NET value
      },
      rate,
      date: moment.utc(obj.Closed, "MM/DD/YYYY hh:mm:ss A").valueOf(),
      exchange: 'bittrex'
    }
  })
}
