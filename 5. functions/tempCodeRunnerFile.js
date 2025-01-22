let number = 13;

function myPure(number){
  return number*2;
}
console.log(myPure(number));
myImpure();
console.log(myPure(number));

function myImpure (){
  number += 12;
}