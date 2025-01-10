"use strict";

var _loop = function _loop(i) {
  setTimeout(function () {
    return console.log(i);
  }, 1000 * i);
};

// Fix the following code so i remains block-scoped:
// for (var i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 1000);
// }
// Expected output: 0, 1, 2, 3, 4 (but prints 5, 5, 5, 5, 5)
for (var i = 0; i < 5; i++) {
  _loop(i);
} // for(var i = 0; i < 3; i++){
//   for(var j = 0; j < 3; j++){
//     for(var k = 0; k < 3; k++){
//       console.log(`i: ${i} j: ${j} k: ${k}`);
//     }
//   }
// }