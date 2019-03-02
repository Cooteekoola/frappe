let arr = [];
arr.push("5444", "35", "79", "750", "570", "320", "13");

for (let i = 0; i < arr.length; i++ ) {
  if (arr[i].substr(0,1) == 3 || arr[i].substr(0,1) == 7){
      console.log(arr[i]);
} 
}