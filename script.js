
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
    