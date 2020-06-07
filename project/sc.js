let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

let q1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    q2 = prompt("Во сколько обойдется?", '');

appData.expenses.q1 = q2;
