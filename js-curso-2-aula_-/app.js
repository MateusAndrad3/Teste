let listaDeNumerosSorteados = []
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);
let tentativa = 1;

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}
function MesagemInicial() {
    exibirTextoNaTela('h1','Adivinhe o número secreto');
    exibirTextoNaTela('p', `Escolha um número de 1 a ${numeroLimite}`);
}
MesagemInicial()
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!!!');
        let palavraTentativa = tentativa > 1 ? 'tentativas':'tentativa'
        let mensagemTentativas = `Muito bem você acertou o número secreto em ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }  else {
               if (chute < numeroSecreto) {
            exibirTextoNaTela('h1','Quase lá');
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
        } else {
            exibirTextoNaTela('h1','Por pouco');
            exibirTextoNaTela('p',`O número secreto é menor que ${chute}` );
        } tentativa++;
          limparCampo();        
        }
                       
    }
 

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let qtdElementosDaLista = listaDeNumerosSorteados.length
    if(qtdElementosDaLista == numeroLimite) {
        listaDeNumerosSorteados = []
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido;
    }
    
    }
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto);
    limparCampo();
    tentativa = 1;
    MesagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}