// Predict the output of the following code:

function scopeTest() {
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }
  try{
    console.log(a); // 1
  }catch(e){
    console.error(e.messege);
  }
  try{
    console.log(b); // ReferenceError
  }catch(e){
    console.error(e.messege);
  }
  try{
    console.log(c); // ReferenceError
  }catch(e){
    console.error(e.messege);
  }
}
scopeTest();
