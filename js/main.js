// var num;
// num = 5;

// var num = 5;
// console.log("Переменная: " + num);

// var num_1 = 7;
// var num_2 = 10;
// console.log(num_1);

// var numb = 13;
// if(numb > 14 && numb == 13){
//     console.log("+");
// }
// else {
//     console.log("-");
// } 

// var chtoto = 16;
// switch(chtoto){
//     case 16:
//         console.log("Yes");
//         break;
//     default:
//         console.log("no");
// }

// var array = [1, 4, 6, 100];
// console.log(array[3]);
// console.log(array.len);

// var matrix = [
//     [1, 4, 26, 100], [12, 5, 6, 4], [1, 0, -1, 3]
// ];
// console.log(matrix[2] [1]);

// for (let i = 1; i < 20; i +=1) {
//     console.log(i);
// }

// let j = 10;
// while (j<100) {
//     console.log(j);
//     j++;
// }

// let x = 100;
// do {
//     x+=1;
//     console.log(x);
// } while (x<50);

// for (let index = 1; index < 12; index++) {
//     if (index %5 == 0) 
//     continue;   
//     console.log(index);
// }

// var array = [1, 4, 6, 100];
// for (let index = 0; index < array.length; index++) {
//     if (index %2 == 0) 
//         continue;
//     console.log("Номер элемента " + (index + 1) + ": " + array[index]);
// }


// for (let index = 0; index < 3; index++) {
//     confirm("Подтвердить?");
// }

// var winw = confirm ("Подтвердить?");
// if (winw == true) {
//     alert("good job");
// }   else if (winw == false) {
//     alert("not gj");
// }


// var win = prompt ("Введите возраст:");
// if (win < 18) {
//     alert("Stop!");
//     console.log(win);
// }   else if(win == null){
//     alert("Введите возраст");
// }   else {
//     alert("go on");
// }

// let userName = "Вася",
// user = userName;
// console.log(user);

// let userage = 18;
// let userinfo = `Возраст ${userage}`;
// console.log(userinfo);

// let uss = 145 / 0;
// console.log(uss);

// let ttt;
// console.log(typeof ttt);


// let iii = "45" / "5";
// console.log(iii);

// console.log(- "35" + - "22");

// let abc = 557;
// console.log('558' > abc++);

// let acc = 0;
// let bbb = acc++;
// console.log(bbb);

// console.log('12' && 0 || '2');

// console.log("1" == 1);


// let mass = (92 > '11' && 58 < 100) ? 'Истина' : "Ложь";
// console.log(mass);


// if (0) {
//     console.log("Ложь");
// } else if (" ") {
//     console.log("Истина");
// }



// ЦИКЛЫ!!!!


// let nnnt = 60;
// i = 0;
// while (i < nnnt) {
//     console.log(i);
//     i ++;
// }


// for (i = 0; i <=5; i++) {
//     if (i == 0) continue;
//     console.log(i);
// }


// let num = 8;
// while (num) {
//     console.log(num);
//     num--;
// }


// let num = 0;
// while (num < 3) {
//     console.log(`Число: ${num}`);
//     num++;
// }


// cycle1: for (let num = 0; num < 4; num ++) {
//     for (let size = 0; size < 4; size++) {
//         if (size == 2) {
//             continue cycle1;
//         }
    // console.log(size);    
//     }
// }


// let result = 2;
// let number = 4;
// result *= number;
// console.log(result);    


// ФУНКЦИИ !!!


// function showName() {
//     console.log("Вася");
// }
// setTimeout (showName, 0);
// showName();
// console.log("Коля");


// showMessage();
// function showMessage() {
//     console.log('сообщение');
// }


// showMessage();
// let showMessage = function() {
//     console.log('сообщение');
// }


// 'use strict'
// let abc;
// if (2 > 1) {
//     abc = function showMessage() {
//         console.log('сообщение');
//     }
// }
// abc();



// Объекты!!!!



// const userInfo = {
//     name: "Вася",
//     age: 30
// }
// console.log(userInfo.name);


// const userInfo = {
//     name: "Вася",
//     age: 30,
//     "58": "значение свойства",
// }
// console.log(userInfo[58]);


// let userInfo = {
//     name: "Вася",
//     age: 30,
// }
// let user = userInfo;
// user.age = 45;
// console.log(userInfo.age);


// let userInfo = {
//     name: "Вася",
//     age: 30,
//     showInfo() {
//         console.log(`${this.age}`);
//     }
// }
// let user = userInfo;
// user.age = 25;
// user.showInfo();


// let userInfo = {
//     name: "Вася",
//     age: 30,
// }
// for (const key in userInfo) {
//     const value = userInfo[key];
//     console.log(key);
//     console.log(value);
// }


// let userInfo = {
//     name: "Вася",
//     age: 30,
//     address: {
//         city: "ggrgrgr",
//     }
// }
// for (const key in userInfo.address) {
//     console.log(userInfo.address[key]);
// }


// const userInfo = {
//     name: "Вася",
//     age: 30,
//     "likes js": true,
// }
// console.log(userInfo["likes js"]);


// let userInfo = {
//     name: "Вася",
//     age: 30,
// }
// userInfo.name = "Лена";
// console.log(userInfo.name + " " + userInfo.age);
// delete userInfo.name;
// console.log(userInfo.name + " " + userInfo.age);


// if (25 + "dddd" !== NaN) {
//     console.log("нан");
// }


// ЧИСЛА !!!

// let sNum = 1.005 + Number.EPSILON;
// let numOne = Math.round(sNum * 100) / 100;
// console.log(numOne);


// let value = "135.58px";
// console.log(parseInt(value));


// let value = "dddd" + 35;
// if (isNaN(value)) {
//     console.log('Результат выражения NaN');
// }


// let mat = Math.max(10, 58, 39, -150, 0);
// console.log(mat);


// let number = 58.858;
// console.log(Math.floor(number));


// STRING!!!


// let fls = "фрилансер";
// console.log(`Привет, я ${fls}`);


// let  text = "фрилансер";
// console.log(text[5]);


// let text = "фрилансер";
// console.log(text.toUpperCase());


// let text = "фрилансер";
// console.log(text.slice(3, 6));


// let text = "фрилансер";
// console.log(text.includes("лан", 2));


// Массивы!!!


let arr = [
    { name: 'Вася', age: 36 },
    { name: 'Коля', age: 18 },
    { name: 'Оля', age: 12 },
];
let resultOne = arr.find(function(item, index, array) {
    return item.age == 18;
});
console.log(resultOne);