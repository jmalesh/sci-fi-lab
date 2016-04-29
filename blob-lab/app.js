//
// var arrayOfBlobs = [];
// var firstHour = 0;
// var totalPopulation = 1000;
// var population = 0;
// var peoplePerHour = 1;
//
// function Blob(name,rate,persons) {
//   this.name = name;
//   this.consumeRate = rate;
//   this.personsComsume = persons;
//   arrayOfBlobs.push(this);
//   this.hoursToOoze = function hoursToOoze(population,peoplePerHour) {
//     for (i = 0; i < population ; i++ ) {
//       population = population - peoplePerHour;
//       peoplePerHour++;
//       firstHour++;
//     }
//     return firstHour;
//   };
// }
//
// var blob = new Blob('Blobert',1,1000);
// var newHours = 0;
//
// var hoursSpentInDowington = 0;
//
// function getHours() {
//   for (i = 0; i < totalPopulation; i++) {
//     totalPopulation = totalPopulation - peoplePerHour;
//     peoplePerHour++;
//     hoursSpentInDowington++;
//   }
//   console.log(hoursSpentInDowington);
//   return hoursSpentInDowington;
// };
//
// function assert(expression, failureMessage) {
//   if (!expression) {
//     console.log('assertion failure: ', failureMessage);
//   }
// };

// assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
// assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
// 'hoursSpentInDowington should match hoursToOoze\'s result for 1000');
var stringArray = ['forest', 'elephant', 'dog', 'cat', 'bat', 'apple'];
var reverseArray = [];
String.prototype.reverse = function() {
  return this.split('').reverse().join('');
};

for (i = 0; i < stringArray.length; i++) {
  var ctx = stringArray[i];
  reverseArray.push(ctx.reverse());
}

console.log(reverseArray.sort());


//reverseArray.push(stringArray.forEach(reverse()));
// var str = 'this is a good example for string reverse';
// str.reverse();
// -> "esrever gnirts rof elpmaxe doog a si siht";

function lastLetterSort(stringArray) {
  function byLastLetter(b, a) {
    //TODO: Sort the strings in alphabetical
    // order using their last letter
    // Read this about how the sort function works:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // this byLastLetter function is a "compare function"
    // And check out the "comparing strings" section  here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
  }
  console.log(stringArray.sort());
}

// function printDetailsToConsole(arrayElement, index, array) {
//   console.log(arrayElement + ' is the individual element');
//   console.log(index + ' is where the element is in the array');
//   console.log(array + ' is the array');
//   console.log('+++++++++++++');
// }
//
// stringArray.forEach(printDetailsInConsole);
