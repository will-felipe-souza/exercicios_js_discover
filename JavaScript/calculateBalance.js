let familyFinance = {
    incomes: [21,21,21],
    expenses: [13,12,15.15]
}

function calculate(values) {
    let totalIncomes = null;
    let totalExpenses = null;

    values.incomes.map(value => totalIncomes += value);
    values.expenses.map(value => totalExpenses += value);

    let balance = totalIncomes - totalExpenses;

    if(balance >= 0) {
        return console.log(`Seu saldo é positivo, valor de: R$ ${balance.toFixed(2)}`);
    } else {
        return console.log(`Seu saldo é negativo, valor de: R$ ${balance.toFixed(2)}`); 
    }
}

calculate(familyFinance);

