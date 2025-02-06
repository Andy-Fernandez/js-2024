import { fetchExchangeSpecificCurrency } from "./api.mjs";

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