'use strict';

// Function to format credit card number input
function formatCreditCard(input) {
    let value = input.value;
    if (/[a-zA-Z]/.test(value)) {
        document.querySelector('.redernum').classList.remove('hide');
    } else if (/\d/.test(value)) {
        value = input.value.replace(/\D/g, '');

        const formattedValue = value.match(/.{1,4}/g)?.join(' ');

        input.value = formattedValue;
        document.querySelector('.redernum').classList.add('hide');
    } else if (value === "") {
        document.querySelector('.redernum').textContent = 'Field can not be empty';
    }
}

// Variable declarations
let cliname = [];
let cardmum = [];
let cardmnth = [];
let cardyr = [];
let clicvc = [];

// DOM elements
const finnum = document.querySelector('.finnum');
const finnam = document.querySelector('.finnam');
const finyr = document.querySelector('.finyr');
const finmth = document.querySelector('.finmth');
const fincvc = document.querySelector('.ficvc');

const confirmer = document.querySelector('.confirmer');
const inname = document.querySelector('.name');
const incard = document.querySelector('.crdnum');
const inmnth = document.querySelector('.blk');
const inyr = document.querySelector('.yr');
const incvc = document.querySelector('.dcvc');
const popup = document.querySelector('.popup');
const reset = document.querySelector('.reseter');

const nameror = document.querySelector('.rednamer');
const numer = document.querySelector('.redernum');
const mther = document.querySelector('.rederp');
const yrer = document.querySelector('.rederp2');
const cer = document.querySelector('.redercvc');

// Event listener for form submission
confirmer.addEventListener('click', function () {
    // Functions to check input fields
    function namechecker() {
        if (inname.value === '') {
            nameror.classList.remove('hide');
        } else {
            nameror.classList.add('hide')
        }
    }

    function cardnumchecker() {
        if (incard.value === '') {
            numer.classList.remove('hide');
        } else {
            numer.classList.add('hide');
        }
    }

    function mntchecker() {
        if (inmnth.value === '') {
            mther.classList.remove('hide');
        } else {
            mther.classList.add('hide');
        }
    }

    function yrchecker() {
        if (inyr.value === '') {
            yrer.classList.remove('hide');
        } else {
            yrer.classList.add('hide');
        }
    }

    function cvchecker() {
        if (incvc.value === '') {
            cer.classList.remove('hide');
        } else {
            cer.classList.add('hide');
        }
    }

    // Call error-checking functions
    cvchecker();
    yrchecker();
    mntchecker();
    cardnumchecker();
    namechecker();

    // Check if any error messages are displayed
    if (!nameror.classList.contains('hide') || !numer.classList.contains('hide') ||
        !mther.classList.contains('hide') || !yrer.classList.contains('hide') ||
        !cer.classList.contains('hide')) {
        return; // Stop if any errors are shown
    }

    // If all checks passed, update the UI and show the popup
    cliname.push(inname.value);
    cardmum.push(incard.value);
    cardmnth.push(inmnth.value); 
    cardyr.push(inyr.value);
    clicvc.push(incvc.value);

    finnam.textContent = cliname[0];
    finnum.textContent = cardmum[0];
    finyr.textContent = cardyr[0];
    finmth.textContent = cardmnth[0];
    fincvc.textContent = clicvc[0];

    popup.classList.remove('hide');
});

// Event listener for form reset
reset.addEventListener('click', function () {
    // Reset the UI elements
    finnam.textContent = "BENJAMIN UKEME";
    finnum.textContent = "0000 0000 0000 0000";
    finyr.textContent = "00";
    finmth.textContent = "00";
    fincvc.textContent = "00";
    
    // Clear input fields
    inname.value = "";
    incard.value = "";
    inyr.value = "";
    incvc.value = "";
    
    // Clear stored data
    cliname.pop();
    cardmum.pop();
    cardmnth.pop();
    cardyr.pop();
    clicvc.pop();
    
    // Hide the popup
    popup.classList.add('hide');
});
