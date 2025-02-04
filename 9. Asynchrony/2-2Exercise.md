

**Problèmes clés dans votre code mis à jour :**  

**Mauvaise utilisation de `Promise.allSettled` :**  

- Vous passez directement les fonctions `processPayment` et `sendConfirmationEmail` à `Promise.allSettled`, mais vous devez appeler ces fonctions avec les arguments appropriés.  
- `Promise.allSettled` est utilisé pour exécuter plusieurs promesses en parallèle, mais dans ce cas, `sendConfirmationEmail` dépend du résultat de `processPayment`, donc elles doivent être chaînées de manière séquentielle.  

**Gestion des erreurs :**  

- Vous vérifiez si une promesse a été rejetée en utilisant `somethingWrong`, mais cette approche ne fournit pas de messages d'erreur détaillés.  
- À la place, vous devriez gérer les erreurs pour chaque étape individuellement et fournir un retour d’information significatif.  

**Logique dans `handlePayment` :**  

- La fonction `handlePayment` doit enchaîner `processPayment` et `sendConfirmationEmail` de manière séquentielle, et non en parallèle.  

**Retour des erreurs :**  

- Vous retournez un nouvel objet `Error` dans le bloc `else`, mais cela ne sera pas capté par `.catch()`.  
- Au lieu de cela, vous devriez lever (`throw`) l'erreur ou rejeter (`reject`) la promesse.  

---

### **Exercise 2: Simulate a Payment Processing System**

#### **Instructions:**
1. **Create a function `processPayment(paymentDetails)`**  
   - Simulates processing a payment.  
   - Resolves with a transaction ID (`{ transactionId: "txn12345", status: "success" }`) if the payment is successful.  
   - Rejects with an error message (`"Payment failed: Insufficient funds"`) if the payment fails.  
   - Use `setTimeout()` to simulate a 2-second delay.  

2. **Create a function `sendConfirmationEmail(transactionId)`**  
   - Simulates sending a confirmation email.  
   - Resolves with a message (`"Email sent to user@example.com"`) if the email is sent successfully.  
   - Rejects with an error message (`"Failed to send email"`) if the email fails to send.  
   - Use `setTimeout()` to simulate a 1-second delay.  

3. **Create a function `handlePayment(paymentDetails)`**  
   - Chains the two functions (`processPayment` and `sendConfirmationEmail`) together.  
   - If the payment is successful, send a confirmation email.  
   - Log the final result or error.  
   - Use `async/await` for cleaner code.  

4. **Add error handling**  
   - If the payment fails, log the error and stop the process.  
   - If the email fails to send, log the error but still return the transaction ID.  

---

### **Starter Code:**
```javascript
// Simulate a payment processing system
function processPayment(paymentDetails) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const { amount, cardNumber } = paymentDetails;
      if (amount <= 1000 && cardNumber.startsWith("4")) { // Simulate a successful payment
        resolve({ transactionId: `txn${Math.floor(Math.random() * 100000)}`, status: "success" });
      } else {
        reject("Payment failed: Insufficient funds or invalid card");
      }
    }, 2000); // Simulate a 2-second delay
  });
}

// Simulate sending a confirmation email
function sendConfirmationEmail(transactionId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (transactionId) { // Simulate a successful email
        resolve(`Email sent to user@example.com for transaction ${transactionId}`);
      } else {
        reject("Failed to send email");
      }
    }, 1000); // Simulate a 1-second delay
  });
}

// Handle the payment and email confirmation
async function handlePayment(paymentDetails) {
  try {
    // Step 1: Process the payment
    const paymentResult = await processPayment(paymentDetails);
    console.log("Payment successful:", paymentResult);

    // Step 2: Send confirmation email
    const emailResult = await sendConfirmationEmail(paymentResult.transactionId);
    console.log(emailResult);

    return paymentResult.transactionId; // Return the transaction ID for further use
  } catch (error) {
    console.error(error); // Handle payment or email errors
    throw error; // Re-throw the error if needed
  }
}

// Test the function
const paymentDetails = { amount: 500, cardNumber: "4123456789012345" };
handlePayment(paymentDetails)
  .then(transactionId => console.log("Final transaction ID:", transactionId))
  .catch(error => console.error("Payment handling failed:", error));
```

---

### **Expected Output:**
1. **Successful Payment and Email:**  
   ```
   Payment successful: { transactionId: 'txn12345', status: 'success' }
   Email sent to user@example.com for transaction txn12345
   Final transaction ID: txn12345
   ```

2. **Failed Payment:**  
   ```
   Payment failed: Insufficient funds or invalid card
   Payment handling failed: Payment failed: Insufficient funds or invalid card
   ```

3. **Successful Payment but Failed Email:**  
   ```
   Payment successful: { transactionId: 'txn12345', status: 'success' }
   Failed to send email
   Final transaction ID: txn12345
   ```

---

### **Key Learning Points:**
1. **Chaining Promises:** You’ll practice chaining asynchronous operations (`processPayment` → `sendConfirmationEmail`).  
2. **Error Handling:** You’ll handle errors at each step and decide whether to continue or stop the process.  
3. **Async/Await:** You’ll use `async/await` to make the code more readable and maintainable.  

