// 4.
let funnyStrings = [
  "I'm not arguing, I'm just explaining why I'm right.",
  "I told my computer I needed a break, and now it won't stop sending me Kit-Kats.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "I’m on a seafood diet. I see food and I eat it.",
  "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "I asked the librarian if the library had any books on paranoia. She whispered, 'They’re right behind you.'",
  "Why don’t some couples go to the gym? Because some relationships don’t work out."
];

const isInString = (string, word) => string.toLowerCase().includes(word.toLowerCase());
const searchWord = "I'm";
console.log(funnyStrings.filter(string => isInString(string, searchWord)));