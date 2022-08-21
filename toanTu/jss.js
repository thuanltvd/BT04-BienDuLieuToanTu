function convertCurrency() {
    var amount = document.getElementById("amount").value;
    var fromCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;
    var result = null;

    if (fromCurrency === toCurrency) {
        if (fromCurrency === "VND") {
            result = Number(amount);
        } else {
            result = Number(amount) * 23.5;
        }
    } else {
        if (fromCurrency === "VND" && toCurrency === "USD") {
            result = Number(amount) / 23.5;
        } else {
            result = Number(amount) * 23.5;
        }
    }

    document.getElementById("result").innerHTML = result;
}