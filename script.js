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
    changeDelivery(1);
    changeDelivery(2);
    changeDelivery(3);
}

function check1() {
    const chbox = document.getElementById('ok');
    const chbox1 = document.getElementById('ok0');
    if (chbox1.checked == false) {
        chbox.checked = false;
    }
    countItog();
    checkAll()
    changeDelivery(1);
}

function check2() {
    const chbox = document.getElementById('ok');
    const chbox2 = document.getElementById('ok1');
    if (chbox2.checked == false) {
        chbox.checked = false;
    }
    countItog();
    checkAll()
    changeDelivery(2);
}

function check3() {
    const chbox = document.getElementById('ok');
    const chbox3 = document.getElementById('ok2');;
    if (chbox3.checked == false) {
        chbox.checked = false;
    }
    countItog();
    checkAll()
    changeDelivery(3);
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
    changeDelivery(1);
    changeDelivery(2);
    changeDelivery(3);
    countMissing()
    return false;
}

function countMissing() {
    const items = document.querySelectorAll('#gray-items .item');
    const num = document.getElementById('count-missing');
    num.innerHTML = items.length;
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
    if (items.style.display == 'none'){
        items.style.display = 'block';
        items.style.position = 'relative';
        document.getElementById('close-1').style.background = 'url("img/close.svg") no-repeat'
        document.getElementById('counter-close').style.display = 'none';
        document.getElementById('counter-close').style.position = 'absolute';
        document.getElementById('select-all').style.display = 'flex';
        document.getElementById('select-all').style.position = 'relative';
    } else {
        items.style.display = 'none';
        items.style.position = 'absolute'; 
        document.getElementById('close-1').style.background = 'url("img/open.svg") no-repeat';
        document.getElementById('counter-close').style.display = 'flex';
        document.getElementById('counter-close').style.position = 'relative';
        document.getElementById('select-all').style.display = 'none';
        document.getElementById('select-all').style.position = 'absolute';
    }
}

function hideAllGray() {
    const items = document.getElementById('gray-items');
    if (items.style.display == 'none'){
        items.style.display = 'block';
        items.style.position = 'relative';
        document.getElementById('close-2').style.background = 'url("img/close.svg") no-repeat'
    } else {
        items.style.display = 'none';
        items.style.position = 'absolute'; 
        document.getElementById('close-2').style.background = 'url("img/open.svg") no-repeat'
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
            if (i != 1) {
                document.getElementById('quantity-small' + i).innerHTML = counter[i].textContent;
                if (counter[i].textContent <= 1) {
                    document.getElementById('quantity-small' + i).style.display = 'none';
                } else {
                    document.getElementById('quantity-small' + i).style.display = 'block';
                }
            } else {
                document.getElementById('quantity-small' + i).innerHTML = Math.floor(counter[i].textContent / 2) + (counter[i].textContent % 2);
                document.getElementById('quantity-small3').innerHTML = Math.floor(counter[i].textContent / 2);
                if (counter[i].textContent <= 1) {
                    document.getElementById('quantity-small' + i).style.display = 'none';
                    document.getElementById('quantity-small3').style.display = 'none';
                } else {
                    document.getElementById('quantity-small' + i).style.display = 'block';
                    document.getElementById('quantity-small3').style.display = 'block';
                } 
            }
        }
    }
    var parts = final_sum.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    document.getElementById('itog').innerHTML = parts.join(".");
    document.getElementById('count-sum').innerHTML = parts.join(".");

    var parts_sum = sum.toString().split(".");
    parts_sum[0] = parts_sum[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    document.getElementById('sum').innerHTML = parts_sum.join(".");
    document.getElementById('quantity').innerHTML = quantity;
    document.getElementById('count-quantity').innerHTML = quantity;

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

function counter(operation, counter, limit) {
    const num = document.getElementById('item' + counter);
    if (operation == '-') {
        if (num.textContent == 1) {
            return 0;
        } else if (num.textContent == 2) {
            num.innerHTML = parseInt(num.textContent) - 1;
            countItog()
            document.getElementById('minus' + counter).style.color = '#A0A0A4';
            document.getElementById('plus' + counter).style.color = '#000000';
        } else {
            num.innerHTML = parseInt(num.textContent) - 1;
            document.getElementById('plus' + counter).style.color = '#000000';
            countItog()
        }
    } else if (operation == '+') {
        if (num.textContent == limit) {
            return 0;
        } else if (num.textContent == limit - 1) {
            num.innerHTML = parseInt(num.textContent) + 1;
            countItog()
            document.getElementById('plus' + counter).style.color = '#A0A0A4';
            document.getElementById('minus' + counter).style.color = '#000000';
        } else {
            num.innerHTML = parseInt(num.textContent) + 1;
            document.getElementById('minus' + counter).style.color = '#000000';
            countItog()
        }
    }
}

function pickpointBtnClick(btn) {
    if (btn == 'courier-btn') {
        document.getElementById("btn0").classList.remove("selected");
        document.getElementById("btn1").classList.add("selected");
        document.getElementById("pickpoint").style.display = 'none';
        document.getElementById("pickpoint").style.position = 'absolute';
        document.getElementById("courier").style.display = 'flex';
        document.getElementById("courier").style.position = 'relative';
    } else if (btn == 'pickpoint-btn') {
        document.getElementById("btn1").classList.remove("selected");
        document.getElementById("btn0").classList.add("selected");
        document.getElementById("courier").style.display = 'none';
        document.getElementById("courier").style.position = 'absolute';
        document.getElementById("pickpoint").style.display = 'flex';
        document.getElementById("pickpoint").style.position = 'relative';
    }
}

function makeFavorite(id) {
    const like = document.getElementById(id);
    if (like.classList.contains("rose")) {
        like.classList.remove("rose");
    } else {
        like.classList.add("rose");
    }
}

function editProperties() {
    const items = document.querySelectorAll('.radio');
    for (item of items) {
        if (item.checked) {
            document.getElementById('editable').parentNode.removeChild(document.getElementById('editable'));
            document.getElementById('editable1').parentNode.removeChild(document.getElementById('editable1'));
            let fragment = document.getElementById(item.id + '-label').cloneNode(true);
            let fragment1 = document.getElementById(item.id + '-label').cloneNode(true);
            fragment.id = 'editable';
            fragment1.id = 'editable1';
            document.getElementById('insert-here').appendChild(fragment);
            document.getElementById('insert-here1').appendChild(fragment1);
            location.href='#close'
        }
    }
}

function editDelivery() {
    if (document.getElementById("courier").style.display == 'flex') {
        const items = document.querySelectorAll('.radio2');
        for (item of items) {
            if (item.checked) {
                document.getElementById('editable-delivery').parentNode.removeChild(document.getElementById('editable-delivery'));
                document.getElementById('editable-delivery1').parentNode.removeChild(document.getElementById('editable-delivery1'));
                let fragment = document.getElementById(item.id + '-label').cloneNode(true);
                let fragment1 = document.getElementById(item.id + '-label').cloneNode(true);
                fragment.id = 'editable-delivery';
                fragment.classList.add("h5");

                fragment1.id = 'editable-delivery1';
                fragment1.classList.add("adress");
                fragment1.classList.remove("h4");

                document.getElementById('insert-here-delivery').prepend(fragment);
                document.getElementById('insert-here-delivery1').prepend(fragment1);
                document.getElementById('delivery-method').innerHTML = 'курьером';
                document.getElementById('delivery-method1').innerHTML = 'Курьером';
                document.getElementById("rating").style.display = 'none';
                document.getElementById("rating").style.position = 'absolute';
                location.href='#close'
            }
        }
    } else {
        const items = document.querySelectorAll('.radio1');
        for (item of items) {
            if (item.checked) {
                document.getElementById('editable-delivery').parentNode.removeChild(document.getElementById('editable-delivery'));
                document.getElementById('editable-delivery1').parentNode.removeChild(document.getElementById('editable-delivery1'));
                let fragment = document.getElementById(item.id + '-label').cloneNode(true);
                let fragment1 = document.getElementById(item.id + '-label').cloneNode(true);
                fragment.id = 'editable-delivery';
                fragment.classList.add("h5");

                fragment1.id = 'editable-delivery1';
                fragment1.classList.add("adress");
                fragment1.classList.remove("h4");

                document.getElementById('insert-here-delivery').prepend(fragment);
                document.getElementById('insert-here-delivery1').prepend(fragment1);
                document.getElementById('delivery-method').innerHTML = 'в пункт выдачи';
                document.getElementById('delivery-method1').innerHTML = 'Пункт выдачи';
                document.getElementById("rating").style.display = 'flex';
                document.getElementById("rating").style.position = 'relative';
                location.href='#close'
            }
        }
    }
}

function changeDelivery(id) {
    const product = document.querySelector('#product' + id);
    const interval = document.getElementById('products-interval');
    const chbox = document.getElementById('ok' + (id - 1));
    const numOfCase = document.getElementById('item1');
    const caseProduct = document.querySelector('.case');
    if (chbox && chbox.checked) {
        product.style.display = 'flex';
        product.style.position = 'relative';
        interval.classList.add("none");
        if (numOfCase.innerHTML == 1) {
            caseProduct.style.display = 'none';
            caseProduct.style.position = 'absolute';
        } else {
            caseProduct.style.display = 'flex';
            caseProduct.style.position = 'relative';
        }
    } else {
        for (product of products) {
            product.style.display = 'none';
            product.style.position = 'absolute';
        } 
        if ((!document.getElementById('ok0').checked) && (!document.getElementById('ok1').checked) && (!document.getElementById('ok2').checked)) {
            interval.classList.remove("none");
        }
    }
}

selectAll();