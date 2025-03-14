// Primitives: number, string, boolean, null, undefined
// More complex type: arrays, objects
// Function types, parameters

// Primitives 기본 자료형
let age: number = 24; // 숫자형
age = 12;

let userName: string; // 문자형
userName = 'Kwon';

let isInstructor: boolean; // 불리언
isInstructor = true;

// More complex types
let hobbies1: string[]; // 문자열 배열
let hobbies2: number[]; // 숫자형 배열
let hobbies3: boolean[]; // 불리언 배열
hobbies1 = ['Sports', 'Cooking'];

// let person; // let person: any; - 아무것도 선언하지 않으면 any로 간주
// 객체
let person: {
  name: string;
  age: number;
};

person = {
  name: 'Max',
  age: 32
}

// 객체 배열
let people: {
  name: string;
  age: number;
}[];

// Type Inference
let course = 'React';
// course = 123; // error - Type Inference

// Union Types
let courses: string | number | boolean = 'NextJS';
courses = 123;
courses = false;

let pname: {
  name: string | string[];
  age: number | string;
};
pname = {
  name: ['kwon', 'na'],
  age: '20 years old'
};

// Type Aliases
type Person = {
  name: string;
  age: number;
};

let Person1: Person; // 타입 사용
Person1 = {
  name: 'kwon',
  age: 22
}

let Person2: Person[]; // 변형도 가능
Person2 = [{
  name: 'kwon',
  age: 22
}]

// Functions & Types
function add(a: number, b:number): number {
  return a + b;
}

function printOutput(value: any){
  console.log(value);
}

// Generics
const demoArray = [1, 2, 3]; // number[] 타입

function insertAtBeginning(array: any[], value: any){
  const newArray = [value, ...array];
  return newArray;
}

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3] - any[]
updatedArray[0].split(''); // 에러가 안남

function insertAtBeginning_Generics<T>(array: T[], value: T){
  const newArray = [value, ...array];
  return newArray;
}

const stringArray = insertAtBeginning_Generics(['a', 'b', 'c'], 'd'); // string[]
stringArray[0].split('');

const updatedArray_g = insertAtBeginning_Generics(demoArray, -1); // [-1, 1, 2, 3] - number[]
// updatedArray_g[0].split(''); // error

// Array<> : 배열 generic
// let numbers: number[] = [1, 2, 3];
let numbers: Array<number> = [1, 2, 3];