"use strict";

function scope() {
  if (true) {
    var _a = 10; // block-scope

    var b = 20; // funciont-scope
  }

  try {
    console.log(a);
  } catch (e) {
    console.error("Error: ", e);
  }

  console.log(b);
} // console.log(b); // Error: b is not defined


scope();