
function selectAll() {
    const chbox = document.getElementById('ok');
    const chbox1 = document.getElementById('ok1');
    const chbox2 = document.getElementById('ok2');
    const chbox3 = document.getElementById('ok3');
    if (chbox.checked) {
        chbox1.checked = true;
        chbox2.checked = true;
        chbox3.checked = true;
    }

    else {
        chbox1.checked = false;
        chbox2.checked = false;
        chbox3.checked = false;
    }
}

function check1() {
    const chbox = document.getElementById('ok');
    const chbox1 = document.getElementById('ok1');
    const chbox2 = document.getElementById('ok2');
    const chbox3 = document.getElementById('ok3');
    if (chbox1.checked == false) {
        chbox.checked = false;
    }
    if (chbox1.checked & chbox2.checked & chbox3.checked)
    {
        chbox.checked = true;
    }
}

function check2() {
    const chbox = document.getElementById('ok');
    const chbox1 = document.getElementById('ok1');
    const chbox2 = document.getElementById('ok2');
    const chbox3 = document.getElementById('ok3');
    if (chbox2.checked == false) {
        chbox.checked = false;
    }
    if (chbox1.checked & chbox2.checked & chbox3.checked)
    {
        chbox.checked = true;
    }
}

function check3() {
    const chbox = document.getElementById('ok');
    const chbox1 = document.getElementById('ok1');
    const chbox2 = document.getElementById('ok2');
    const chbox3 = document.getElementById('ok3');;
    if (chbox3.checked == false) {
        chbox.checked = false;
    }
    if (chbox1.checked & chbox2.checked & chbox3.checked)
    {
        chbox.checked = true;
    }
}

function deleteItem(id) {
    const item = document.getElementById(id);
    item.parentNode.removeChild(item);
    return false;
}

function payImmediatly() {
    const summa = document.getElementById('itog');
    const text = document.getElementById("payImm");
    const chbox = document.getElementById("okay");
    if(chbox.checked == false) {
        text.innerHTML = "Заказать"
    } else {
    text.innerHTML = "Оплатить " + summa.textContent + "сом";
    }
}

function hideAll() {
    const items = document.getElementById('items');
    if (items.style.opacity == '0'){
        items.style.opacity = 1;
        items.style.position = 'relative';
    } else {
        items.style.opacity = 0;
        items.style.position = 'absolute'; 
    }
}

function hideAllGray() {
    const items = document.getElementById('gray-items');
    if (items.style.opacity == '0'){
        items.style.opacity = 1;
        items.style.position = 'relative';
    } else {
        items.style.opacity = 0;
        items.style.position = 'absolute'; 
    }
}

function countItog() {
    const itog = document.getElementById('itog');
    const first = document.getElementById('price-one');
    const second = document.getElementById('price-two');
    const third = document.getElementById('price-three');
    itog.textContent = parseInt(first.textContent) + parseInt(second.textContent) + parseInt(third.textContent);
}