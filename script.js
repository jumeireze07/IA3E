const caixaPrincipal=document.querySelector('caixa-principal');
const caixaPergunta=document.querySelector('caixa-pergunta');
const caixaResultado=document.querySelector('caixa-resultado');
const caixaAlternativa=document.querySelector('caixa-alternativa');

const pergunta=[
    {
        enunciado:"Pergunta 1",
        Alternativa:["alternativa 1","Alternativa 2" ]
    },

    {
        enunciado:"Pergunta 2",
        Alternativa:["alternativa 1","Alternativa 2" ]
    },
    {
        enunciado:"Pergunta 3",
        Alternativa:["alternativa 1","Alternativa 2" ]  
    }
    ]       
    let posicao= 0;
    let perguntaAtual;

    function mostrapergunta(){
        
    }