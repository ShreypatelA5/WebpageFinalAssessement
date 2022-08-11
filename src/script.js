/*
Name: Shrey Patel
Student Number: 158379214
Email: spatel562@myseneca.ca
Section: ZAA
*/

// Navbare
let menu = document.querySelector('.icon-menu');
let navbar = document.querySelector('.nav-link');

//menu 
menu.addEventListener('click', function() {
    navbar.classList.toggle('open-menu');
    menu.classList.toggle('move');
});

// The navbar should collapse 
window.onscroll = () => {
    navbar.classList.remove('open-menu');
    menu.classList.remove('move');
} 

// Code for getting the pay rate 

let hiringRadioButton = document.getElementById('hiring');
let questionRadioButton = document.getElementById('question');
let commentRadioButton = document.getElementById('comment');

// variable for contact form is only printed once 
var clicked = 0;

questionRadioButton.addEventListener('click', function() {
    if (clicked > 0) {
        deletePayRateInput();
        clicked = 0;
    }
});

// event listener by click

hiringRadioButton.addEventListener('click', function() {
    if (clicked == 0) {
        generatePayRateInput();
        clicked++;
    }
});

commentRadioButton.addEventListener('click', function() {
    if (clicked > 0) {
        deletePayRateInput();
        clicked = 0;
    }
});

function deletePayRateInput() {
    let label = document.getElementById('rate-label');
    let input = document.getElementById('rate-input');
    let div = document.querySelector(".radio-btns");
    let s1 = document.getElementById('s1');
    let s2 = document.getElementById('s2');
    let s3 = document.getElementById('s3');

    div.removeChild(s1);
    div.removeChild(s2);
    div.removeChild(s3);
    div.removeChild(input);
    div.removeChild(label);
}

// Function to generate the pay rate input field
function generatePayRateInput() {
    let stop1 = document.createElement('br');
    stop1.id = 's1';
    let stop2 = document.createElement('br');
    stop2.id = 's2';
    let stop3 = document.createElement('br');
    stop3.id = 's3';

  // Label Creator
    const lab1 = document.createElement("label");
    const textNode = document.createTextNode("Expected?");
    lab1.appendChild(textNode);
    lab1.id = 'rate-label';

   // input field creator
    const lab2 = document.createElement("input");
    lab2.id = 'rate-input';
    lab2.type = 'number';
    lab2.step >= '0.1';
    lab2.placeholder = 'Enter Hourly Pay Rate';
    lab2.classList.add('format')

    document.querySelector(".radio-btns").appendChild(stop1);
    document.querySelector(".radio-btns").appendChild(stop2);
    document.querySelector(".radio-btns").appendChild(lab1);
    document.querySelector(".radio-btns").appendChild(stop3);
    document.querySelector(".radio-btns").appendChild(lab2);
}

// delete input field
function deletePayRateInput() {
    let lab = document.getElementById('rate-label');
    let inputVal = document.getElementById('rate-input');
    let div = document.querySelector(".radio-btns");
    let s1 = document.getElementById('s1');
    let s2 = document.getElementById('s2');
    let s3 = document.getElementById('s3');

    div.removeChild(s1);
    div.removeChild(s2);
    div.removeChild(s3);
    div.removeChild(inputVal);
    div.removeChild(lab);
}

// Form Validation 

let messages = [];
const form = document.getElementById('contact-form');
const errorElement = document.getElementById('error');

form.addEventListener('reset', (e) => {
    messages = [];

    // Call the functions
    validateEmail();
    validateName();
    validateCity();
  
    validatePostalCode();
    validateAddress();
    validateMessage();

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerHTML = `
        <h3>Incorrect Inputs Provided:</h3>
        <pre>${messages.join('\r\n')}</pre>
        `;
    } 
    if (clicked > 0) {
        payRateValidation();
    }

    // Error Display
if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerHTML = `
    <h3>Incorrect Inputs Provided:</h3>
    <pre>${messages.join('\r\n')}</pre>
    `;
}
})

// Submit button
form.addEventListener('submit', (e) => {
    messages = [];
    errorElement.innerHTML = '';
})


// Check proper name 
function validateName() {
    const inputName = document.getElementById('name');
    if(nullChecker(inputName, 'name format')) {
        areAlphabets(inputName, '- Name should be valid - All characters should be alphabetical');
    }
}

// check valid email address 
function validateEmail() {
    const email = document.getElementById('email');
    if (nullChecker(email, 'Email')) {
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!(email.value.match(validRegex))) {
            messages.push("- Email Address is Invalid");
        }
    }    
}


// Check location
function validateAddress() {
    const address = document.getElementById('address');
    if (nullChecker(address, 'Address')) {
        if (address.value.length < 10) {
            messages.push("- Address should be atleast 10 characters long");
        }
    }
}

// Enter proper city name
function validateCity() {
    const city = document.getElementById('city');
    if(nullChecker(city, 'City')) {
        areAlphabets(city, '- City should be valid - All characters should be alphabetical');
    }
}

// Enter Valid postal code in correct format
function validatePostalCode() {
    let postalCode = document.getElementById('pCode');
    let validRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    if (!(postalCode.value.match(validRegex))) {
        messages.push("- Invalid Postal Code");
    }
}

// Validate message
function validateMessage() {
    const message = document.getElementById('message');
    if (nullChecker(message, 'Message')) {
        if (address.value.length < 10) {
            messages.push("- Message should be atleast 5 characters long");
        }
    }
}


function nullChecker(element, elementName) {
    result = true;
    if (element.value === '' || element.value == null) {
        messages.push(`- ${elementName} is required`);
        result = false;
    }

    return result;
}

// validate par rate amount
function payRateValidation() {
    let payRateInput = document.getElementById('hiring-rate-input');
    if (payRateInput.value <= 0) {
        messages.push("- Enter an appropriate expected hourly pay rate")
    }
}

// proper text validation
function areAlphabets(element, message) {
    let validRegex = /^[A-Za-z\s]+$/;
    if (!(element.value.match(validRegex))) {
        messages.push(message);
    }
}
