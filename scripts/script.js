let jogadaRound = 0;
let cartas = Number(prompt("Com quantas cartas será o seu jogo?"));
while((cartas%2) !== 0 || cartas < 4 || cartas > 14){
    cartas = Number(prompt("Com quantas cartas será o seu jogo?"));
}

function colocarCartas(numeroCarta){
    const colocar = document.querySelector(".tabuleiro");
    if(colocar.innerHTML !== null){
        colocar.innerHTML = colocar.innerHTML + `<div class='carta' onclick='virar(${numeroCarta})'><img src='imagens/front.png' alt=''></div>`
    }else{
        colocar.innerHTML = `<div class='carta' onclick='virar(${numeroCarta})'><img src='imagens/front.png' alt=''></div>`
    }
}

for(let i =0 ; i < cartas; i++){
colocarCartas(i);
}

function virar(numeroCarta){
    if(jogadaRound === 0){
        const virado = document.querySelector(`.carta:nth-child(${numeroCarta+1})`)
        virado.classList.add("selecionado");
        jogadaRound++;
    }else if(jogadaRound === 1){
        const virado = document.querySelector(`.carta:nth-child(${numeroCarta+1})`)
        virado.classList.add("selecionado");
        jogadaRound++;
    }else{
        for(let i=0; i <2; i++){
        const reset = document.querySelector(".selecionado")
        reset.classList.remove("selecionado");
        }
        jogadaRound = 0;
    }
}

