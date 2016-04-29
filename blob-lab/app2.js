// LAB: SORTING AND CAMPY SCI-FI

function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

function Blob() {};

var blob = new Blob();

Blob.prototype.eatingDowington = function() {
  var eatenCitizens = 0;
  for (var i = 0; i < 100; i++) {
    eatenCitizens += i;
    console.log('hour ' + i + ': eaten citizens: ' + eatenCitizens);
    if (eatenCitizens > 1000) {
      return i;
    }
  }
};

var hoursSpentInDowington = blob.eatingDowington();

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function (population, peoplePerHour) {
  var eatenCitizens = 0;
  if (population === 0) {
    return 0;
  }
  for (var i = peoplePerHour; i < population; i++) {
    eatenCitizens += i;
    // console.log('hour ' + i + ': eaten citizens: ' + eatenCitizens);
    if (eatenCitizens > population) {
      return i;
    }
  }
};

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

  //*********************************************************
  // PROBLEM 2: Universal Translator
  //*********************************************************

  // TODO: define a constructor that creates objects to represent
  // sentient beings. They have a home planet, a language that they
  // speak, and method (that you'll place on the prototype) called
  // sayHello.

  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor

  // TODO: say hello prints out (console.log's) hello in the
  // language of the speaker, but returns it in the language
  // of the listener (the sb parameter above).
  // use the 'hello' object at the beginning of this exercise
  // to do the translating
  // console.log(hello.this);

  // TODO: create three subclasses of SentientBeing, one for each
  // species above (Klingon, Human, Romulan).

  // TODO: write five more assertions, to complete all the possible
  // greetings between the three types of sentient beings you created above.

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

function SentientBeing (homePlanet, language) {
  this.homePlanet = homePlanet;
  this.language = language;
}

SentientBeing.prototype.sayHello = function(sb) {
  console.log('"' + hello[this.language] + '" from ' + this.homePlanet + ' to ' + sb.homePlanet);
  return (hello[sb.language]);
};

function Human(){}; //declare as empty objects
function Klingon(){};
function Romulan(){};

Human.prototype = new SentientBeing('Earth', 'federation standard');
Klingon.prototype = new SentientBeing('Klingon', 'klingon');
Romulan.prototype = new SentientBeing('Romulus', 'romulan');

assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');

var dan = new Human();
var katie = new Klingon();

assert((dan.sayHello(katie)) === 'nuqneH',
  'Katie should hear nuqneH');

// We'll look at your (possible variety of) solutions to the sorting problems
