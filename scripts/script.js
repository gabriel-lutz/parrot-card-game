let jogadaRound = 0;
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
let cartas = Number(prompt("Com quantas cartas será o seu jogo?"));
iniciarJogo();

function iniciarJogo(){
    if(cartas === 0){
        const colocar = document.querySelector(".tabuleiro");
        colocar.innerHTML = ""
        divEmbaralhada.length = 0;
        const telaFimDeJogo = document.querySelector(".fim-de-jogo")
        telaFimDeJogo.classList.remove("visivel")
    }


    while((cartas%2) !== 0 || cartas < 4 || cartas > 14){
        cartas = Number(prompt("Com quantas cartas será o seu jogo?"));
    }

    

    for(let i =0 ; i < cartas/2; i++){
        colocarCartasDiv(tiposCartasTotal[i], parCartas[i]);
    }
    divEmbaralhada.sort(comparador)
    colocarCartas();
}

function colocarCartasDiv(endereco, par){
    divEmbaralhada.push(`<div class='carta' onclick='virar(this, "${par}")'><div class='layout'><img src='imagens/front.png' alt=''></div><div class='verso-invisivel layout'><img src='${endereco}' alt=''></div></div>`)  
    divEmbaralhada.push(`<div class='carta' onclick='virar(this, "${par}")'><div class='layout'><img src='imagens/front.png' alt=''></div><div class='verso-invisivel layout'><img src='${endereco}' alt=''></div></div>`)
}

function colocarCartas(){
    const colocar = document.querySelector(".tabuleiro");
    colocar.innerHTML =  divEmbaralhada.join("");
}

function virar(cartaClicada, parClicado){
    if(jogadaRound === 0){
        cartaClicada1 = cartaClicada;     
        cartaClicada.classList.add("selecionado");
        const desviraFrente = cartaClicada1.querySelector("div:nth-child(1)")
        const viraVerso = cartaClicada1.querySelector("div:nth-child(2)")
        desviraFrente.classList.add("frente")
        viraVerso.classList.remove("verso-invisivel")
        viraVerso.classList.add("verso")
        jogadaRound++;
        par1 = parClicado;
        numeroJogadas++;
    }else{ 
        cartaClicada2 = cartaClicada
        cartaClicada.classList.add("selecionado");
        const desviraFrente = cartaClicada2.querySelector("div:nth-child(1)")
        const viraVerso = cartaClicada2.querySelector("div:nth-child(2)")
        desviraFrente.classList.add("frente")
        viraVerso.classList.remove("verso-invisivel")
        viraVerso.classList.add("verso")
        jogadaRound++;
        par2 = parClicado;
        numeroJogadas++;   
        if(jogadaRound ===2 && par1 === par2){
            cartaClicada1.classList.add("certo")
            cartaClicada1.classList.remove("selecionado")
            cartaClicada1.removeAttribute("onclick")
            cartaClicada2.classList.add("certo")
            cartaClicada2.classList.remove("selecionado")
            cartaClicada2.removeAttribute("onclick")
            jogadaRound = 0;
        }else{            
            setTimeout(viraCartaNovamente, 1000)
        }
    }
    const fim = document.querySelectorAll(".certo");
    if(fim.length === cartas){
        fimDeJogo()
        
    }
}

function viraCartaNovamente(){
    for(let i=0; i <2; i++){
    const reset = document.querySelector(".selecionado")
    reset.classList.remove("selecionado");
    const resetaFrente = reset.querySelector(`div:nth-child(1)`)
    const resetaVerso = reset.querySelector(`div:nth-child(2)`)
    resetaFrente.classList.remove("frente")
    resetaVerso.classList.remove("verso")
    resetaVerso.classList.add("verso-invisivel")
    }
    jogadaRound = 0;
}

function fimDeJogo(){
    cartas = 0;
    const telaFimDeJogo = document.querySelector(".fim-de-jogo")
    telaFimDeJogo.classList.add("visivel")
}

function comparador(){
    return Math.random() - 0.5;
}


        let desejado = 0;
      let segundos = 0;
      let id = 0;
      let atualiza = document.querySelector(".contador");
      function contar() {
        desejado = prompt("quantos segundos tera o cotador?");
        atualiza.innerHTML = segundos;
        id = setInterval(incrementa, 1000);
      }

      function incrementa() {
        if (segundos < desejado) {
          segundos++;
          atualiza.innerHTML = segundos;
        } else {
          alert("O jantar está pronto");
          clearInterval(id);
        }
      }