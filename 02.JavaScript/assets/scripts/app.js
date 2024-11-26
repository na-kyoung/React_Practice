// # import/export
// 1. 변수 import
// import { apiKey } from "./util.js";
// import { abc, bcd } from "./util.js";
import { abc as a1, bcd as a2 } from "./util.js";

// 2. 값 import - 이름 할당 필수
// import apiKey from "./util.js";

// 3. 전체 import
// import * as utils from "./util.js";

// console.log(apiKey);
// console.log(utils.default);
// console.log(utils.abc);
// console.log(utils.bcd);
console.log(a1);
console.log(a2);

// # 디스트럭처링
// 1-1. 기존 배열 분해
// const userNameData = ["Max", "Schsalkdjlas"];
// const firstName = userNameData[0];
// const lastName = userNameData[1];

// 1-2. 배열 디스트럭처링
const [firstName, lastName] = ["Max", "Schsalkdjlas"];

console.log(firstName);
console.log(lastName);

// 2-1. 기존 객체 분해
// const user = {
//     name: "Max",
//     age: 34
// }
// const name = user.name;
// const age = user.age;

// 2-2. 객체 디스트럭처링
const {name: userName, age} = {
    name: "Max",
    age: 34
}

console.log(userName);
console.log(age);

// 3-1. 함수 매개변수
const order = {
    id: 2,
    currency: "USD"
}

function storeOrder(order) {
    localStorage.setItem('id', order.id);
    localStorage.setItem('currency', order.currency);
    console.log(order.id);
    console.log(order.currency);
    console.log(order.amount); // undefined
}
storeOrder(order);

// 3-2. 함수 매개변수 디스트럭처링
function storeOrder_dis({id, currency}) { // 디스트럭처링
    localStorage.setItem('id', id);
    localStorage.setItem('currency', currency);
    console.log(id);
    console.log(currency);
    // console.log(amount); // error
}
storeOrder({id: 5, currency: 'USD', amount: 15.99}); // 1개의 매개변수/값
storeOrder_dis({id: 5, currency: 'USD', amount: 15.99}); // 1개의 매개변수/값