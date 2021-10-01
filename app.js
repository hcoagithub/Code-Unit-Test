const sum = (a,b) => {
    return a + b
}

console.log(sum(7, 3))

const  fromEuroToDollar =  function (valueInEuro) {
    let valueInDollar = valueInEuro * 1.2;
    return parseFloat(valueInDollar.toFixed(2));
}

const fromDollarToYen = function (valueInDollar) {
    let valueInYen= (valueInDollar * 127.9)/1.2;

    return parseFloat(valueInYen.toFixed(2));

}



const fromYenToPound = function (valueInYen){
    let valueInPound = (valueInYen * 0.8) /127.9;
    return parseFloat(valueInPound.toFixed(2));

}



module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };

