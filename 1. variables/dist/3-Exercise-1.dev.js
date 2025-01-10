"use strict";

// Predict the output of the following code:
function scopeTest() {
  if (true) {
    var a = 1;
    var _b = 2;
    var _c = 3;
  }

  try {
    console.log(a); // 1
  } catch (e) {
    console.error(e.messege);
  }

  try {
    console.log(b); // ReferenceError
  } catch (e) {
    console.error(e.messege);
  }

  try {
    console.log(c); // ReferenceError
  } catch (e) {
    console.error(e.messege);
  }
}

scopeTest();