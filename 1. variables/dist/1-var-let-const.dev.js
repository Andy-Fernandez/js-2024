"use strict";

function testVar() {
  console.log(a); // undefined (hoisted)

  var a = 10;
  console.log(a); // 10
}

testVar(); // Something I gess is conffuise is var doesnt give an specifi eror
// just seys 'undefined' and continuos.

function testLet() {
  try {
    console.log(a);
    var a = 10;
    console.log(a);
  } catch (e) {
    console.error("Error: ", e.message);
  } finally {
    console.log("Let work like that.");
  }
}

testLet();