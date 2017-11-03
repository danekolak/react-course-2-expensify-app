// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Philadelphia',
//     temp: 92
//   }
// };

// const { name: firstname, age } = person;
// const { city, temp: temperature } = person.location;


// console.log(`${firstname} is ${age}. It's ${temperature} in ${city}`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     //name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);


// Array destructuring

const address = [];
const [, , state = 'New York'] = address;
console.log(`You are in ${state}.`);

const coffeItem = [];
const [item1 = 'Coffee (hot)', item2 = '$2.00', item3 = '$2.50', item4 = '$2.75'] = coffeItem;
console.log(`A medium Coffee (hot) costs ${item3}`);

const color = ['yellow', 'green', 'blue', 'black', 'red'];
const [, two, three, , five] = color;
console.log(`my favourites colors are ${three}, ${two} and other ${color[0]}`);

const coffee = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [a, b, c, d] = coffee;
console.log(`Medium Coffee of ${a} is ${c}`);
