var wallet = 4300;
var VAT_MAAM = 17;
var cellPhonePrice = 849;
var cellPhoneAccessoryPrice = 39;

var cellPhonePriceWithVat = CalculateVat(cellPhonePrice);
var cellPhoneAccessoryPriceWithVat = CalculateVat(cellPhoneAccessoryPrice);

var cellPhonesBought = 0;
var cellPhoneAccessoryBought = 0;

var walletTemp = wallet; // I need to know how much the wallet spent at the end
while(walletTemp >= Math.min(cellPhonePriceWithVat, cellPhoneAccessoryPriceWithVat)) {
    if (walletTemp >= cellPhonePriceWithVat) {
        walletTemp = walletTemp - cellPhonePriceWithVat;
        cellPhonesBought++;
    } else {
        walletTemp = walletTemp - cellPhoneAccessoryPriceWithVat;
        cellPhoneAccessoryBought++;
    }
}

printShoppingResult(cellPhonesBought, cellPhoneAccessoryBought, walletTemp, wallet);

/* 2 loops answer */
/*
while(walletTemp >= cellPhonePriceWithVat) {
    walletTemp = walletTemp - cellPhonePriceWithVat;
    cellPhonesBought++;
}

while(walletTemp >= cellPhoneAccessoryPriceWithVat) {
    walletTemp = walletTemp - cellPhoneAccessoryPriceWithVat;
    cellPhoneAccessoryBought++;
}
*/


function CalculateVat(price) {
    return price + (price * VAT_MAAM / 100);
}

function printShoppingResult(cellPhonesBought, cellPhoneAccessoryBought, walletTemp, wallet) {
    console.log('You can purchase', cellPhonesBought, 'smartphones and', cellPhoneAccessoryBought,
    'smartphone accessories with total cost of', (wallet - walletTemp).toFixed(2), 'NIS.');
}