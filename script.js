'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD');

    while (isNaN(money) || money == '' || money == null) {
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

let exps1, hm1;

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        exps1 = prompt('Введите обязательную статью расходов в этом месяце', '');
        hm1 = +prompt('Во сколько обойдется?', '');
        if ( (typeof(exps1)) === 'string' && (typeof(exps1)) != null && (typeof(hm1)) != null && 
            exps1 != '' && hm1 !='' && exps1.length < 50 ) {
            console.log('done');
            appData.expenses[exps1] = hm1;
        } else {
            i--;
        }
    }
};

chooseExpenses();



appData.moneyPerDay = (appData.budget/30).toFixed();

alert('Ежедневный бюджет:' + appData.moneyPerDay);
if (appData.moneyPerDay < 100) {
    console.log('Poor');
} else if (appData.moneyPerDay >100 && appData.moneyPerDay < 2000) {
    console.log('medium');
} else if (appData.moneyPerDay > 2000) {
    console.log('high income');
} else {
    console.log('Error');
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');
        
        appData.monthlyIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthlyIncome);
    }
};

checkSavings();