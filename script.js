const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado: "Você gosta de animais?",
        alternativas: [{
            texto: "sim,eu amo bichos",
            afirmação: "sim,porque os animais sao amigos dos homens  "
        },
        {
            texto: "Nâo,gosto de bichos",
            afirmação: "Nâo,porque tenho alergia"
        }
        ]
    },
    {
        enunciado: "Gosta de cachorro?",
        alternativas: [{
            texto: "sim,amo cachorro",
            afirmação: "sim,porque amo fazer carinhos no dog"
        },
        {
            texto: "Nâo",
            afirmação: "Nâo,porque ele fica lambendo"
        }
        ]

    },
    {
        enunciado: "Você sabe mexer com as tecnilogia nova? ",
        alternativas: [{
            texto: "sim",
            afirmação: "sim,pois faço cursinho de tecnologia"
        },
        {
            texto: "nao",
            afirmação: "nâo,pois nao sei o basico da tecnologia"
        }
        ]
    }
]
let posicao = 0;
let perguntaAtual;
let respostas = "";


function mostraPergunta() {
    if (posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  () => respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Confira suas respostas: ";
    textoResultado.textContent = respostas; 
    caixaAlternativa.textContent = "";
}
mostraPergunta();