console.log("Hello JS Objects!\n==========\n");


//- Write a function that takes an array of numbers as a parameter and returns the sum value of each number in the array.// 
//(i.e. write a custom Array.prototype.reduce() function).//

console.log("EXERCISE 1: Array Sum\n==========\n");
const numbersArray = [2, 22, 12, 17, 18, 39, 129];//example array from the exercise prompt//

function arraySum(numbers) {
    let sum = 0;

    numbers.forEach((value) => {
      sum += value;
    });  
    return sum;
  }
let sum1 = arraySum(numbersArray);
let sum2 = arraySum([2, 3, 4, 7, 12, 16, 25, 56, 79]); 
console.log(sum1, sum2);

console.log("EXERCISE 2: Fave Book\n==========\n");

let book = {
    title: "Lolita",
    author: "Vladimir Nabokov",
    pages: 336,
    readCount: 3,
    info: function () {
        return `${this.title} by ${this.author} is ${this.pages} page(s) long, and has been read ${this.readCount} time(s).`;
    },
};

console.log(book.info());

console.log("EXERCISE 3: Reverse a String (The word *Palindrome*) \n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";

function reverseString(str) {
    var splitString = str.split(""); // var splitString = "palindrome".split("");
    // ["p", "a", "l", "i", "n", d", "r", "o", "m", "e"]

    var reverseArray = splitString.reverse(); // var reverseArray = ["p", "a", "l", "i", "n", d", "r", "o", "m", "e"].reverse();
    // ["e", "m", "o", "r", "d", "n", "i", "l", "a", "p"]

    var joinArray = reverseArray.join(""); // var joinArray = ["e", "m", "o", "r", "d", "n", "i", "l", "a", "p"].join("");
    // "emordnilap"
    return joinArray; // "emordnilap"
}

console.log(reverseString("Palindrome"));
console.log(reverseString(sentence));

console.log("EXERCISE 4: Parse a Comma Separated Value\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

console.log(csvData);

function ParseCSV(input) {
    let dataArr = input.split("\n"); 
    let headers = dataArr[0].split(","); 
    let records = dataArr.slice(1);
  
    console.log(headers, records);
  
    let CSV = records.map(function (record) {
      let values = record.split(","); // "Frodo,50" -> ["Frodo", "50"]
      let obj = {};

      headers.forEach(function (header, index) {
        obj[header] = values[index];
      })
  
      return obj;
    })
  
    return CSV;
  }
  
  let result = ParseCSV(csvData);
  console.log(result);

