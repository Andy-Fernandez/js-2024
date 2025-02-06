import { convertSpecific } from "./converter.mjs";

export function setupEventListeners() {
  const amount = document.getElementById("amount");
  const fromCurrency = document.getElementById("fromCurrency");
  const toCurrency = document.getElementById("toCurrency");
  const convertBtn = document.getElementById("convertBtn");
  const resultDiv = document.getElementById("result");

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
}
