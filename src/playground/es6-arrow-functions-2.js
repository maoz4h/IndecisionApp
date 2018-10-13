// arguments obect - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1));

// this keyword - no longer bound

const user = {
  name: 'Andrew',
  cities: ['Ph', 'NY', 'DU'],
  printPlacedLived () {
        return this.cities.map((city) => this.name + 'has lived in ' + city + '!');
        //'this' is being rebinded in ES5 functions, therefore it is related to 'const user' context
        //console.log(this.name);
        //console.log(this.cities);
        /*
        this.cities.forEach((city) => {
        //'this' is not being rebinded in arrowfunctions, therefore it is related to the parent context
        console.log(this.name + ' has lived in ' + city);
        });
        */
    }
};
//console.log(user.printPlacedLived());

// Chellenge

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    } 
};

console.log(multiplier.multiply());