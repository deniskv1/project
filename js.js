// function showFirstMessage(text) {
//     alert(text);
// }

// showFirstMessage("privet");

// function calc(a, b) {
//     return (a + b);
// }

// let calc = (a, b) => a + b;

// console.log(calc(4, 3));

// function retVar() {
//     let num = 50;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// let str = "test";
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = "12.2px";
// //console.log(Math.round(twelve));
// console.log(parseFloat(twelve));

// let options = {
//     widht: 1024,
//     height: 1024,
//     name: "test"
// };

// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// };

// delete options.bool;

// console.log(options);

// for (let key in options) {
//     console.log('Свойстыо ' + key + ' имеет значение ' + options[key]);
// }

// console.log(Object.keys(options).length);

// let arr = ["first", 2, 3, "four", 5];

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + ' ( массив: ' + mass + ')');
// });

// console.log(arr);

// let mass = [1, 3, 4, 6 ,7];
// for (let key of mass) {
//     console.log(key);
// }

let answer = prompt("", ""),
    arr = [];

arr = answer.split(',');
console.log(arr);