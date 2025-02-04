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

const paymentDetails = {
  transactionId: 123,
  amout: 1000,
};

function processPayment(paymentDetails) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // processing a payment
      if (paymentDetails.amout >= 1000 ){ // amount is more than 1000, solves success
        resolve({transactionId: paymentDetails.transactionId + Math.floor(Math.random()*100000), status: "success"});
      } else {
        reject(new Error(`Échec du paiement : Fonds insuffisants ou carte invalide`)); // Payment failed: Insufficient funds.
      }
    }, 2000);
  })
};

function sendConfirmationEmail(transactionId) { // if transacciónId exists, it can continua, but we need a data base of transacciónes to search, don't we?
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if ( transactionId ){
        resolve(`E-mail envoyé à user@example.com pour la transaction ${transactionId}`);
      } else {
        reject(new Error("Échec de l'envoi de l'e-mail"));
      }
    }, 1000);
  })
}

function handlePayment(paymentDetails){
  return processPayment(paymentDetails)
    .then((message) => {
      console.log("Paiement réussi :", message)
      return (sendConfirmationEmail(message.transactionId))
    })
    .then( emailResult => {
      console.log(emailResult)
      return "Paiement et e-mail envoyés avec succès !";
    })
    .catch((error) => {
      console.error("Erreur :",error.message);
      throw new Error("Something went wrong:" + error.message);
    });
}

handlePayment(paymentDetails)
  .then((message) => console.log(message))
  .catch((error) => console.error(error.message));

// processPayment(paymentDetails)
//   .then(message => console.log(message))
//   .catch(error => console.log(error));