 let week = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];
  for (let i=0; i < week.length; i++) {
    let div = document.createElement('div');
    document.body.appendChild(div); 
    let date = new Date(),
        weekday = date.getUTCDay();
    
    if (week[i] == 'sat' || week[i] == 'sun'){   
      div.style.fontWeight = "bold";
      div.innerHTML = week[i];
    } 
      else if (week[i] == weekday) {
        div.style.fontStyle = "italic"; 
        div.innerHTML = week[i];  
    }
    else {
      document.body.innerHTML += week[i];
    }
    console.log(week[i]);
  }