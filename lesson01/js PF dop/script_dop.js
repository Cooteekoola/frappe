let num = [3, 3, 7, 2, 1];
let sum = (accumulator, currentValue) => accumulator + currentValue;
console.log(num.reduce(sum));

// let num = '33721';
// let x = +num[0] * +num[1] * +num[2] * +num[3] * +num[4];

// console.log(x);

let z = num.reduce(sum) ** 3;
console.log(z);

let n = z.toString();
console.log(typeof(n));

alert(n[0]+n[1]);