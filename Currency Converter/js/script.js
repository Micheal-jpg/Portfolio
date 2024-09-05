const dropList = document.querySelectorAll(".drop-list select"),
fromCurrency = document.querySelector(".from select"),
toCurrency = document.querySelector(".to select"),
getButton = document.querySelector("form button");
amount = document.querySelector(".amount input");
const errorMessage = document.createElement('p');
errorMessage.classList.add('error-message');
amount.parentElement.appendChild(errorMessage);

for (let i = 0; i < dropList.length; i++) {
    for(currency_code in country_code) {
        let selected;
        if(i == 0){
            selected = currency_code =="NGN" ? "selected" : "";
        }else if(i == 1){
            selected = currency_code =="USD" ? "selected" : "";
        }    
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", optionTag)
    }
    dropList[i].addEventListener("change", e =>{
        loadFlag(e.target);
    });
}

function loadFlag(element){
    for(code in country_code){
        if(code == element.value){ 
            let imgTag = element.parentElement.querySelector("img");
            imgTag.src = `https://flagsapi.com/${country_code[code]}/flat/64.png`
        }
    }
}

window.addEventListener("load", () =>{
    getExchangeRate();
});

getButton.addEventListener("click", e =>{
    e.preventDefault(); 
    getExchangeRate();
});

amount.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        getExchangeRate();
    }
});

const exchangeIcon = document.querySelector(".drop-list .icon")
exchangeIcon.addEventListener ("click", () => {
    let tempCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCode;
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    getExchangeRate();
});

function getExchangeRate() {
    const amount = document.querySelector(".amount input"),
        exchangeRateTxt = document.querySelector(".exchange-rate");
    let amountVal = amount.value;

    if (isNaN(amountVal) || amountVal == "" || amountVal == "0") {
        exchangeRateTxt.innerText = "Please enter a valid number.";
        exchangeRateTxt.style.color = "red";
        exchangeRateTxt.classList.add("error");
        return;
    }

    exchangeRateTxt.innerText = "Getting exchange rate ....";
    exchangeRateTxt.style.color = "black";
    exchangeRateTxt.classList.remove("error");

    let url =  `https://v6.exchangerate-api.com/v6/45e87cb3ecbbbb3cdb949561/latest/${fromCurrency.value}`;
    fetch(url).then(response => response.json()).then(result =>{
        let exchangeRate = result.conversion_rates[toCurrency.value];
        let totalExchangeRate = (amountVal * exchangeRate).toFixed(3);

        // Add commas if value is more than a hundred
        if (totalExchangeRate > 100) {
            totalExchangeRate = Number(totalExchangeRate).toLocaleString();
        }


        exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`;
    }).catch(() => {
        exchangeRateTxt.innerText = "Something went wrong";
        exchangeRateTxt.style.color = "red";
        exchangeRateTxt.classList.add("error");
    });
}
