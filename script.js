//simple calculator 
// code by Mukhtar Janagale
// for learning purpose.
// these are functional Javascript.


// get the buttons IDs

let scrn = document.getElementById('scrn');
let cancel = document.getElementById('c');
let equal = document.getElementById('equal');
let form = document.querySelector('form');
let inputs = [];
let operator = '';



// clear screen function

function clrScrn(e) {
  e.preventDefault();
  if (scrn.value) scrn.value = '';
}

function clrBack() {

  if (scrn.value) {
    scrn.value = scrn.value.slice(0, scrn.value.length - 1);
  }
}

// clear screen

cancel.addEventListener('dblclick', clrScrn);
cancel.addEventListener('click', clrBack);

// add button value to screen

function addValue(btn) {

  scrn.value += btn.textContent.trim();

}


// functon for operators.


function operate(op) {

  if(!scrn.value) return false;

  operator = op.textContent.trim();

  if (/\d+\W+\d+$/.test(scrn.value)) {
    scrn.value = scrn.value.replace(/\D/, op.textContent.trim());
    return false;
  }


  if (/\d+$/.test(scrn.value)) {
    scrn.value += op.textContent;
  } else {
    let value = scrn.value.slice(0, scrn.value.length - 1);
    scrn.value = value + op.textContent;
  }
}

//display result when equal button clicked.

function calculate(e) {
  inputs = scrn.value.split(/\D/);
  let first = inputs[0];
  let second = inputs[1];

  //clear screen if equal double clicked

  if( !/\d+[\+\-\*\÷]\d+/.test( scrn.value ) )  return;
  
  if(!first && !second){ console.log('empty!'); }
  
  // calculate result and display
  switch (operator) {
    case '+':
      scrn.value = parseInt(first) + parseInt(second);
      console.log('hello');
      break;
    case '-':
      scrn.value = parseInt(first) - parseInt(second);
      break;
    case '÷':
      let result = parseInt(first) / parseInt(second);
      scrn.value = isInt(result) ? result : result.toFixed(3);
      break;
    case '*':
      scrn.value = parseInt(first) * parseInt(second);
      break;
    default:
      scrn.value = 0;
  }

 
}

// true if value is integer otherwise false. 
function isInt(n){
  return Number(n) === n && n % 1 === 0;
}

equal.addEventListener('click', calculate);
