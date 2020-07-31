const addUserEl = document.getElementById("addUser");
const doubleMoneyEl = document.getElementById("doubleMoney");
const showOnlyEl = document.getElementById("showOnly");
const orderEl = document.getElementById("order");
const calculateEl = document.getElementById("calculate");

const main = document.getElementById("main");

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

async function getRandomUser() {
    const res = await fetch("https://randomuser.me/api",);
    const data = await res.json();

    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    };

    addData(newUser);
}

function addData(obj) {
    data.push(obj);
    updateDOM();
}

function updateDOM(providedData = data) {
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';
    providedData.forEach(item => main.appendChild(ddd(item.name, item.money)));
}

function ddd(name, wealth, element = "h2") {
    var h2 = document.createElement(element);
    h2.innerHTML = `<strong>${name}</strong>${formatMoney(wealth)}`;

    return h2;
}

function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

addUserEl.addEventListener("click", getRandomUser);
doubleMoneyEl.addEventListener("click", e => {
    data.map(d => d.money *= 2);
    updateDOM();
});

orderEl.addEventListener("click", e => {
    data.sort((a, b) => b.money - a.money);
    updateDOM();
});

showOnlyEl.addEventListener("click", e => {
    data = data.filter(d => d.money > 1000000);
    updateDOM();
})

calculateEl.addEventListener("click", e => {
    const totalWealth = data.reduce((acc, d) => acc += d.money, 0);
    main.appendChild(ddd("Total Wealth", totalWealth, "h3"));
})


