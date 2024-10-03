const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"Você gosta da Inteligencia Artificial?",
        alternativas:[{
            texto:"sim",
            afirmaçâo:"sim,porque me ajudar a me informar  "
        },
       { texto:"Nâo",
        afirmaçâo:"Nâo,pois e dificil de mexer"
    }
    ]
    },
    {
        enunciado:"Você sabe ultilizar a internet de modo adequado?",
        alternativas:[{
            texto:"sim",
            afirmaçâo:"sim,pois sei ultilizar de modo essencial"
        },
      {  texto:"Nâo",
        afirmaçâo:"Nâo,pois de modo denecessaro"}
    ]
    
    },
    {
        enunciado:"Você sabe mexer com as tecnilogia nova? ",
        alternativas:[{
            texto:"sim",
            afirmaçâo:"sim,pois faço cursinho de tecnologia"
        },
       { texto:"nao",
        afirmaçâo:"nâo,pois nao sei o basico da tecnologia"}
    ]
    },
    


    

]
let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;  
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
mostraPergunta();