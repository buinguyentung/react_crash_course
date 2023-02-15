// Primitive: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number;
age = 12;
// age = '12'; //ERROR

let userName: string;
userName = 'Tung';
// userName = 1; //ERROR

let isPro: boolean = true;
// isPro = 1; //ERROR

let jobs: string[];
jobs = ['Reporter', 'Engineer'];
// jobs = [1, 'Pilot']; //ERROR

let person: any;
person = {
  name: 'Tung',
  age: 32
};

let person2: {
  name: string;
  age: number;
};
// person2 = {
//   address: 'Hanoi' //ERROR
// }

let persons: {
  name: string;
  age: number;
}[];

let course: string | number = 'ReactJS course';
course = 12;
// couse = true; //ERROR

type Person = {
  name: string;
  age: number;
}

let employee: Person;
employee = {
  name: 'Tung',
  age: 32
};
let employees: Person[];

// Functions & types
function add(a: number, b: number): string {
  return (a+b).toString();
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArr = [value, ...array];
  return newArr;
}
const demoArr = [1, 2, 3];
const updatedArr = insertAtBeginning(demoArr, 0);
// updatedArr[0].split(''); //ERROR because array element is number

const demoArr2 = ['b', 'c'];
const updatedArr2 = insertAtBeginning(demoArr2, 'a');
updatedArr2[0].split('');


