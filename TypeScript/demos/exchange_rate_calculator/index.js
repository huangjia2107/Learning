const selectOne = document.getElementById("currency-one");
const amountOne = document.getElementById("amount-one");

const selectTwo = document.getElementById("currency-two");
const amountTwo = document.getElementById("amount-two");

const swap = document.getElementById("swap");
const rateEl = document.getElementById("rate");

swap.addEventListener("click", e => {
    const temp = selectOne.value;
    selectOne.value = selectTwo.value;
    selectTwo.value = temp;
    showResult();
});

selectOne.addEventListener("change", showResult);
amountOne.addEventListener("input", showResult);
selectTwo.addEventListener("change", showResult);
amountTwo.addEventListener("input", showResult);

function showResult() {
    const currency_one = selectOne.value;
    const currency_two = selectTwo.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currency_two];
            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

            amountTwo.value = (amountOne.value * rate).toFixed(2);
        });
}

showResult();