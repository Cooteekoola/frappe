let money = prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');
    // question1 = prompt('Введите обязательную статью расходов в этом месяце'),
    // question2 = +prompt('Во сколько обойдется?'),
    // question3 = prompt('Введите обязательную статью расходов в этом месяце'),
    // question4 = +prompt('Во сколько обойдется?');

  
let appData = {
  budget: money,
  timeData: time,
  expenses: {},  
  optionalExpenses: {},
  income: [],
  savings: false
};

// appData.expenses[question1] = question2;
// appData.expenses[question3] = question4;

for (let i=0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце'),
        b = +prompt('Во сколько обойдется?');

      if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
      } 
      }

appData.moneyPerDay = appData.budget/30;        


// let i = 0;
// while (i < 2) { 
//   let a = prompt('Введите обязательную статью расходов в этом месяце'),
//       b = +prompt('Во сколько обойдется?');        
//   console.log(i);
//   i++;
//   appData.expenses[a] = b;
//   appData.moneyPerDay = appData.budget/30; 
// }



// let i = 0;
// do {
//   let a = prompt('Введите обязательную статью расходов в этом месяце'),
//       b = +prompt('Во сколько обойдется?');
//   i++;
//   appData.expenses[a] = b;
//   appData.moneyPerDay = appData.budget/30;
// }
// while (i < 2);
  


if(appData.moneyPerDay < 100) {
  console.log("Минимальтный уровень достака");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");      
} else {
  console.log("Произошла ошибка");
}

alert("Бюджет на один день " + appData.moneyPerDay);
console.log(appData);