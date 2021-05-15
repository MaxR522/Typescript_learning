"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Test import
const test_1 = __importDefault(require("./test"));
// Assign types to variables by assigning value
let num1 = 24; // <-- We can't re-assign this variable with values of different type like string or boolean
let str1 = 'string only';
// Assign types to a variable by declaring the type
let num2;
let str2;
let bool;
let notDefined;
let empty;
let emptyFunc; // usually used in function that return null or undifined
let wathever; // no type, can assign all types of value
let never; // a value that can never occur
let anonymous; // unknown type
let bonPrimitive; // Non primitive value
// Literal types (Can only be re-assigned by these defined values)
let numbers;
let MyName;
// myName = 'John'; <-- False because it is not one of the defined types
// Using inion
let numOrStr; // <-- This variable can only contain number or string
// Assign types to arrays
// Method 1
let arrNum;
let arrStr;
let arrBool;
let arrAny;
// Method 2
let arrNum2;
let arrStr2;
let arrBool2;
let arrAny2;
// Array union
let arrNumOrStr;
let arrNumOrStr2;
let user1 = {
    id: 0,
    name: 'mario',
    age: 24,
    isActive: true,
};
// Classes
// When using the class keyword in TypeScript, you are actually creating two things with the same identifier:
//     A TypeScript interface containing all the instance methods and properties of the class; (Felds)
//     A JavaScript variable with a different (anonymous) constructor function type
class Singer {
    // constructor
    constructor(name, age, isAlive) {
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
// Function
const sayMyName = (name) => {
    console.log(`Hello ${name}`);
    // return 5; <-- return false because function is supposed to return void not number
};
// default parameter
const addition = (x, y = 5) => {
    // Must return number
    console.log(x + y);
    return x + y;
};
// optional parameter
const helloWorld = (name) => {
    if (name) {
        return `Hello ${name}`;
    }
    return `Hello world`;
};
// Tuples: fixed lengths arrays, and each element can have a different type
// Enums: create a collection of object that we can use by name
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["VISITOR"] = 2] = "VISITOR";
})(Role || (Role = {}));
const person1 = {
    id: 0,
    name: 'Mario',
    tasks: ['dev', 6],
    role: Role.ADMIN,
};
// Promise
// we can provide the data type of the value returned when promise fulfills.
// the error returned by the promise can take any shape, the default data type of value returned when the promise is rejected is set to any by the TypeScript.
// Return random integer between 0 and 9
const getRamndomInt = () => {
    return (Math.random() * 10).toFixed(0);
};
const findEven = new Promise((resolve, reject) => {
    setTimeout(() => {
        const value = parseInt(getRamndomInt());
        if (value % 2 == 0) {
            resolve(value); // <-- resolve if even
        }
        else {
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
const fetchJockes = () => __awaiter(void 0, void 0, void 0, function* () {
    const jockes = yield fetch('https://official-joke-api.appspot.com/jokes/ten').then((value) => value.json());
    return jockes;
});
// Consuming promise
fetchJockes()
    .then((value) => {
    console.log(value);
    return value;
})
    .catch((err) => console.log(err));
// Test import
test_1.default();
