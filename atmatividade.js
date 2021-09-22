var saldo = 500; 
var nome;
var senha;
var id;

function login() {

    nome = prompt(('Informe seu nome:'))
    alert (`Olá ${nome}, seja bem vindo!`)

}

function inicio() {

    var escolha = parseInt(prompt('Selecione uma opção 1.) Saldo || 2.) Extrato || 3.) Saque || 4.) Depósito || 5.) Transferência || 6.) Sair'));

switch(escolha) {
    case 1: versaldo();
    break;
    case 2: verextrato();
    break;
    case 3: fazersaque();
    break;
    case 4: fazerdeposito();
    break;
    case 5: fazertransferencia();
    break;
    case 6: sair();
    break;
    default: alert(`${nome}, informe um número de 1 a 6.`);
    inicio();
}

}

function versaldo() {
    alert(`${nome}, seu saldo atual é de ${saldo}`);
    inicio();
}

function fazerdeposito() {
    var deposito = parseFloat(prompt('Qual o valor para depósito?'));

    if (isNaN(deposito) || deposito === '' || deposito <= 0) {
        alert('Por favor, informe um número válido:');
        fazerdeposito();

    } else {

        senha = prompt(`Qual a senha?`)
       
        if (senha == 3589) {
            saldo += deposito;
            
        } else {
            alert(`Senha inválida`)
            fazerdeposito();
        }

        versaldo();
    }

    }

function fazersaque() {

    var saque = parseFloat(prompt(`Qual valor deseja sacar ${nome}?`));

    if (isNaN(saque) || saque === '' || saque <= 0 || saque >= saldo) {
        alert('Por favor, informe um número válido e/ou informe um valor que tenha disponível em seu saldo.');
        fazersaque();
    } 
    else { 

        senha = prompt(`Qual a senha?`)
       
        if (senha == 3589) {
            saldo -= saque;
    

        } else {
            alert(`Senha inválida`)
            fazersaque();
        } 
    
        versaldo();
    }

}

function fazertransferencia() {
    var id = (prompt(`Informe a ID de quem receberá a transferência:`));

    if (isNaN(id) || id === "" || id <= 0) {
    alert(`Por favor, insira um número válido:`);
    fazertransferencia();
    }

    var transferencia = parseFloat(prompt('Valor da tranferência:'));

    if (isNaN(transferencia) || transferencia === "" || transferencia <= 0 || transferencia >= saldo) {
        alert(`Por favor, insira um número válido e/ou um valor que tenha disponível em seu saldo.`)
        fazertransferencia();
    } else {

        
        senha = prompt(`Qual a senha?`)
       
        if (senha == 3589) {
            saldo -= transferencia;
            alert(`Um valor de ${transferencia} foi tranferido para o ID: ${id}`);
        } else {
            alert(`Senha inválida`)
            fazertransferencia();
        } 

        versaldo();
    
    }
}

function verextrato() {
    alert(`EXTRATO BANCÁRIO de ${nome}:
    Saldo --------- R$300,00 foram retirados ontem às 15:00.
    Depósito --------- R$612,95 foram depositados hoje às 8:10.
    Transferência --------- R$110,00 foram transferidos pra o ID: 143256 hoje ás 10:30.
    
    Jordan-1-Branco/Nike Store --------- Valor de R$994,99.
    Notebook-Gamer / Americanas --------- Valor de R$8.999,99.
    Skate-LongBoard / Galeria do Rock --------- Valor de R$840,30.
    Iphone-X / Casas Bahia --------- Valor de R$3.799,99.
    Ford-Mustang-Mach-1-2020 / Ford --------- Valor de R$389.999,00.
    Óculos-Ray-Ban / Ray-Ban --------- Valor de R$500,00.`);
    inicio();
    
}


function sair() {

    var confirma = confirm(`Você deseja sair?`);
    if (confirma) {
        alert(`Foi um prazer ter você aqui ${nome}!`);
        window.close();
    } else {
        inicio();
    }
}

login();
inicio();