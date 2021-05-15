// Test import
import func from './test';

/******************************************************************
 *                                                                 *
 *                           VARIABLES                             *
 *                                                                 *
 *******************************************************************/

// Assign types to variables by assigning value
let num1 = 24; // <-- We can't re-assign this variable with values of different type like string or boolean
let str1 = 'string only';

// Assign types to a variable by declaring the type
let num2: number;
let str2: string;
let bool: boolean;
let notDefined: undefined;
let empty: null;
let emptyFunc: void; // usually used in function that return null or undifined
let wathever: any; // no type, can assign all types of value
let never: never; // a value that can never occur
let anonymous: unknown; // unknown type
let bonPrimitive: object; // Non primitive value

// Literal types (Can only be re-assigned by these defined values)
let numbers: 1 | 2 | 3 | 4;
let MyName: 'Mario' | 'Ranja';

// myName = 'John'; <-- False because it is not one of the defined types

// Using inion
let numOrStr: number | string; // <-- This variable can only contain number or string

/******************************************************************
 *                                                                 *
 *                           ARRAYS                                *
 *                                                                 *
 *******************************************************************/

// Assign types to arrays
// Method 1
let arrNum: number[];
let arrStr: string[];
let arrBool: boolean[];
let arrAny: any[];

// Method 2
let arrNum2: Array<number>;
let arrStr2: Array<string>;
let arrBool2: Array<boolean>;
let arrAny2: Array<any>;

// Array union
let arrNumOrStr: (number | string)[];
let arrNumOrStr2: Array<number | boolean>;

/******************************************************************
 *                                                                 *
 *                           OBJECTS                               *
 *                                                                 *
 *******************************************************************/

// Interface is a structure that defines the syntax for object to follow
interface User {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
  adress?: string; // <-- ? mean optional value here
}

let user1: User = {
  id: 0,
  name: 'mario',
  age: 24,
  isActive: true,
};

/******************************************************************
 *                                                                 *
 *                           CLASSES                               *
 *                                                                 *
 *******************************************************************/

// When using the class keyword in TypeScript, you are actually creating two things with the same identifier:
//     A TypeScript interface containing all the instance methods and properties of the class; (Felds)
//     A JavaScript variable with a different (anonymous) constructor function type

class Singer {
  // Fields
  // field declaration creates a public writeable property on a class
  // Fields may be prefixed with the readonly modifier. This prevents assignments to the field outside of the constructor.
  readonly name: string;
  age: number;
  // isAlive: boolean | undefined; OR
  isAlive?: boolean;

  // constructor
  constructor(name: string, age: number, isAlive?: boolean) {
    this.name = name;
    this.age = age;
    this.isAlive = isAlive;
  }
}

const singer1 = new Singer('Jackson', 65);

// singer1.name = "Mario"; <-- False because field name is read only
singer1.age = 24;
singer1.isAlive = false;
console.log(singer1);

/******************************************************************
 *                                                                 *
 *                           FUNCTIONS                             *
 *                                                                 *
 *******************************************************************/

// Function
const sayMyName = (name: string): void => {
  console.log(`Hello ${name}`);
  // return 5; <-- return false because function is supposed to return void not number
};

// default parameter
const addition = (x: number, y: number = 5): number => {
  // Must return number
  console.log(x + y);
  return x + y;
};

// optional parameter
const helloWorld = (name?: string): string => {
  if (name) {
    return `Hello ${name}`;
  }
  return `Hello world`;
};

/******************************************************************
 *                                                                 *
 *                        TUPLES AND ENUMS                         *
 *                                                                 *
 *******************************************************************/

// Tuples: fixed lengths arrays, and each element can have a different type
// Enums: create a collection of object that we can use by name

enum Role { // <-- enum
  ADMIN,
  USER,
  VISITOR,
}

interface Person {
  id: number;
  name: string;
  tasks: [string, number]; // <-- Tuple
  age?: number;
  role: Role;
}

const person1: Person = {
  id: 0,
  name: 'Mario',
  tasks: ['dev', 6],
  role: Role.ADMIN,
};

/******************************************************************
 *                                                                 *
 *                            PROMISES                             *
 *                                                                 *
 *******************************************************************/

// Promise
// we can provide the data type of the value returned when promise fulfills.
// the error returned by the promise can take any shape, the default data type of value returned when the promise is rejected is set to any by the TypeScript.

// Return random integer between 0 and 9
const getRamndomInt = (): string => {
  return (Math.random() * 10).toFixed(0);
};

const findEven = new Promise<number>((resolve: any, reject: any) => {
  setTimeout((): void => {
    const value = parseInt(getRamndomInt());
    if (value % 2 == 0) {
      resolve(value); // <-- resolve if even
    } else {
      reject('Odd number found'); // <-- reject if Odd
    }
  }, 1000);
});

// Listen to promise resolution
// findEven
//   .then((value: number): number => {
//     // if resolve
//     console.log('resolved');
//     return value;
//   })
//   .catch((err: any): string => {
//     // catch error if reject
//     console.log(err);
//     return `Error`;
//   });

// Async await
const fetchJockes = async (): Promise<any[]> => {
  const jockes = await fetch(
    'https://official-joke-api.appspot.com/jokes/ten'
  ).then((value) => value.json());
  return jockes;
};

// Consuming promise
fetchJockes()
  .then((value: any): any[] => {
    console.log(value);
    return value;
  })
  .catch((err: any): void => console.log(err));

// Test import
func();
