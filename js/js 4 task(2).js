function Task_2() {
    let el = document.getElementById('res');
    if (typeof el.innerText !== 'undefined') el.innerText += "Результат:";
    else el.textContent += "Результат:";

    for (let i = -800; i <= 800; i++) {
        if (i % 31 == 0) {
            if (typeof el.innerText !== 'undefined') el.innerText += " " + i;
            else el.textContent += " " + i;
        }
    }

    let bt = document.getElementById('myButton');
    bt.disabled = true;
}