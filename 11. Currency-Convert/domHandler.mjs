import { convertSpecific, convert } from "./converter.mjs";
import { fetchCurrency } from "./api.mjs";


export function setupEventListeners() {
  const amount = document.getElementById("amount");
  const fromCurrency = document.getElementById("fromCurrency");
  const toCurrency = document.getElementById("toCurrency");
  const convertBtn = document.getElementById("convertBtn");
  const convertBtnMulti = document.getElementById("convertBtnMulti");
  const resultDiv = document.getElementById("result");
  
  const fromCurrencyMulti = document.getElementById("fromCurrencyMulti");
  const resultUsd = document.getElementById("resultUsd")
  const resultEur = document.getElementById("resultEur")
  const resultJpy = document.getElementById("resultJpy")
  const resultGbp = document.getElementById("resultGbp")


  convertBtn.addEventListener("click", async () => {
    try {
      const amountNow = parseFloat(amount.value.trim()) || 0;
      const from = fromCurrency.value.trim();
      const to = toCurrency.value.trim();

      if (!amountNow || isNaN(amountNow)) {
        resultDiv.textContent = "Please enter a valid amount.";
        return;
      }
      const result = await convertSpecific(amountNow, from, to);
      resultDiv.textContent = result;
    } catch (error) {
      resultDiv.textContent = "Error: Unable to fetch exchange rates.";
      console.error("Error:", error.message);
    }
  });

  convertBtnMulti.addEventListener("click", async () => {
    try {
      const from = fromCurrencyMulti.value.trim();
      const data = await fetchCurrency(from);
      const conversion_rates = data.conversion_rates;
      const usd = conversion_rates['USD'];
      const jpy = conversion_rates['JPY'];
      const gbp = conversion_rates['GBP'];
      const eur = conversion_rates['EUR'];
  
      resultUsd.innerText = "USD: " + convert(100, usd);
      resultEur.innerText = "EUR: " + convert(100, eur);
      resultJpy.innerText = "JPY: " + convert(100, jpy);
      resultGbp.innerText = "GBP: " + convert(100, gbp);

      // console.log(data);
      console.log(
        convert(100, usd),
        convert(100, eur),
        convert(100, jpy),
        convert(100, gbp),
      );
      
      
    } catch (error) {
      console.error("Error:", error.message);
    }
})

}
