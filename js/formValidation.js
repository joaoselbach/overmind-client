//Form validation
const form = document.getElementById('form');
const inputs = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const phoneRegex = /[0-9]/g;
let error = 0;

function handleEmail() {

    const name = document.getElementById('name').value,
        email = document.getElementById('email').value,
        phone = document.getElementById('phone').value,
        password = document.getElementById('password').value,
        repassword = document.getElementById('repassword').value

    //Send the e-mail using SMTPJS and Elasticmail
    Email.send({
        SecureToken: "0a0b050b-d1ff-4c0e-940c-d127c94157ae",
        To: 'joao.selbach@hotmail.com',
        From: "joao.selbach@meisters.solutions",
        Subject: `${name} - Overmind`,
        Body: `<h3> Novo usuário cadastrado! </h3> <br /> Nome: <strong>${name}</strong> <br />
         Email: <strong>${email}</strong> <br /> Telefone: <strong>${phone}</strong> <br />
          Senha: <strong>${password}</strong> <br /> Confirmação de senha: <strong>${repassword}</strong> `
    }).then((message) => {
        if (message === "OK") {
            openModal()
            name = ""
            email = ""
            phone = ""
            password = ""
            repassword = ""
        } else {
            console.log(message)
        }
    })
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    passwordValidate();
    rePasswordValidate()

    if (error !== 0) {
        document.getElementById('password').value = "";
        document.getElementById('repassword').value = "";
    } else {
        handleEmail();
    }
});

function setError(index) {
    inputs[index].style.borderBottomColor = '#e63636';
    spans[index].style.color = '#e63636';
    spans[index].style.display = 'block';

    error = index;
}

function removeError(index) {
    inputs[index].style.borderBottomColor = '';
    spans[index].style.display = 'none';

    error = 0;
}

function nameValidate() {
    if (inputs[0].value.length < 3) {
        setError(0);
    }
    else {
        removeError(0);
    }
}

function emailValidate() {
    if (!emailRegex.test(inputs[1].value)) {
        setError(1);
    }
    else {
        removeError(1);
    }
}

function phoneValidate() {
    if (!phoneRegex.test(inputs[2].value) || inputs[2].value.length < 10) {
        setError(2);
    }
    else {
        removeError(2);
    }
}

function passwordValidate() {
    if (inputs[3].value.length < 6) {
        setError(3);
    }
    else {
        removeError(3);
        rePasswordValidate();
    }
}

function rePasswordValidate() {
    if (inputs[3].value == inputs[4].value && inputs[4].value.length >= 6) {
        removeError(4);
    }
    else {
        setError(4)
    }
}