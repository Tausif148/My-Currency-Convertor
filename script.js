const fromOption = document.querySelector("#fromOption");
const toOption = document.querySelector("#toOption");

const getValue = document.querySelector("#getValue");
const convertionShow = document.querySelector("#convertionShow");

const convert = document.querySelector("#convert");


const countryList = [
    { "code": "USD" },
    { "code": "INR" },
    { "code": "AFN" },
    { "code": "EUR" },
    { "code": "HKD" },
    { "code": "PKR" },
    { "code": "ZWL" },
    { "code": "LKR" },
    { "code": "PLN" },
    { "code": "ZMW" }
];


// Adding option in from curancy and to currancy select box
countryList.forEach(country => {
    const opt1 = document.createElement('option');
    const opt2 = document.createElement('option');

    opt1.value = opt2.value = country.code;
    opt1.textContent = opt2.textContent = country.code;

    fromOption.appendChild(opt1);
    toOption.appendChild(opt2);

    // To set defult 
    // fromOption.value="USD"
    // toOption.value="INR "

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





















// country all data api ==> https://restcountries.com/v3.1/all




// async function myFun() {
//     let api = await fetch('https://restcountries.com/v3.1/all');

//     let result = await api.json();
//     // console.log(result);

//     result.forEach(country => {
//         console.log(country);
//         // console.log(country.flags.png);

//     });





// }

// myFun();