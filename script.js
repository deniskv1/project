'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');

    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a1 = prompt("Введите обязательную статью расходов", ''),
                a2 = prompt("Во сколько жто обойдется", '');
        
            if (typeof(a1) === 'string' && typeof(a1) != null && typeof(a2) != null 
            && a1 != '' && a2 != '' && a1.length < 50){
                console.log("done");
                appData.expenses[a1] = a2;
            } else {
                //console.log("Херня");
                i--;
            }   
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Что-то пошло не так");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений", ""),
                percent = +prompt("Под какой процент", "");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function() {
        let items = +prompt('Что принесет допдоход? (Перечислить через запятую', '');
        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }
        appData.income.forEach(function(item, i) {
            console.log('Способы доп заработка: ' + (i + 1) + " - " + item);
        });
    }
};

for (let key of appData.income) {

}

for (let key in appData) {
    console.log("Наша программа включает в себя: " + key + ' - ' + appData[key]);
}