//1.
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

let [,ana,] = empleados;

// 2.
let [{ email: emailLuis }] = empleados;

// 3.
// Inicialmente
let a = 5;
let b = 3;
[b, a] = [a, b];

// 4.
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };

const {today: maximaHoy} = HIGH_TEMPERATURES;
const {tomorrow: maximaManana} = HIGH_TEMPERATURES;

// 5.
function sumEveryOther(...numbers) {
    return numbers.reduce((acc, value) => acc + value, 0);
}

// 6.
function addOnlyNums(...args) {
    return args.filter(num => typeof num == 'number').reduce((acc, v) => acc + v);
}

// 7.
function countTheArgs(...args) {
    return args.length;
}

// 8.
function combineTwoArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

// 9.
function onlyUniques(...num) {
    return num.filter((value, index, arr) => arr.indexOf(value) == index);
}

// 10.
function combineAllArrays(...arr) {
    let array = [];
    arr.map(v => array.push(...v));
    return array;
}

// 11.
function sumAndSquare(...numbers) {
    return numbers.reduce((a, b) => a + b**2, 0);
}
