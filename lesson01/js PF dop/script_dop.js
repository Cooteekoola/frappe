let num = 33721,
    res = num.toString().split(""),
    sum = (accumulator, currentValue) => +accumulator * +currentValue,
    z = res.reduce(sum) ** 3,
    n = z.toString();

console.log(res);
console.log(res.reduce(sum));
console.log(z);
console.log(typeof(n));

alert(n.substr(0, 2));