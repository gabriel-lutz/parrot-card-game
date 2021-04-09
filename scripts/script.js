let tiposCartasTotal = ["imagens/bobrossparrot.gif","imagens/explodyparrot.gif", 
                        "imagens/fiestaparrot.gif", "imagens/metalparrot.gif",
                        "imagens/revertitparrot.gif", "imagens/tripletsparrot.gif",
                        "imagens/unicornparrot.gif" ];
const parCartas = ["A", "B", "C", "D", "E", "F", "G"];
let divEmbaralhada = [];
let par1;
let par2;
let cartaClicada1;
let cartaClicada2;
let numeroJogadas = 0;
let jogadaRound = 0;
let segundos = 0;
let id = 0;
let atualiza = document.querySelector(".contador");
let cartas = Number(prompt("Com quantas cartas será o seu jogo?"));
iniciarJogo();

function iniciarJogo(){
    segundos = 0;
    if(cartas === 0){
        const colocar = document.querySelector(".tabuleiro");
        colocar.innerHTML = "";
        divEmbaralhada = [];
        const telaFimDeJogo = document.querySelector(".fim-de-jogo");
        telaFimDeJogo.classList.remove("visivel");
    }
    while((cartas%2) !== 0 || cartas < 4 || cartas > 14){
        cartas = Number(prompt("Com quantas cartas será o seu jogo?"));
    }

    id = setInterval(incrementa, 1000);
    for(let i =0 ; i < cartas/2; i++){
        colocarCartasDiv(tiposCartasTotal[i], parCartas[i]);
    }
    divEmbaralhada.sort(comparador)
    colocarCartas();
}

function colocarCartasDiv(endereco, par){
    for(let i = 0; i<2; i++){
        divEmbaralhada.push(`<div class='carta' onclick='virar(this, "${par}")'>
                                <div class='layout'>
                                    <img src='imagens/front.png' alt=''>
                                </div>
                                <div class='verso-invisivel layout'>
                                    <img src='${endereco}' alt=''>
                                </div>
                            </div>`);
    }  
}

function colocarCartas(){
    const colocar = document.querySelector(".tabuleiro");
    colocar.innerHTML =  divEmbaralhada.join("");
}

function virar(cartaClicada, parClicado){
    if(jogadaRound === 0){
        cartaClicada1 = cartaClicada;     
        cartaClicada.classList.add("selecionado");
        cartaClicada1.removeAttribute("onclick");
        const desviraFrente = cartaClicada1.querySelector("div:nth-child(1)");
        const viraVerso = cartaClicada1.querySelector("div:nth-child(2)");
        desviraFrente.classList.add("frente");
        viraVerso.classList.remove("verso-invisivel");
        viraVerso.classList.add("verso");
        jogadaRound++;
        par1 = parClicado;
        numeroJogadas++;
    }else{ 
        cartaClicada2 = cartaClicada
        cartaClicada.classList.add("selecionado");
        cartaClicada2.removeAttribute("onclick");
        const desviraFrente = cartaClicada2.querySelector("div:nth-child(1)");
        const viraVerso = cartaClicada2.querySelector("div:nth-child(2)");
        desviraFrente.classList.add("frente");
        viraVerso.classList.remove("verso-invisivel");
        viraVerso.classList.add("verso");
        jogadaRound++;
        par2 = parClicado;
        numeroJogadas++;   
        if(jogadaRound ===2 && par1 === par2){
            cartaClicada1.classList.add("certo");
            cartaClicada1.classList.remove("selecionado");
            cartaClicada2.classList.add("certo");
            cartaClicada2.classList.remove("selecionado");
            jogadaRound = 0;
        }else{     
            delay(par1, par2, cartaClicada1, cartaClicada2)
        }
    }
    const fim = document.querySelectorAll(".certo");
    if(fim.length === cartas){
        clearInterval(id);
        fimDeJogo()
    }
}

function delay(par1Old, par2Old, cartaClicada1Old, cartaClicada2Old){
    setTimeout(viraCartaNovamente, 1000, par1Old, par2Old, cartaClicada1Old, cartaClicada2Old);
}

function viraCartaNovamente(par1Old, par2Old, cartaClicada1Old, cartaClicada2Old){
    for(let i=0; i <2; i++){
       
        if(i===0){
            cartaClicada1Old.setAttribute("onclick", `virar(this, "${par1Old}")`)
            cartaClicada1Old.classList.remove("selecionado");
            const resetaFrente = cartaClicada1Old.querySelector(`div:nth-child(1)`);
            const resetaVerso = cartaClicada1Old.querySelector(`div:nth-child(2)`);
            resetaFrente.classList.remove("frente");
            resetaVerso.classList.remove("verso");
            resetaVerso.classList.add("verso-invisivel");;    
        }else{
            cartaClicada2Old.setAttribute("onclick", `virar(this, "${par2Old}")`)
            cartaClicada2Old.classList.remove("selecionado");
            const resetaFrente = cartaClicada2Old.querySelector(`div:nth-child(1)`);
            const resetaVerso = cartaClicada2Old.querySelector(`div:nth-child(2)`);
            resetaFrente.classList.remove("frente");
            resetaVerso.classList.remove("verso");
            resetaVerso.classList.add("verso-invisivel");;
        }
    }
    jogadaRound = 0;
}

function fimDeJogo(){
    cartas = 0;
    const substituiJogadas = document.querySelector(".jogadas");
    substituiJogadas.innerHTML = `${numeroJogadas/2}`;
    const substituiSegundos = document.querySelector(".segundos");
    substituiSegundos.innerHTML = `${segundos}`;
    const telaFimDeJogo = document.querySelector(".fim-de-jogo");
    telaFimDeJogo.classList.add("visivel");
    numeroJogadas = 0
    cartaClicada1 = "";
    cartaClicada2 = "";
}

function incrementa() {
    segundos++;
    atualiza.innerHTML = segundos;
}

function comparador(){
    return Math.random() - 0.5;
}

