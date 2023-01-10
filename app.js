console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function arraySum(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  })
  return sum;
}

let numbers = [2, 22, 12, 17, 18, 39, 129]
console.log(arraySum(numbers))

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

const book = {
  title: 'Into The Wild',
  author: 'Jon Krakauer',
  pages: 125,
  readCount: 3,
  info() {
    return (`${this.title} by ${this.author}, ${this.pages} pages, read ${this.readCount} times`)
  }
}
console.log(book.info())

// //EXERCISE 3 SECTION

let sentence = "The quick brown fox jumps over the lazy dog";
let words = sentence.split(" ");
console.log(words);
console.log("5th item", words[5]);
let result = [];

for (let i = 0; i < words.length; i++) {
  let letters = words[i].split("");
  console.log(letters.slice());

  lettersReversed = letters.reverse();

  lettersJoined = lettersReversed.join("");

  result.push(lettersJoined);
}

const finalSentence = result.join(" ");

console.log(finalSentence);

// let reversedWords = words.map((word) => word.split("").reverse().join(""));
// let reversedSentence = reversedWords.join(" ");
// console.log(reversedSentence);

// //EXERCISE 4 SECTION

function parseCSV() {
  
}

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
console.log(csvData);

const rows = csvData.split("\n");
console.log(rows);

headers = rows[0].split(",");
console.log(headers);

const resultArray = [];

for (i = 1; i < rows.length; i++) {
  const valuesArray = rows[i].split(",");
  console.log(valuesArray);

  const dataObject = {
    name: valuesArray[0],
    age: valuesArray[1],
  };

  resultArray.push(dataObject);
}

console.log(resultArray);

// FUNCTION WAY to do #4

// function parseCSV(startingData){
//   const rows = startingData.split("\n");
//   const headers = rows[0].split(",");
//   const resultArray = [];
  
//   for (let i = 1; i < rows.length; i++){
//       const valuesArray = rows[i].split(",");
//       const dataObject = {
//           [headers[0]]: valuesArray[0],
//           [headers[1]]: valuesArray[1]
//       };
//       resultArray.push(dataObject);
//   }
  
//   return resultArray;
// }

//OTHER WAY TO SOLVE #4

// let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

// const rows = csvData.split("\n");
// const keys = rows[0].split(",");
// const data = rows.slice(1).map((row) => {
//   const values = row.split(",");
//   return values.reduce((obj, value, index) => {
//     obj[keys[index]] = value;
//     return obj;
//   }, {});
// });

// const dataObject = data.reduce((obj, item) => {
//   obj[item.name] = item;
//   return obj;
// }, {});

// console.log(dataObject);

//practicing

// const numbers = [5, 7, 6, 3, 1];

// const total = numbers.reduce((currentValue, numbers) => {
//   return numbers + currentValue;
// }, 0);

// console.log(total);
