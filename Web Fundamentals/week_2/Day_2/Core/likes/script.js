const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const numberElement = document.querySelector('#number');
const numberElement2 = document.querySelector('#number2');
const numberElement3 = document.querySelector('#number3');
let counter = 0;

function incr() {
    counter++;
    numberElement.textContent = counter;
}
function incr1() {
    counter++;
    numberElement2.textContent = counter;
}
function incr2() {
    counter++;
    numberElement3.textContent = counter;
}

incrementButton.addEventListener('click', button1);
incrementButton2.addEventListener('click', button2);
incrementButton3.addEventListener('click', button3);