function TestaCPF() {
    var Soma = 0
    var Resto
    //remove caracteres que não forem números
    var strCPF = cpfInput.value;
    strCPF = String(strCPF).replace(/[^\d]/g, '')

    if (strCPF.length !== 11) {
        helpcpf.innerHTML = 'Informe um CPF válido'
        helpcpf.classList.add('errado');
        return false;

    }
    //verifica se todos os número são iguais, retorna falso
    if ([
            '00000000000',
            '11111111111',
            '22222222222',
            '33333333333',
            '44444444444',
            '55555555555',
            '66666666666',
            '77777777777',
            '88888888888',
            '99999999999'
        ].indexOf(strCPF) !== -1) {
        helpcpf.innerHTML = 'Informe um CPF válido'
        helpcpf.classList.add('errado');
        return false;
    }

    for (i = 1; i <= 9; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);

    Resto = (Soma * 10) % 11

    if ((Resto == 10) || (Resto == 11)) {
        Resto = 0;
    }
    if (Resto != parseInt(strCPF.substring(9, 10))) {
        helpcpf.innerHTML = 'Informe um CPF válido'
        helpcpf.classList.add('errado');
        return false;
    }

    Soma = 0

    for (i = 1; i <= 10; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i)

    Resto = (Soma * 10) % 11

    if ((Resto == 10) || (Resto == 11))
        Resto = 0

    if (Resto != parseInt(strCPF.substring(10, 11))) {
        helpcpf.innerHTML = 'Informe um CPF válido'
        helpcpf.classList.add('errado');
        return false;
    }
    helpcpf.innerHTML = ''
    helpcpf.classList.remove('errado');
    return true
}

//-------------------------------------------------------------------

var helpnome = document.getElementById('helpnome');
var helpsnome = document.getElementById('helpsnome');
var helpnasc = document.getElementById('helpnasc');
var helpcpf = document.getElementById('helpcpf');
var helptel = document.getElementById('helptel');
var helpemail = document.getElementById('helpemail');
var helpsenha = document.getElementById('helpsenha')
var helpsenha2 = document.getElementById('helpsenha2')

var form = document.getElementById('form');
var nome = document.getElementById('nome');
var snome = document.getElementById('snome');
var nasc = document.getElementById('nasc');
var cpfInput = document.getElementById('cpf');
var tel = document.getElementById('tel');
var email = document.getElementById('email');
var senha = document.getElementById('senha')
var senha2 = document.getElementById('senha2')

var enviar = document.getElementById('enviar');
var limpar = document.getElementById('limpar');
var valida = document.getElementById('valida')


//BOTAO ENVIAR
form.addEventListener('submit', validar);
valida.addEventListener('click', validar);

//VALIDAÇÕES
function validar(e) {

    if (!validanome() || !validaSnome() || !ValidaData() || !TestaCPF() || !validaTel() || !validaEmail() || !ValidaSenha() || !ValidaSenha2()) {
        e.preventDefault(); //CANCELA A SUBMISSAO DO FORM

    }
}

function validanome() {
    if (!isNaN(nome.value) || nome.value.indexOf("  ") != -1) {
        helpnome.innerHTML = 'Informe um nome válido'
        helpnome.classList.add('errado');

        return false;
    } else {
        helpnome.innerHTML = ''
        helpnome.classList.remove('errado');
        return true;
    }
}

function validaSnome() {
    if (!isNaN(snome.value) || snome.value.indexOf("  ") != -1) {
        helpsnome.innerHTML = 'Informe um Sobrenome válido'
        helpsnome.classList.add('errado');

        return false;
    } else {
        helpsnome.innerHTML = ''
        helpsnome.classList.remove('errado');
        return true;
    }
}

function validaEmail() {
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || email.value.indexOf(" ") != -1) {
        helpemail.innerHTML = 'Informe um email válido'
        helpemail.classList.add('errado');
        return false;
    } else {
        helpemail.innerHTML = ''

        return true;
    }
}

function validaTel() {
    if (isNaN(tel.value) || tel.value.length != 11) {
        helptel.innerHTML = 'Informe um telefone válido'
        helptel.classList.add('errado');

        return false;
    } else {
        helptel.innerHTML = ''
        helptel.classList.remove('errado');
        return true;

    }
}


function ValidaData() {
    var hoje = new Date();

    var ano = nasc.value.substr(0, 4);
    var mes = nasc.value.substr(5, 2);
    var dia = nasc.value.substr(8, 2);

    var nasc_data = new Date(ano + '/' + mes + "/" + dia);

    if (nasc_data > hoje  || nasc.value == "") {
        helpnasc.innerHTML = 'Informe uma data válida';
        helpnasc.classList.add('errado');
        return false;
    } else {
        helpnasc.innerHTML = '';
        return true;
    }

}

function ValidaSenha() {
    const regexEspecial = /[\W_]/;
    const regexNumero = /\d/;
    const regexMaiuscula = /[A-Z]/;

    if (!regexEspecial.test(senha.value) || !regexNumero.test(senha.value) || !regexMaiuscula.test(senha.value)) {
        helpsenha.innerHTML = 'Informe uma senha com pelo menos um caracter especial, um número e uma letra maiúscula';
        helpsenha.classList.add('errado');

        return false;
    } else {
        helpsenha.innerHTML = '';
        helpsenha.classList.remove('errado');
        return true;
    }
}

function ValidaSenha2() {
    if (senha2.value != senha.value) {
        helpsenha2.innerHTML = 'A senha está incorreta';
        helpsenha2.classList.add('errado');
    } else {
        helpsenha2.innerHTML = '';
        helpsenha2.classList.remove('errado');
        return true;
    }
}