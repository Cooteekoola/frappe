// function firstLetterCaps(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// let str = "урок-3-был слишком легким";
//     str = firstLetterCaps(str);
// console.log(str);

// let newStr = str.replace(/-/gi, " ");
// console.log(newStr);

// let superNewStr = [];
// superNewStr.push(newStr);

// let arr1 = newStr.split(" ");
// console.log(arr1);

// let easy = arr1[4],
//     lastEasy = easy.split("");
//     lastEasy.splice(4, 5, "о", "о")
// console.log(lastEasy);



// let arr = [20, 33, 1, "Человек", 2, 3],
//     removed = arr.splice(arr.indexOf("Человек"), 1);
//     sum = 0;
// console.log(arr);
// console.log(removed);

// for(let i=0; i < arr.length; i++) {      
//     sum += Math.pow(arr[i], 3);    
// }

// console.log(Math.sqrt(sum));


function newFunction (x) {
  if (typeof(x) != "string") {
    console.log("Это не строка");    
  } else {
    x = x.trim(); 
    if (x.length > 50) {
      x = x.substring(0, 50) + "...";
    }
  } 
  console.log(x);
}



newFunction("     Текст из 50 символов (одно слово - в среднем 6 символов) написан с использованием арабского алфавита мощностью 28 символов. Определить информационный объем текста в битах. Считать, что при наборе текста выбор любого из 28 символов равновероятен.");