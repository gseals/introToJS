console.log('FUNctions');

// const fancyFunction = (something) => {
//     return something + 'fancy';
// }

// let output = fancyFunction('michael is ');
// console.log(output);

// output = 'something else';

// let firstName = 'George';
// let lastName ='Weasley';

// console.log('${firstName) + ${lastName}');

// let firstName = 'Bill';
// let lastName = 'Weasley';

// console.log('${firstName) + ${lastName}');

// let firstName = 'Ginny';
// let lastName = 'Weasley';

// console.log('${firstName) + ${lastName}');

// const sayMyName = (first, last) => {
//     //do something
//     return `${first} ${last}`;
// }
// console.log(sayMyName('Marco', 'Polo'));

// NUGGET TIME

// const nuggetizer = (animal) => {
//     return `nugget ${animal}`;
// }

// const humaneNuggetizer = (animal) => {
//     return animal;
// }

// const spamFactory = (literallyAnything) => {
//     return `Spam (lunch)`;
// }

// console.log(nuggetizer('chicken'));
// console.log(nuggetizer('octopus'));
// console.log(nuggetizer('john wark'));

// console.log(humaneNuggetizer('chicken'));
// console.log(humaneNuggetizer('octopus'));
// console.log(humaneNuggetizer('john wark'));

// console.log(spamFactory('octopus'));
// console.log(spamFactory('chicken'));
// console.log(spamFactory('john wark'));

let bandNumber = 1

const printToDOM = (toPrint) => {
    document.getElementById('output').innerHTML += toPrint
}
// printToDOM('Gabriel');

const takeNumber = (bandName) => {
  /*
    Write your awesome code here. See comments
    below for what should be returned.
  */
    printToDOM(`<h3>${bandNumber++}) ${bandName}</h3>`);
// you should already have this function written from the class lecture
};
takeNumber("Galactic Scum"); // This should display "1. Galactic Scum" in the DOM
takeNumber("Underdogs"); // This should display "2. Underdogs" in the DOM

// strings: anything within quotation marks
'3'
'1 + 2'
'[1, 2]'

