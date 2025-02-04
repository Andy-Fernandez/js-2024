"use strict";

// resolve {trsancciontId: , stauts: }
// reject "Error messages"

/* paymentDetails
En esta parte es como pedir al banco que se se efectó la transacción

Entonces estos serían los datos que el banco me esta pasando:
{
  transacctionsId: 123,
  amout: 10,
  state: success,
}
*/
var paymentDetails = {
  transactionId: 123,
  amout: 1000
};

function processPayment(paymentDetails) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // processing a payment
      if (paymentDetails.amout >= 1000) {
        // amount is more than 1000, solves success
        resolve({
          transactionId: paymentDetails.transactionId + Math.floor(Math.random() * 100000),
          status: "success"
        });
      } else {
        reject(new Error("\xC9chec du paiement : Fonds insuffisants ou carte invalide")); // Payment failed: Insufficient funds.
      }
    }, 2000);
  });
}

;

function sendConfirmationEmail(transactionId) {
  // if transacciónId exists, it can continua, but we need a data base of transacciónes to search, don't we?
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (transactionId) {
        resolve("E-mail envoy\xE9 \xE0 user@example.com pour la transaction ".concat(transactionId));
      } else {
        reject(new Error("Échec de l'envoi de l'e-mail"));
      }
    }, 1000);
  });
}

function handlePayment(paymentDetails) {
  return processPayment(paymentDetails).then(function (message) {
    console.log("Paiement réussi :", message);
    return sendConfirmationEmail(message.transactionId);
  }).then(function (emailResult) {
    console.log(emailResult);
    return "Paiement et e-mail envoyés avec succès !";
  })["catch"](function (error) {
    console.error("Erreur :", error.message);
    throw new Error("Something went wrong:" + error.message);
  });
}

handlePayment(paymentDetails).then(function (message) {
  return console.log(message);
})["catch"](function (error) {
  return console.error(error.message);
}); // processPayment(paymentDetails)
//   .then(message => console.log(message))
//   .catch(error => console.log(error));