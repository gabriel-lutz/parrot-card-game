let jogadaRound = 0;
let tiposCartasTotal = ["imagens/bobrossparrot.gif","imagens/explodyparrot.gif", 
                        "imagens/fiestaparrot.gif", "imagens/metalparrot.gif",
                        "imagens/revertitparrot.gif", "imagens/tripletsparrot.gif",
                        "imagens/unicornparrot.gif" ];
const parCartas = ["A", "B", "C", "D", "E", "F", "G"];
let divEmbaralhada = [];

let cartas = Number(prompt("Com quantas cartas será o seu jogo?"));
while((cartas%2) !== 0 || cartas < 4 || cartas > 14){
    cartas = Number(prompt("Com quantas cartas será o seu jogo?"));
}

for(let i =0 ; i < cartas/2; i++){
    colocarCartasDiv(tiposCartasTotal[i], parCartas[i]);
}
divEmbaralhada.sort(comparador)
alert(divEmbaralhada)
colocarCartas();

function colocarCartasDiv(endereco, par){
    divEmbaralhada.push(`<div class='carta ${par}' onclick='virar(this)'><img src='${endereco}' alt=''></div>`)
    divEmbaralhada.push(`<div class='carta ${par}' onclick='virar(this)'><img src='${endereco}' alt=''></div>`)
}

function colocarCartas(){
    const colocar = document.querySelector(".tabuleiro");
    colocar.innerHTML =  divEmbaralhada;
}

function virar(numeroCarta){
    if(jogadaRound === 0){     
        numeroCarta.classList.add("selecionado");
        jogadaRound++;
    }else{ 
        numeroCarta.classList.add("selecionado");
        jogadaRound++;
    }
        if(jogadaRound === 2){               
            setTimeout(function(){
                for(let i=0; i <2; i++){
                const reset = document.querySelector(".selecionado")
                reset.classList.remove("selecionado");
                }
                jogadaRound = 0;
        }, 1000)
    }
}


function comparador(){
    return Math.random() - 0.5;
}


