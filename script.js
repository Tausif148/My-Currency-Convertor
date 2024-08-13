const fromOption = document.querySelector("#fromOption");
const toOption = document.querySelector("#toOption");

const getValue = document.querySelector("#getValue");
const convertionShow = document.querySelector("#convertionShow");

const convert = document.querySelector("#convert");

const countryList = [
    { name: "US Dollar", code: "USD" },
    { name: "Indian Rupee", code: "INR" },
    { name: "Australian Dollar", code: "AUD" },
    { name: "Pakistani Rupee", code: "PKR" },
    { name: "Hong Kong Dollar", code: "HKD" }, ,
    { name: "Sri Lankan Rupee", code: "LKR" },
    { name: "Ukrainian Hryvnia", code: "UAH" },
    { name: "Zambian Kwacha", code: "ZMK" },
    { name: "Zimbabwean dollar", code: "ZWL" }
];

// Adding option in from curancy and to currancy select box
countryList.forEach(country => {
    const opt1 = document.createElement('option');
    const opt2 = document.createElement('option');

    opt1.value = opt2.value = country.code;
    opt1.textContent = opt2.textContent = country.code + " " + "(" + country.name + ")";

    fromOption.appendChild(opt1);
    toOption.appendChild(opt2);
});


// Currancy convertor api ==>  https://v6.exchangerate-api.com/v6/773030315e46bc860cb1ca8a/latest/USD
convert.addEventListener('click', async function myConvertion() {
    let fromAmount = fromOption.value;
    // console.log(fromAmount);
    let apiCurrancy = `https://v6.exchangerate-api.com/v6/773030315e46bc860cb1ca8a/latest/${fromAmount}`

    let toAmount = toOption.value;
    let getAmount = getValue.value;

    let response = await fetch(apiCurrancy);
    let result = await response.json();
    // console.log(result);

    const conversionRate = result.conversion_rates[toAmount];
    // console.log(conversionRate);

    const finalAmount = getAmount * conversionRate;
    // console.log(finalAmount);
    convertionShow.innerHTML = finalAmount;

});

toOption.addEventListener('change', myConvertion());







