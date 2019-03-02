// let week = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];
//   for (let i=0; i < 7; i++) {
//     if ((i == 5) || (i == 6)) {
//        document.body.innerHTML += '<b>' + week[i] + '</b>' + '<br>';
//     } 
//       else if (i==4) {
//       document.body.innerHTML += '<i>' + week[i] + '</i>' + '<br>';
//     }
//     else {
//       document.body.innerHTML += week[i] + '<br>';
//     }
//   }

// console.log(week[i]);
// alert(week);



let arr = [];
arr.push("5444", "35", "79", "750", "570", "320", "13");

for (let i = 0; i < arr.length; i++ ) {
  if (arr[i].substr(0,1) == 3) {
      console.log(arr[i]);
} else if (arr[i].substr(0,1) == 7) {
  console.log(arr[i]);
}
}






