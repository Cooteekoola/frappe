let money, time;

function start() {
  money = +prompt('Ваш бюджет на месяц?');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while(isNaN(money) || money == "" || money == null) {
    money = +prompt('Ваш бюджет на месяц?');
  }
}
start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},  
  optionalExpenses: {},
  income: [],
  savings: true
};

function detectDayBudget(){
  for (let i=0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце'),
        b = +prompt('Во сколько обойдется?');

      if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
      } else {
        i = i - 1;
      }
  }
}
detectDayBudget();

appData.moneyPerDay = (appData.budget/30).toFixed();    
  
  
function detectLevel(){
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
}
detectLevel();

function chooseOptExpenses() {
  for (let i=0; i<3; i++) {
       let que = +prompt('Статья необязательных расходов?');    
    appData.optionalExpenses[i + 1] = que;
  }
}
chooseOptExpenses();