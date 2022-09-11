// 1. syntex Error

// console.log(5;
// function add()){

// }
// Let x = 10;
// cont y = 7;


// 2. Type Error
let address;
// console.log(address);
// console.log(address.length);

const people = 5;
// people();


// 3. Reference Error

function add(a, b) {
    const result = a + b;
    return result;
}
// console.log(result);

if (true) {
    // console.log(time);
    const time = 11;
}

const persons = {
    name: 'Robi bar'
};
console.log(persons);
// persons.map(a=>console.log(a))