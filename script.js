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

let a1 = prompt("Введите обязательную статью расходов", ''),
    a2 = prompt("Во сколько жто обойдется", '');

appData.expenses = {a1: a2};

alert(appData.budget / 30);