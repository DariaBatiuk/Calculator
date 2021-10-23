let input = document.querySelector('.input');

function insert(num) { input.textContent = input.textContent + num; };

function clean() {
    input.textContent = "";

}

function back() {
    var exp = input.textContent;
    input.textContent = exp.substring(0, exp.length - 1);

    if (exp == 0) {
        input.textContent = 0;
    }
}

function equal() {
    var exp = input.textContent;
    if (exp) {
        input.textContent = eval(exp);
    }
    if (eval(exp) == undefined) {
        input.textContent = 0;
    }
}

function percent() {
    { input.textContent = input.textContent / 100; }
}

function sqrt() {
    var exp = input.textContent;
    input.textContent = Math.sqrt(eval(input.textContent))
}

function pow() {
    var exp = input.textContent;
    input.textContent = Math.pow(eval(exp), 2);
}
