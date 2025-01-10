"use strict";

function testVar() {
  console.log(a); // undefined (hoisted)

  var a = 10;
  console.log(a); // 10
}

testVar();