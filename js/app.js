/* jshint browser: true */
/*jshint esnext: true */ //'spread/rest operator' is only available in ES6 (use esnext option). - W119 - linea 7

var mytable  = document.getElementById('table');
console.log(mytable);
// Convierte a un array
var tdArr = [...document.getElementsByTagName('td')];
  
window .addEventListener('keyup', paint);
function paint(e) {                        
    
    var ascii = e.keyCode;

    for (var i=0; i<tdArr.length; i++){
        if (ascii == 38) {
        tdArr[i].classList.add('paint-cell');
        tdArr[i].innerHTML = '<p>⬆</p>';
        }
        if (ascii == 40) {
            tdArr[i].classList.add('paint-cell');
            tdArr[i].innerHTML = '<p>⬇</p>';
        }
        if (ascii == 37) {
            tdArr[i].classList.add('paint-cell');
            tdArr[i].innerHTML = '<p>⬅</p>';
        }
        if (ascii == 39) {
            tdArr[i].classList.add('paint-cell');
            tdArr[i].innerHTML = '<p>➡</p>';
        }
    }
}

document.getElementById('reset').addEventListener('click', reset);
function reset() {
    for (var i=0; i<tdArr.length; i++){
        tdArr[i].classList.remove('paint-cell');
        tdArr[i].innerHTML = '';
    }
}