
console.log("JS LOADED 2");
let person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };

console.log(person.name)

console.log("another way" , person['name'])


//
 function greet(name) {
  return "Hello, " + name + "!";
}
const data = greet("RAM");
console.log(data);

const square = function(x) {
    return x * x;
  };


console.log(square(5));

const anonymousFunc1 = () => {
    console.log("I don't have a name");
  };
  
  // Anonymous function (single line)
const anonymousFunc2 = () => console.log('Single line');

anonymousFunc1()
anonymousFunc2()

const  numbers = [1,2,3,4,5];

numbers.forEach((num) => {
    console.log(num);
  });

const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); 


// Object with properties
const person_object = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    city: 'New York'
  };
  
  // Destructuring assignment
  const { firstName, lastName, age, city } = person_object;
  
  const firstNamea = person_object.firstName;
  const firstNameb = person_object['firstName'];
  console.log(firstName); // Output: John
  console.log(lastName);  // Output: Doe
  console.log(age);       // Output: 30
  console.log(city);      // Output: New York