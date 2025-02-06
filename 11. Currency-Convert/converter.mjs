import { fetchExchangeSpecificCurrency, fetchCurrency } from "./api.mjs";

// returns the value of spefici convert
export async function convertSpecific(amount, fromCurrency, toCurrency) {
  try {
    const data = await fetchExchangeSpecificCurrency(fromCurrency, toCurrency);
    const rate = data.conversion_rate;

    const result = (amount * rate).toFixed(2);

    return result;
    // console.log(`${amount} ${fromCurrency} = ${result} ${toCurrency}`);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export async function multiCurrencyConverter(fromCurrency) {
  try {
    const data = await fetchCurrency(fromCurrency);
    const usd = conversion_rates['USD'];
    // const jpy = conversion_rates['JPY'];
    // const gbp = conversion_rates['GBP'];
    // const eur = conversion_rates['EUR'];
    const from = conversion_rates[fromCurrency];

    // console.log(convert(100, from, usd));
    // console.log(convert(100, from, jpy));
    // console.log(convert(100, from, gbp));
    // console.log(convert(100, from, eur));
    console.log(data);
    
  } catch (error) {
    console.error("Error:", error.message);
  }
}

const convert = (amount ,fromRate, toRate) => (amount * (fromRate/toRate)).toFixed(2);

multiCurrencyConverter('USD')
  .then((message) => console.log(message))
  .catch((error) => console.error(error))