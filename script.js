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
  //if no operator return 0
  
  if(!operator){ scrn.value = 0; }
  
  // calculate result and display
  switch (operator) {
    case '+':
      scrn.value = parseInt(first) + parseInt(second);
      break;
    case '-':
      scrn.value = parseInt(first) - parseInt(second);
      break;
    case '÷':
      let result = parseInt(first) / parseInt(second);
      scrn.value = result.toFixed(3);
      break;
    case '*':
      scrn.value = parseInt(first) * parseInt(second);
      break;
    default:
      scrn.value = 0;
  }
}


equal.addEventListener('click', calculate);
