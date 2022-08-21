function convertCurrency() {
    var amuont = document.getElementById("amuont").value;
    var formCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency");
    console.log("toCurrency" + toCurrency)
    if (formCurrency === toCurrency) {
        if (formCurrency === "VND") {
            result = amuont;
        } else {
            result = amuont * 23.5
        }
    } else {
        if (formCurrency === "VND") {
            result = amuont / 23.5
        } else {
            result = amuont * 23.5
        }
    }

}