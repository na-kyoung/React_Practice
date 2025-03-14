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