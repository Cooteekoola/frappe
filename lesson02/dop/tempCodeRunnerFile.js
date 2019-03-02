let week = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];
  for (let i=0; i < 7; i++) {
    if (week[i].substr(0, 1) == 's') {
       document.body.innerHTML += '<b>' + week[i] + '</b>' + '<br>';
    } 
      else if (i==4) {
      document.body.innerHTML += '<i>' + week[i] + '</i>' + '<br>';
    }
    else {
      document.body.innerHTML += week[i] + '<br>';
    }
    console.log(week[i]);
  }