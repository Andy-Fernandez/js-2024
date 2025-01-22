"use strict";

// 1.
var string = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
var count = string.match(/love/gi);
console.log(count.length); // 2.

string = 'You cannot end a sentence with because because because is a conjunction';
console.log(string.match(/because/gi).length); // 3.

var sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
console.log(sentence.replaceAll(/[^a-zA-Z0-9 .,!?]/g, '')); // U can select 'complemet' using '^' in your replaceAll set
// 4.