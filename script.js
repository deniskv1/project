'use strict';

let money = prompt("Ваш бюджет на месяц?", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a1 = prompt("Введите обязательную статью расходов", ''),
        a2 = prompt("Во сколько жто обойдется", '');

    if (typeof(a1) === 'string' && typeof(a1) != null && typeof(a2) != null 
    && a1 != '' && a2 != '' && a1.length < 50){
        console.log("done");
        appData.expenses[a1] = a2;
    } else {
        
    }   
}

appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Что-то пошло не так");
}