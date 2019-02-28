let money = prompt("Ваш бюджет на месяц?"),
    time = prompt('Введите дату в формате YYYY-MM-DD'),
    question1 = prompt('Введите обязательную статью расходов в этом месяце'),
    question2 = +prompt('Во сколько обойдется?'),
    question3 = prompt('Введите обязательную статью расходов в этом месяце'),
    question4 = +prompt('Во сколько обойдется?');
    

let appData = {
  money,
  timeData: time,
  expenses: {[question1] : question2, [question3] : question4},
  optionalExpenses: "",
  income: [''],
  savings: false
};

let budget = (money - (appData.expenses[question1] + appData.expenses[question3]))/30;


console.log(appData);
console.log(budget);
