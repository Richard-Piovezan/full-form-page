AOS.init();

$(document).ready(function() {
    $('#birth-date').mask('00/00/0000', {
        placeholder: "__/__/____"
    });

    $('#cep').mask('00000-000', {
        placeholder: "_____-___"
    });

    $('#phone').mask('(00) 0 0000-0000', {
        placeholder: "(__) _ ____-____"
    });
})

const form = document.querySelector('.form');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const errorEmail = document.getElementById('error-email');
const errorPhone = document.getElementById('error-phone');

email.addEventListener('blur', () => {
    if (!(email.value.includes('@')) || !(email.value.includes('.com'))) {
        errorEmail.style.display = "flex";
        email.style.borderColor = "#DC2626";
    } else {
        errorEmail.style.display = "none";
        email.style.borderColor = "";
    }
})


phone.addEventListener('blur', () => {
    if (phone.value.length < 16) {
        errorPhone.style.display = "flex";
        phone.style.borderColor = "#DC2626";
    } else {
        errorPhone.style.display = "none";
        phone.style.borderColor = "";
    }
})