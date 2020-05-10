function getRandomInt(min, max) {
    return Number(Math.floor(Math.random() * (max - min))) + Number(min);
}

function getArray() {

    var min = prompt("Введите минимальное (включительно) значение: ");
    if (isNaN(min)) {
        alert("Введите корректное значение заново: ");
        getArray();
    }

    var max = prompt("Введите максимальное (не включительно) значение: ");
    if (isNaN(max)) {
        alert("Введите корректное значение заново: ");
        getArray()
    }

    if (min > max) {
        str = max;
        max = min;
        min = str;
    }
    var num = prompt("Введите размерность матрицы: ");
    if (isNaN(num) || num == 0) {
        alert("Введите корректное значение заново: ");
        getArray()
    }

    let a = new Array(num);
    for (let i = 0; i < num; i++) {
        a[i] = new Array(num);
        for (let j = 0; j < num; j++)
            a[i][j] = getRandomInt(min, max);
    }

    var el = document.getElementById('table1');
    el.innerHTML = '';
    var tbl = document.createElement('table');
    el.appendChild(tbl);
    var tbd = document.createElement('tbody');
    document.getElementById('table1').appendChild(tbd);
    for (let i = 0; i < a.length; i++) {
        var tX = document.createElement('tr');
        tbd.appendChild(tX);

        for (let j = 0; j < a.length; j++) {
            var tY = document.createElement('td');
            tY.innerHTML = a[i][j];
            tX.appendChild(tY);
        }
    }

    if (!document.getElementById('newButton')) {
        var btn = document.createElement('input');
        btn.name = "button";
        btn.type = 'button';
        btn.value = 'Получить отсортированную матрицу';
        btn.id = 'newButton';
        btn.onclick = function () { getResultArray(a); }
    }
    document.getElementById('myPlace').appendChild(btn);
}

function getResultArray(a) {
    let b = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
        b[i] = new Array(a.length);
        for (let j = 0; j < a.length; j++) b[i][j] = 0;
    }

    BubbleSort(a);

    for (let i = 0; i < b.length; i++)
        for (let j = 0; j < b[i].length; j++) {
            if (i % 2 == 0) b[i][j] = a[i][j];
            else b[i][j] = a[i][b[j].length - j];
        }

    var el = document.getElementById('table2');
    el.innerHTML = '';
    var tbl = document.createElement('table');
    el.appendChild(tbl);
    var tbd = document.createElement('tbody');
    document.getElementById('table2').appendChild(tbd);

    for (let i = 0; i < b.length; i++) {
        var tX = document.createElement('tr');
        tbd.appendChild(tX);

        for (let j = 0; j < b.length; j++) {
            var tY = document.createElement('td');
            tY.innerHTML = b[i][j];
            tX.appendChild(tY);
        }
    }
}

function BubbleSort(a) {
    let b = new Array(a.length * a.length);
    let Buff = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            b[Buff] = Number(a[i][j]);
            Buff++;
        }
    }

    for (let i = 0; i < b.length - 1; i++)
        for (let j = 0; j < a.length - i - 1; j++)
            if (b[j] < b[j + 1]) {
                Buff = b[j + 1];
                b[j + 1] = b[j];
                b[j] = Buff;
            }

    Buff = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            a[i][j] = Number(b[Buff]);
            Buff++;
        }
    }
    return a;
}