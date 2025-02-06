const apiKey = "481f2a1952ecef3df3a6ccc1";

export async function fetchExchangeSpecificCurrency(fromCurrency, toCurrency) {
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`
  const response = await fetch(url);
  return response.json();
}
