

function selectAll() {
    const chbox = document.getElementById('ok');
    const chbox1 = document.getElementById('ok0');
    const chbox2 = document.getElementById('ok1');
    const chbox3 = document.getElementById('ok2');
    if (chbox.checked) {
        if (chbox1) {
            chbox1.checked = true;
        }
        if (chbox2) {
            chbox2.checked = true;
        }
        if (chbox3) {
            chbox3.checked = true;
        }
    }

    else {
        if (chbox1) {
            chbox1.checked = false;
        }
        if (chbox2) {
            chbox2.checked = false;
        }
        if (chbox3) {
            chbox3.checked = false;
        }
    }
    countItog()
}

function check1() {
    const chbox = document.getElementById('ok');
    const chbox1 = document.getElementById('ok0');
    if (chbox1.checked == false) {
        chbox.checked = false;
    }
    countItog();
    checkAll()
}

function check2() {
    const chbox = document.getElementById('ok');
    const chbox2 = document.getElementById('ok1');
    if (chbox2.checked == false) {
        chbox.checked = false;
    }
    countItog();
    checkAll()
}

function check3() {
    const chbox = document.getElementById('ok');
    const chbox3 = document.getElementById('ok2');;
    if (chbox3.checked == false) {
        chbox.checked = false;
    }
    countItog();
    checkAll()
}

function checkAll() {
    const chboxs = document.querySelectorAll('.item .checkbox');
    let sum = 0;
    for (let i = 0; i < chboxs.length; i++) {
        if (chboxs[i].checked) {
            sum += 1;
        }
    }

    if (sum == chboxs.length)
    {
        document.getElementById('ok').checked = true;
    }
}

function deleteItem(id) {
    const item = document.getElementById(id);
    item.parentNode.removeChild(item);
    countItog();
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
    const prices = document.querySelectorAll('.price .discount-price');
    const prices_orig = document.querySelectorAll('.price .original-price');
    const chbox = document.querySelectorAll('.item .checkbox');
    const counter = document.querySelectorAll('.counter-num');

    let final_sum = 0;
    let quantity = 0;
    let sum = 0;
    let discount = 0;
    for (let i = 0; i < prices.length; i++) {
        if (chbox[i].checked) {
            s = prices[i].textContent.replace(/\s/g, '');
            final_sum += parseInt(s) * counter[i].textContent;

            d = prices_orig[i].textContent.replace(/\s/g, '');
            sum += parseInt(d) * counter[i].textContent;

            quantity += 1 * counter[i].textContent;
        }
    }
    var parts = final_sum.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    document.getElementById('itog').innerHTML = parts.join(".");

    var parts_sum = sum.toString().split(".");
    parts_sum[0] = parts_sum[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    document.getElementById('sum').innerHTML = parts_sum.join(".");
    document.getElementById('quantity').innerHTML = quantity;

    discount = sum - final_sum;
    var parts_d = discount.toString().split(".");
    parts_d[0] = parts_d[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    document.getElementById('discount').innerHTML = parts_d.join(".");;
}   

function upTextApply(id, name) {
    if (!name.value) {
        id.style.display = "none";
    } else {
        id.style.display = "block";
    } 
    console.log(name.value)
}

function validateEmpty(value, name) {
    if (value == '') {
        document.getElementById(name + "-warning").style.display = 'block';
        document.getElementById(name).style.color = '#F55123';
        document.getElementById(name).style.borderColor = '#F55123';
    }
}

function validateEmptyInn(value, name) {
    if (value == '') {
        document.getElementById(name + "-warning").style.display = 'block';
        document.getElementById("inn-descr").style.display = 'none';
        document.getElementById(name).style.color = '#F55123';
        document.getElementById(name).style.borderColor = '#F55123';
    }
}

function validateEmail(value) {
    const re = /\S+@\S+\.\S+/;
    if (value == '') {
        document.getElementById("email-warning").style.display = 'none';
        document.getElementById("email-warning-validate").style.display = 'none';
        document.getElementById("email").style.color = '#000000';
        document.getElementById("email").style.borderColor = '#9797AF';
        return 1;
    }
    if (!re.test(value)) {
        document.getElementById("email-warning").style.display = 'none';
        document.getElementById("email-warning-validate").style.display = 'block';
        document.getElementById("email").style.color = '#F55123';
        document.getElementById("email").style.borderColor = '#F55123';
    } else {
        document.getElementById("email-warning").style.display = 'none';
        document.getElementById("email-warning-validate").style.display = 'none';
        document.getElementById("email").style.color = '#000000';
        document.getElementById("email").style.borderColor = '#9797AF';
    }
}

function validatePhone(value) {
    const re = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    if (value == '') {
        document.getElementById("phone-warning").style.display = 'none';
        document.getElementById("phone-warning-validate").style.display = 'none';
        document.getElementById("phone").style.color = '#000000';
        document.getElementById("phone").style.borderColor = '#9797AF';
        return 1;
    }
    if (!re.test(value)) {
        document.getElementById("phone-warning").style.display = 'none';
        document.getElementById("phone-warning-validate").style.display = 'block';
        document.getElementById("phone").style.color = '#F55123';
        document.getElementById("phone").style.borderColor = '#F55123';
    } else {
        document.getElementById("phone-warning").style.display = 'none';
        document.getElementById("phone-warning-validate").style.display = 'none';
        document.getElementById("phone").style.color = '#000000';
        document.getElementById("phone").style.borderColor = '#9797AF';
    }
}

function validateName(value, id) {
    const re = /^[а-яА-Яa-zA-Z]+$/;
    if (value == '') {
        document.getElementById(id + "-warning").style.display = 'none';
        document.getElementById(id).style.color = '#000000';
        document.getElementById(id).style.borderColor = '#9797AF';
        return 1;
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

function validateInn(value) {
    const re = /^\d{10,10}$/;
    if (value == '') {
        document.getElementById("inn-warning").style.display = 'none';
        document.getElementById("inn-warning-validate").style.display = 'none';
        document.getElementById("inn-descr").style.display = 'block';
        document.getElementById("inn").style.color = '#000000';
        document.getElementById("inn").style.borderColor = '#9797AF';
        return 1;
    }
    if (!re.test(value)) {
        document.getElementById("inn-warning-validate").style.display = 'block';
        document.getElementById("inn-descr").style.display = 'none';
        document.getElementById("inn-warning").style.display = 'none';
        document.getElementById("inn").style.color = '#F55123';
        document.getElementById("inn").style.borderColor = '#F55123';
    } else {
        document.getElementById("inn-warning").style.display = 'none';
        document.getElementById("inn-warning-validate").style.display = 'none';
        document.getElementById("inn-descr").style.display = 'block';
        document.getElementById("inn").style.color = '#000000';
        document.getElementById("inn").style.borderColor = '#9797AF';
    }
}

function validateAll() {
    validateEmpty(document.getElementById('email').value, "email")
    validateEmpty(document.getElementById('name').value, "name")
    validateEmpty(document.getElementById('surname').value, "surname")
    validateEmpty(document.getElementById('phone').value, "phone")
    validateEmptyInn(document.getElementById('inn').value, "inn")
    window.scrollBy({
        top: document.getElementById('name').getBoundingClientRect().top,
        behavior: 'smooth'
    });
}


function submit() {
    const email = document.getElementById('email');
    email.addEventListener('keydown', function(e) {
      if (e.keyCode === 13) {
        validateEmail(email.value, 1)
      }
    });
    const phone = document.getElementById('phone');
    phone.addEventListener('keydown', function(e) {
      if (e.keyCode === 13) {
        validatePhone(phone.value, 1)
      }
    });
    const name = document.getElementById('name');
    name.addEventListener('keydown', function(e) {
      if (e.keyCode === 13) {
        validateName(name.value, 'name', 1)
      }
    });
    const surname = document.getElementById('surname');
    surname.addEventListener('keydown', function(e) {
      if (e.keyCode === 13) {
        validateName(surname.value, 'surname', 1)
      }
    });
    const inn = document.getElementById('inn');
    inn.addEventListener('keydown', function(e) {
      if (e.keyCode === 13) {
        validateInn(inn.value, 1)
      }
    });
};

submit();



