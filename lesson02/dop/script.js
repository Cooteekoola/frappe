// let week = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];
//   for (let i=0; i < week.length; i++) {
//     let div = document.createElement('div');
//     document.body.appendChild(div); 
//     if (week[i] == 'sat' || week[i] == 'sun'){   
//       div.style.fontWeight = "bold";
//       div.innerHTML = week[i];
//     } 
//       else if (i==4) {
//         div.style.fontStyle = "italic"; 
//         div.innerHTML = week[i];
//     }
//     else {
//       document.body.innerHTML += week[i];
//     }
//     console.log(week[i]);
//   }

 



// let arr = [];
// arr.push("5444", "35", "79", "750", "570", "320", "13");

// for (let i = 0; i < arr.length; i++ ) {
//   if (arr[i].substr(0,1) == 3 || arr[i].substr(0,1) == 7){
//       console.log(arr[i]);
// } 
// }







  let week = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];
  for (let i=0; i < week.length; i++) {
    let div = document.createElement('div');
    document.body.appendChild(div); 
    let date = new Date(2019, 2, 2),
        weekday = date.getUTCDay();
    
    if (week[i] == 'sat' || week[i] == 'sun'){   
      div.style.fontWeight = "bold";
      div.innerHTML = week[i];
    } 
      else if (i == weekday) {
        div.style.fontStyle = "italic"; 
        div.innerHTML = week[i];  
    }
    else {
      document.body.innerHTML += week[i];
    }
    console.log(week[i]);
  }








