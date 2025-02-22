function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    let display = document.getElementById('display');
    display.value += value;
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
//function calculatesquareroot(){
 //   let number = document.getElementById('numberinput').value;
   // let result = Math.sqrt(number);
    //document.getElementById('result')
//document.querySelector("button").addEventListener("click",()=> document.body.classList.toggle('dark'))