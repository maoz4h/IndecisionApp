var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = '`Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

//  (var is function scoped)
//  let and const are Block Scoped:

const fullName = 'Maoz Heiferman';
let firstName;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log('firstName', firstName);
}

console.log('firstName', firstName);

