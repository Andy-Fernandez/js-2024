const apiKey = "481f2a1952ecef3df3a6ccc1";

// This is not necesary...
export async function fetchExchangeRates() {
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
  const response = await fetch(url);
  return response.json();
}

export async function fetchExchangeSpecificCurrency(fromCurrency, toCurrency) {
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`
  const response = await fetch(url);
  return response.json();
}
