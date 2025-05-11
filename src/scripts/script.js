AOS.init();

$(document).ready(function() {
    $('#name').mask('#', {
        maxlength: false,
        placeholder: 'Nome completo da criança',
        translation: {
            '#': {
                pattern: /[a-zA-Z]/,
                recursive: true
            }
        }
    })

    $('#responsible-name').mask('#', {
        maxlength: false,
        placeholder: 'Nome completo do responsável',
        translation: {
            '#': {
                pattern: /[a-zA-Z]/,
                recursive: true
            }
        }
    })

    $('#city').mask('#', {
        maxlength: false,
        placeholder: 'Nome completo da cidade',
        translation: {
            '#': {
                pattern: /[a-zA-Z]/,
                recursive: true
            }
        }
    })

    $('#birth-date').mask('00/00/0000', {
        placeholder: "DD/MM/AAAA"
    });

    $('#cep').mask('00000-000', {
        placeholder: "00000-000"
    });

    $('#phone').mask('(00) 0 0000-0000', {
        placeholder: "(DDD) 0 0000-0000"
    });

    $('#number-address').mask('0000', {
        placeholder: '000'
    });

    $('#state').mask('SS', {
        placeholder: 'UF'
    });
})

const birth = document.getElementById('birth-date');
const cep = document.getElementById('cep');
const form = document.querySelector('.form');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const errorBirth = document.getElementById('error-birth');
const errorCep = document.getElementById('error-cep');
const errorEmail = document.getElementById('error-email');
const errorPhone = document.getElementById('error-phone');

birth.addEventListener('blur', () => {
    if (birth.value.length < 10) {
        errorBirth.style.display = "flex";
        birth.style.borderColor = "#DC2626";
    } else {
        errorBirth.style.display = "none";
        birth.style.borderColor = "";
    }
})

cep.addEventListener('blur', () => {
    if (cep.value.length < 9) {
        errorCep.style.display = "flex";
        cep.style.borderColor = "#DC2626";
    } else {
        errorCep.style.display = "none";
        cep.style.borderColor = "";
    }
})

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

const inputFile = document.getElementById("birth-document");
const pictureDocument = document.getElementById('picture-document');
const pictureDocumentText = '<i class="hgi hgi-stroke hgi-cloud-upload"></i><p>Clique aqui para selecionar arquivos</p>';
pictureDocument.innerHTML = pictureDocumentText;

inputFile.addEventListener('change', (e) => {
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', (e) => {
            const readerTarget = e.target;
            const img = document.createElement('img');
            img.src = readerTarget.result;
            
            pictureDocument.innerHTML = '';
            pictureDocument.appendChild(img);
        })

        reader.readAsDataURL(file);
    } else {
        pictureDocument.innerHTML = pictureDocumentText;
    }
})