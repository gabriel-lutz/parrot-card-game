
let cartas = Number(prompt("Com quantas cartas será o seu jogo?"));
while((cartas%2) !== 0 || cartas < 4 || cartas > 14){
    cartas = Number(prompt("Com quantas cartas será o seu jogo?"));
}

function colocarCartas(){
    const colocar = document.querySelector(".tabuleiro");
    if(colocar.innerHTML !== null){
        colocar.innerHTML = colocar.innerHTML + "<div class='card'><img src='imagens/front.png' alt=''></div>"
    }else{
        colocar.innerHTML = "<div class='card'><img src='imagens/front.png' alt=''></div>"
    }
}

for(let i =0 ; i < cartas; i++){
colocarCartas();
}