let arr3Task = [];

function generateMatrix() {
    arr3Task = new Array(8);
    for (let i = 0; i < arr3Task.length; i++) {
        arr3Task[i] = new Array(8);
        for (let j = 0; j < arr3Task.length; j++)
            arr3Task[i][j] = Math.floor(Math.random() * 100) - Math.ceil(Math.random() * 100);
    }
    writeMatrix(true);
}

function writeMatrix(x) {
    var str = 'table2';
    if (x) str = 'table1';

    var el = document.getElementById(str);
    el.innerHTML = '';
    var tbl = document.createElement('table');
    el.appendChild(tbl);
    var tbd = document.createElement('tbody');
    document.getElementById(str).appendChild(tbd);

    for (let i = 0; i < arr3Task.length; i++) {
        var tX = document.createElement('tr');
        tbd.appendChild(tX);

        for (let j = 0; j < arr3Task.length; j++) {
            var tY = document.createElement('td');
            tY.innerHTML = arr3Task[i][j];
            tX.appendChild(tY);
        }
    }

    if (!document.getElementById('newButton')) {
        var btn = document.createElement('input');
        btn.name = "button";
        btn.type = 'button';
        btn.value = 'Поменять местами элементы';
        btn.id = 'newButton';
        btn.onclick = function () {
            let buff = [8];
            for (let i = 0; i < 8; i++)
                buff[i] = 0;
            for (let i = 0; i < 8; i++)
                for (let j = 0; j < 8; j++) {
                    if (arr3Task[i][j] < 0)
                        buff[j]++;
                }
            var min = buff[0];
            var k = 0;
            for (let i = 0; i < 8; i++) {
                if (buff[i] < min) {
                    min = buff[i];
                    k = i;
                }
            }
            for (let i = 0; i < 8; i++) {
                buff = arr3Task[i][i];
                arr3Task[i][i] = arr3Task[i][k];
                arr3Task[i][k] = buff;
            }
            writeMatrix(false);
        }
        document.getElementById('myPlace').appendChild(btn);
    }
}