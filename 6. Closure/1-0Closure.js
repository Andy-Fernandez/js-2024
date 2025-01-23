// function outerFunction(){
//   let outerVariable = "Hi I'm outerviabel";
//   function innterFuntion(){
//     console.log(outerVariable);
//   }
//   return innterFuntion;
// }

function outerFunction(){
  let outerVariable = "Hi I'm outerviabel";
  return () => console.log(outerVariable);
}

outerFunction()();

let closureFuntion = outerFunction();
closureFuntion();

// ##############################

// function counterFuntion(){
//   let counter = 0
//   function addToCounter(num = 0){
//     counter += num;
//     console.log(counter);
//   }
//   return addToCounter;
// }

function counterFuntion(){
  let counter = 0
  return (num = 0) => {
    counter += num;
    console.log(counter);
  }
}

let myCouter = counterFuntion();
myCouter(1);
let mySecondCouter = counterFuntion();
myCouter(2);
mySecondCouter(10);
myCouter(1);
mySecondCouter(1);

// ##############################

function grating(){
  let name = "";
  function setAndSay(newName = stranger){
    console.log(`Last name ${name}.`);
    name = newName;
    console.log(`Hi ${name}, your name is the new name.`)
  }
  return setAndSay;
}

let nameFuntions = grating();
nameFuntions('Alvaro');
nameFuntions('Denis');