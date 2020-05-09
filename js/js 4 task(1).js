function OnRadio(Name) {
    var str = Name.value;
    OnRadioMotion(str);
}

function OnRadioMotion(str) {
    var num = prompt("Введите " + str + " квадрата: ");
    if (num == 0) {
        alert("Вы ввели 0" + "\n" + "Введите корректное значение: ");
        OnRadioMotion();
    }
    else if (isNaN(num)) {
        alert("Введите корректное значение: ");
        OnRadioMotion();
    } else { Result(str, num); }
}

function Result(str, num) {
    let el = document.getElementById('res');
    if (str == "сторону") {
        if (typeof el.innerText !== 'undefined') el.innerText = "Площадь квадрата: " + (num * num);
        else el.textContent = "Площадь квадрата: " + (num * num);
    }
    else {
        if (typeof el.innerText !== 'undefined') el.innerText = "Площадь квадрата: " + (num * num / 2);
        else el.textContent = "Площадь квадрата: " + (num * num / 2);
    }
}