const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValue() {
    const inputCurrecyValue = document.querySelector(".input-value").value
    const valueToConvert = document.querySelector(".valor-real")//valor em real
    const valueConvert = document.querySelector(".valor")//outras moedas


    const dolarToday = 4.94
    const euroToday = 5.34
    const libraToday = 6.24
    const btcToday = 51

    if (currencySelect.value == "dolar") {
        valueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputCurrecyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        valueConvert.innerHTML =
            new Intl.NumberFormat("de-DE", {
                style: "currency", currency: "EUR"
            }).format(inputCurrecyValue / euroToday)
    }
    if (currencySelect.value == "libra") {
        valueConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency", currency: "GBP"
        }).format(inputCurrecyValue / libraToday)
    }
    if (currencySelect.value == "btc") {
        valueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD "
        }).format(inputCurrecyValue / btcToday)
    }

    valueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency", currency: "BRL"
    }).format(inputCurrecyValue)
}






function currencyChange() {
    const currencyName = document.getElementById("currency-valor")
    const currencyImg = document.querySelector(".logo-moeda-convertida")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "dolar"
        currencyImg.src = "./assets/usd.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "libra"
        currencyImg.src = "./assets/libras.png"
    }
if(currencySelect.value == "btc"){
    currencyName.innerHTML=" bitcoin"
    currencyImg.src ="./assets/bitcoin 1.png"
}
    convertValue()

}
currencySelect.addEventListener("change", currencyChange)

convertButton.addEventListener("click", convertValue)