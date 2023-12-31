function getElementInnerText(element){
    const getElement = document.getElementById(element);
    const innerText = getElement.innerText;
    return innerText;
}

function fixedInnerText(listMaker){
    const li = document.createElement('li');
    const ol = document.getElementById('make-list');
    li.innerText = listMaker;
    ol.appendChild(li);
}

let forApply = 0;
function totalPriceCount(price, innerTextTotal){
    const p = getElementInnerText(price);
    const inTT = getElementInnerText(innerTextTotal);
    let T = parseFloat(inTT);
    let P = parseFloat(p);
    T = T+P;
    T = T.toFixed(2);
    document.getElementById(innerTextTotal).innerText = T;
    const disStr = document.getElementById('discount-price').innerText;
    let dis = parseFloat(disStr);
    dis = dis.toFixed(2);
    document.getElementById('after-discount').innerText = (T-dis).toFixed(2);
    document.getElementById('btn-purchase').removeAttribute('disabled');
    forApply = forApply + P;
    if(forApply>=200){
        document.getElementById('btn-apply').removeAttribute('disabled');
    }
}

// sportsWear
function capClick(){
    const capText = getElementInnerText('cap-text');
    fixedInnerText(capText);
    totalPriceCount('cap-price', 'total-price');
}
function jerseyClick(){
    const jerseyText = getElementInnerText('jersey-text');
    fixedInnerText(jerseyText);
    totalPriceCount('jersey-price', 'total-price');
}
function shoesClick(){
    const shoesText = getElementInnerText('shoes-text');
    fixedInnerText(shoesText);
    totalPriceCount('shoes-price', 'total-price');
}

// furniture
function chairClick(){
    const chairText = getElementInnerText('chair-text');
    fixedInnerText(chairText);
    totalPriceCount('chair-price', 'total-price');
}
function childrenClick(){
    const childrenText = getElementInnerText('children-text');
    fixedInnerText(childrenText);
    totalPriceCount('children-price', 'total-price');
}
function sofaClick(){
    const sofaText = getElementInnerText('sofa-text');
    fixedInnerText(sofaText);
    totalPriceCount('sofa-price', 'total-price');
}

// kitchenware
function cutleriesClick(){
    const cutleriesText = getElementInnerText('cutleries-title');
    fixedInnerText(cutleriesText);
    totalPriceCount('cutleries-price', 'total-price');
}
function kClick(){
    const accessoriesText = getElementInnerText('accessories-text');
    fixedInnerText(accessoriesText);
    totalPriceCount('accessories-price', 'total-price');
}
function cookerClick(){
    const cookerText = getElementInnerText('cooker-text');
    fixedInnerText(cookerText);
    totalPriceCount('cooker-price', 'total-price');
}


document.getElementById('btn-apply').addEventListener('click', function(){
    let total = parseFloat(document.getElementById('total-price').innerText);
    if(document.getElementById('input-field').value === 'SELL200'){
        let discount = (total*20)/100;
        let afterDiscount = total - discount;
        discount = discount.toFixed(2);
        afterDiscount = afterDiscount.toFixed(2);
        document.getElementById('discount-price').innerText = discount;
        document.getElementById('after-discount').innerText = afterDiscount;
        forApply = 0;
        document.getElementById('input-field').value = '';
        document.getElementById('btn-apply').setAttribute('disabled', true);
    }
});

document.getElementById('btn-purchase').addEventListener('click', function(){
    document.getElementById('btn-purchase').setAttribute('disabled', true);
});

document.getElementById('btn-go').addEventListener('click', function(){
    document.getElementById('total-price').innerText = 0;
    document.getElementById('discount-price').innerText = 0;
    document.getElementById('after-discount').innerText = 0;
    document.getElementById('make-list').innerHTML = '';
});

