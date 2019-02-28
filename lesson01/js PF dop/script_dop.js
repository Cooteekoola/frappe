let num = 33721,
    res = ((num.toString().split("").reduce((accumulator, currentValue) => +accumulator * +currentValue)) ** 3).toString();

alert(res.substr(0, 2));