var j1 = prompt("Insira o nome do jogador 1: ");
var j2 = prompt("Insira o nome do jogador 2: ");
var nomep1 = document.getElementById('nome-p1');
var nomep2 = document.getElementById('nome-p2');
var placarp1 = document.getElementById('placar-p1');
var placarp2 = document.getElementById('placar-p2');
pontosp1 = 0;
pontosp2 = 0;
nomep1.innerHTML = j1;
nomep2.innerHTML = j2;


var p1n = 0;
var p2n = 0;
/* Jogador 1 */
function pedra() {
    p1n = 1;
}
function papel() {
    p1n = 3;
}
function tesoura() {
    p1n = 2;
}
/* Jogador 2 */
function pedra2() {
    p2n = 1;
}
function papel2() {

    p2n = 3;
}
function tesoura2() {

    p2n = 2;
}

function resultado() {
    if ((p1n == 1) && (p2n == 2)) {

        pontosp1 = pontosp1 + 01;
        placarp1.innerHTML = pontosp1;
        p1n = 0;
        p2n = 0;
    }else if ((p1n == 2) && (p2n == 3) ){
        pontosp1 = pontosp1 + 1;
        placarp1.innerHTML = pontosp1;
        p1n = 0;
        p2n = 0;
    }else if ((p1n == 3) && (p2n == 1)) {
        pontosp1 = pontosp1 + 1;
        placarp1.innerHTML = pontosp1;
        p1n = 0;
        p2n = 0;
    }/* Ganhos jogador 2 */
    else if  ((p2n == 1) && (p1n == 2)) {
        pontosp2 = pontosp2 + 1;
        placarp2.innerHTML = pontosp2;
        p1n = 0;
        p2n = 0;
    }else if ((p2n == 2) && (p1n == 3) ){
        pontosp2 = pontosp2 + 1;
        placarp2.innerHTML = pontosp2;
        p1n = 0;
        p2n = 0;
    }else if ((p2n == 3) && (p1n == 1)) {
        pontosp2 = pontosp2 + 1;
        placarp2.innerHTML = pontosp2;
        p1n = 0;
        p2n = 0;
    }else if ((p1n == 1) && (p2n == 1)) {
        alert("EMPATE");
        p1n = 0;
        p2n = 0;
    }else if ((p1n == 2) && (p2n == 2)) {
        alert("EMPATE");
        p1n = 0;
        p2n = 0;
    }else if ((p1n == 3) && (p2n == 3)) {
        alert("EMPATE");
        p1n = 0;
        p2n = 0;
    }else if ((p1n == 0) && (p2n == 0)) {
        alert("Nenhum dos jogadores selecionaram uma opção.");
    }else if (p1n == 0) {
        alert("O jogador: " + j1 + " precisa selecionar uma opção.");
    }else if (p2n == 0) {
        alert("O jogador: " + j2 + " precisa selecionar uma opção.");
    }
}
function resetar() {
    alert("Você resetou os dados do jogadores: " + j1 + " e " + j2 + " Foram resetados");
    p1n = 0;
    p2n = 0;
    pontosp1 = 0;
    pontosp2 = 0;
    placarp1.innerHTML = 0;
    placarp2.innerHTML = 0;
    j1 = prompt("Insira o nome do jogador 1: ");
    j2 = prompt("Insira o nome do jogador 2: ");
    nomep1.innerHTML = j1;
    nomep2.innerHTML = j2;
}