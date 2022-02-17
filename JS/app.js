//toast msg 
let div = null;

function generateToastMessage(msg) {
    div = document.createElement('div');
    div.innerText = msg;
    div.className = 'toast-message my-btn-pulse-grow toast-message-slide-in';

    div.addEventListener('click', function () {
        div.classList.remove('toast-message-slide-in');
        div.classList.add('toast-message-slide-out');

        div.addEventListener('animationend', function () {
            div.remove();
            div = null;
        });
    });

    document.body.appendChild(div);
}

//common function
function getElement(param) {
    const element = document.getElementById(param);
    const elementData = parseInt(element.value);
    element.value = elementData;
    element.value = ''
    return elementData;
}
//calculation cost
function calculate() {
    const income = getElement('income-input');
    const food = getElement('food-input');
    const rent = getElement('rent-input');
    const clothes = getElement('clothes-input');

    if ((isNaN(food) || isNaN(rent) || isNaN(clothes)) || (food < 0 || rent < 0 || clothes < 0)) {
        if (div !== null) {
            div.remove();
            div = null;
        }
        return generateToastMessage(`Please input valid amount of money in number format `);
    } else {
        let calcTotalExpense = parseFloat(food + rent + clothes);
        const expense = document.getElementById('total-expense');
        expense.innerText = calcTotalExpense;
        if (income < calcTotalExpense) {
            let sortMoney = calcTotalExpense - income;
            expense.innerText = "00";
            return generateToastMessage(` বেটা খরচের হাত কমাও 🥺 এই টাকা খরচ করতে হলে তোমাকে আরো ${sortMoney}  টাকা কামাই করা লাগবে 😏`);
        }

        let balance = document.getElementById('balance');
        let balanceData = income - calcTotalExpense;
        balance.innerText = balanceData;
    }

}