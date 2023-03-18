// original price calculator
const base = document.querySelector('#base-price')
const discounted = document.querySelector('#discounted-price')
const ogpriceresult = document.querySelector('.result');

base.addEventListener('change', updatePrice);
discounted.addEventListener('change', updatePrice);

function updatePrice() {
    let x = parseFloat(base.value);
    let y = parseFloat(discounted.value);

    //calculate the quotient of the base price and discounted price
    let disCalc = (y / x);
    let discountPercent = (1 - disCalc) * 100;
    let finalPrice = discountPercent.toFixed(2);
    //display result in the result div
    ogpriceresult.textContent = finalPrice + '%';
}

// profit margin module
const cog = document.querySelector('#cog');
const markupPercent = document.querySelector('#markup-percent');
const marginResult = document.querySelector('.margin-result');

cog.addEventListener('change', updateMarginPrice);
markupPercent.addEventListener('change', updateMarginPrice);

function updateMarginPrice() {
    let x = parseFloat(cog.value);
    let y = parseFloat(markupPercent.value);
    
    let margin = 1 - (y / 100);
    let finalPrice = (x / margin).toFixed(2);

    marginResult.textContent = finalPrice;

}
