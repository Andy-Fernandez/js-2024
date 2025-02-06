import { fetchExchangeRates, fetchExchangeSpecificCurrency } from "./api.mjs";

export function convertCurrency(amount, fromCurrency, toCurrency, rates) {
  if (!rates[fromCurrency] || !rates[toCurrency]) {
    throw new Error("Invalid currency code");
  }
  const fromRate = rates[fromCurrency];
  const toRate = rates[toCurrency];
  return (amount * (toRate / fromRate)).toFixed(2);
}

export async function runConverter() {
  try {
    const data = await fetchExchangeRates();
    const rates = data.conversion_rates;

    const amount = 100; // Example amount
    const fromCurrency = "USD";
    const toCurrency = "EUR";

    const result = convertCurrency(amount, fromCurrency, toCurrency, rates);
    console.log(`${amount} ${fromCurrency} = ${result} ${toCurrency}`);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

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