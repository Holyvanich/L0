
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
    text.innerHTML = "Оплатить " + summa.textContent + " сом";
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

function upTextApply(id, name) {
    if (!name.value) {
        id.style.display = "none";
    } else {
        id.style.display = "block";
    } 
    console.log(name.value)
}

function validateEmail(value, empty_validate) {
    const re = /\S+@\S+\.\S+/;
    if (empty_validate) {
        if (value == '') {
            return 1;
        }
    }
    if (!re.test(value)) {
        document.getElementById("email-warning").style.display = 'block';
        document.getElementById("email").style.color = '#F55123';
        document.getElementById("email").style.borderColor = '#F55123';
    } else {
        document.getElementById("email-warning").style.display = 'none';
        document.getElementById("email").style.color = '#000000';
        document.getElementById("email").style.borderColor = '#9797AF';
    }
}

function validatePhone(value, empty_validate) {
    const re = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    if (empty_validate) {
        if (value == '') {
            return 1;
        }
    }
    if (!re.test(value)) {
        document.getElementById("phone-warning").style.display = 'block';
        document.getElementById("phone").style.color = '#F55123';
        document.getElementById("phone").style.borderColor = '#F55123';
    } else {
        document.getElementById("phone-warning").style.display = 'none';
        document.getElementById("phone").style.color = '#000000';
        document.getElementById("phone").style.borderColor = '#9797AF';
    }
}

function validateName(value, id, empty_validate) {
    const re = /[а-яА-Я]/;
    if (empty_validate) {
        if (value == '') {
            return 1;
        }
    }
    if (!re.test(value)) {
        document.getElementById(id + "-warning").style.display = 'block';
        document.getElementById(id).style.color = '#F55123';
        document.getElementById(id).style.borderColor = '#F55123';
    } else {
        document.getElementById(id + "-warning").style.display = 'none';
        document.getElementById(id).style.color = '#000000';
        document.getElementById(id).style.borderColor = '#9797AF';
    }
}

function validateInn(value, empty_validate) {
    const re = /\d{10}/;
    if (empty_validate) {
        if (value == '') {
            return 1;
        }
    }
    if (!re.test(value)) {
        document.getElementById("inn-warning").style.display = 'block';
        document.getElementById("inn-descr").style.display = 'none';
        document.getElementById("inn").style.color = '#F55123';
        document.getElementById("inn").style.borderColor = '#F55123';
    } else {
        document.getElementById("inn-warning").style.display = 'none';
        document.getElementById("inn-descr").style.display = 'block';
        document.getElementById("inn").style.color = '#000000';
        document.getElementById("inn").style.borderColor = '#9797AF';
    }
}

function validateAll() {
    validateInn(document.getElementById('inn').value, 0);
    validateEmail(document.getElementById('email').value, 0);
    validateName(document.getElementById('name').value, 'name', 0);
    validateName(document.getElementById('surname').value, 'surname', 0);
    validatePhone(document.getElementById('phone').value, 0);
    window.scrollBy({
        top: document.getElementById('name').getBoundingClientRect().top,
        behavior: 'smooth'
    });
}




