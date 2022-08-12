
var vidaOp = 200;
var vidaMeuPkm2 = 200;
var debug = 0;
var mochila = 0;
var qtdpocao = 5;
var pkmslot = "";
var qtdspocao = 0;
var qtdmrevive = 0;
var qtdmslot = 0;
var qtdmstone = 0;
var money = 99999;


document.getElementById('escolha-pkm-slot-2').style.display = "none";


document.getElementById('moreslotbtn').disabled = true;
document.getElementById('vida-meu-pkm').disabled = true;

document.getElementById('btn-slot')
document.getElementById('qtd-potion').innerHTML = qtdpocao;
document.getElementById('qtd-spotion').innerHTML = qtdspocao;
document.getElementById('qtd-maxrevive').innerHTML = qtdmrevive;
document.getElementById('qtd-mslot').innerHTML = qtdmslot;
document.getElementById('qtd-mstone').innerHTML = qtdmstone;
document.getElementById('qtd-money').innerHTML = money;

function carregar() {
 document.getElementById('qtd-potion').innerHTML = qtdpocao;
document.getElementById('qtd-spotion').innerHTML = qtdspocao;
document.getElementById('qtd-maxrevive').innerHTML = qtdmrevive;
document.getElementById('qtd-mslot').innerHTML = qtdmslot;
document.getElementById('qtd-mstone').innerHTML = qtdmstone;
document.getElementById('qtd-money').innerHTML = money;
}

document.getElementById('mochila').style.display = "none";


function Ataque1PkmAli() {
    if (pkmJ1 == "charmander") {
        Brasa();
    }else if (pkmJ1 == "pikachu") {
        ChoqueDoTrovao();
    }else if (pkmJ1 == "bulbasaur") {
        FolhaNavalha();
    }else if (pkmJ1 == "squirtle") {
        Surfar();
    }else if (pkmJ1 == "ratata") {
        Mordida();
    }
}
function Ataque2PkmAli() {
    if (pkmJ1 == "charmander") {
        Caudadeferro();
    }else if (pkmJ1 == "pikachu") {
        Caudadeferro();
    }else if (pkmJ1 == "bulbasaur") {
        RaioSolar();
    }else if (pkmJ1 == "squirtle") {
        PistolaDeAgua();
    }else if (pkmJ1 == "ratata") {
        Dentada();
    }
}
function Ataque3PkmAli() {
    if (pkmJ1 == "charmander") {
        Mordida();
    }else if (pkmJ1 == "pikachu") {
        Investida();
    }else if (pkmJ1 == "bulbasaur") {
        PoDoSono();
    }else if (pkmJ1 == "squirtle") {
        CanhaoDeAgua();
    }else if (pkmJ1 == "ratata") {
         Mordida();
    }
}
function Ataque4PkmAli() {
    if (pkmJ1 == "charmander") {
        CaraFeia();
    }else if (pkmJ1 == "pikachu") {
        Paralisador();
    }else if (pkmJ1 == "bulbasaur") {
        GigaDrain();
    }else if (pkmJ1 == "squirtle") {
        EscudoDeCasco();
    }else if (pkmJ1 == "ratata") {
        Cabecada();
    }
}


// Ataques do pokemon slot


function Ataque1Pkmslot() {
    if (pkmslot == "charmander") {
        Brasa();
    }else if (pkmslot == "pikachu") {
        ChoqueDoTrovao();
    }else if (pkmslot == "bulbasaur") {
        FolhaNavalha();
    }else if (pkmslot == "squirtle") {
        Surfar();
    }else if (pkmslot == "ratata") {
        Mordida();
    }
}
function Ataque2Pkmslot() {
    if (pkmslot == "charmander") {
        Caudadeferro();
    }else if (pkmslot == "pikachu") {
        Caudadeferro();
    }else if (pkmslot == "bulbasaur") {
        RaioSolar();
    }else if (pkmslot == "squirtle") {
        PistolaDeAgua();
    }else if (pkmslot == "ratata") {
        Dentada();
    }
}
function Ataque3Pkmslot() {
    if (pkmslot == "charmander") {
        Mordida();
    }else if (pkmslot == "pikachu") {
        Investida();
    }else if (pkmslot == "bulbasaur") {
        PoDoSono();
    }else if (pkmslot == "squirtle") {
        CanhaoDeAgua();
    }else if (pkmslot == "ratata") {
         Mordida();
    }
}
function Ataque4Pkmslot() {
    if (pkmslot == "charmander") {
        CaraFeia();
    }else if (pkmslot == "pikachu") {
        Paralisador();
    }else if (pkmslot == "bulbasaur") {
        GigaDrain();
    }else if (pkmslot == "squirtle") {
        EscudoDeCasco();
    }else if (pkmslot == "ratata") {
        Cabecada();
    }
}

//

document.getElementById('charmanderJ2').disabled = true;
document.getElementById("charmander-icon-j2").style.filter = "grayscale(100%)";
document.getElementById('pikachuJ2').disabled = true;
document.getElementById("pikachu-icon-j2").style.filter = "grayscale(100%)";
document.getElementById('bulbasaurJ2').disabled = true;
document.getElementById("bulbasaur-icon-j2").style.filter = "grayscale(100%)";
document.getElementById('squirtleJ2').disabled = true;
document.getElementById("squirtle-icon-j2").style.filter = "grayscale(100%)";
document.getElementById('ratataJ2').disabled = true;
document.getElementById("ratata-icon-j2").style.filter = "grayscale(100%)";

var jogador1 = prompt("[Jogador1]\nInforme o seu nome:");
var jogador2 = prompt("[Jogador2]\nInforme o seu nome:");

if (jogador1 == "") {
    alert("Você precisa informar o nome do jogador 1")
    var jogador1 = prompt("[Jogador1]\nInforme o seu nome:");
}

if (jogador2 == "") {
    alert("Você precisa informar o nome do jogador 2")
    var jogador2 = prompt("[Jogador2]\nInforme o seu nome:");
}

document.getElementById("jogador1").innerHTML = jogador1;
document.getElementById("jogador2").innerHTML = jogador2;

// Ocultar 
var ocultar = document.getElementById("campo-batalha");
if (ocultar.style.display === "none") {
    ocultar.style.display = "block";
    
}else {
    ocultar.style.display = "none";
}


var pkmJ1;
var pkmJ2;

function charmanderATK() {
    document.getElementById('ataque1').style = "-webkit-text-stroke-width: 0.5px; -webkit-text-stroke-color: orange;";
    document.getElementById('ataque1').innerHTML = "Brasa";
    document.getElementById('ataque2').innerHTML = "Cauda de ferro";
    document.getElementById('ataque3').innerHTML = "Mordida";
    document.getElementById('ataque4').innerHTML = "Cara feia";
}
function pikachuATK() {
    document.getElementById('ataque1').style = "-webkit-text-stroke-width: 0.5px; -webkit-text-stroke-color: yellow;";
    document.getElementById('ataque1').innerHTML = "Choque do trovão";
    document.getElementById('ataque2').innerHTML = "Cauda de ferro";
    document.getElementById('ataque3').innerHTML = "Investida";
    document.getElementById('ataque4').style = "-webkit-text-stroke-width: 0.5px; -webkit-text-stroke-color: yellow;";
    document.getElementById('ataque4').innerHTML = "Paralisia";
}
function bulbasaurATK() {
    document.getElementById('ataque1').style = "-webkit-text-stroke-width: 0.5px; -webkit-text-stroke-color: green;";
    document.getElementById('ataque1').innerHTML = "Folha navalha";
    document.getElementById('ataque2').style = "-webkit-text-stroke-width: 0.5px; -webkit-text-stroke-color: green;";
    document.getElementById('ataque2').innerHTML = "Raio solar";
    document.getElementById('ataque3').style = "-webkit-text-stroke-width: 0.5px; -webkit-text-stroke-color: green;";
    document.getElementById('ataque3').innerHTML = "Pó do sono";
    document.getElementById('ataque4').style = "-webkit-text-stroke-width: 0.5px; -webkit-text-stroke-color: green;";
    document.getElementById('ataque4').innerHTML = "GigaDrain";
}
function ratataATK() {
    document.getElementById('ataque1').innerHTML = "Ataque rápido";
    document.getElementById('ataque2').innerHTML = "Dentada";
    document.getElementById('ataque3').innerHTML = "Mordida";
    document.getElementById('ataque4').innerHTML = "Cabeçada";
}
function squirtleATK() {
    document.getElementById('ataque1').style = "-webkit-text-stroke-width: 0.5px; -webkit-text-stroke-color: blue;";
    document.getElementById('ataque1').innerHTML = "Surfar";
    document.getElementById('ataque2').style = "-webkit-text-stroke-width: 0.5px; -webkit-text-stroke-color: blue;";
    document.getElementById('ataque2').innerHTML = "Pistola de água";
    document.getElementById('ataque3').style = "-webkit-text-stroke-width: 0.5px; -webkit-text-stroke-color: blue;";
    document.getElementById('ataque3').innerHTML = "Canhão de água";
    document.getElementById('ataque4').style = "-webkit-text-stroke-width: 0.5px; -webkit-text-stroke-color: blue;";
    document.getElementById('ataque4').innerHTML = "Escudo de casco";
}

// ######################################
// #Variáveis dos ataques               #
// ######################################
var opVida = 200;
var brasaCont = 25;
var caudaCont = 25;
var mordidaCont = 25;
var carafeiaCont = 25;
var InvestidaCont = 25;
var paralisadorCont = 23;
var FolhaNavalhaCont = 25;
var RaioSolarCont = 23;
var PoDoSono = 23;
var GigaDrain = 25;
var AtaqueRapido = 25;
var DentadaCont = 23;
var CabecadaCont = 25;
var choqueDoTrovaoCont = 25;
var SurfarCont = 24;
var PistolaDeAguaCont = 24;
var CanhaoDeAguaCont = 24;
var EscudoDeCascoCont = 25;

// #####################################
// #Charmander ATQ                     #
// #####################################
function Brasa(){
if (brasaCont < 1) {
    alert("Você não tem mais poder para utilizar esse ataque");
}else{
    opVida = opVida - 10;
    document.getElementById('vida-oponente').style.width = opVida + "px";
    document.getElementById('logs-acao').innerHTML = pkmJ1 + " utilizou o ataque Brasa e tirou 10 de vida do oponente";
    brasaCont = brasaCont - 1;
    ataqueOponente();
    checkvida();


}
}
function Caudadeferro(){
    if (caudaCont < 1) {
        alert("Você não tem mais poder para utilizar esse ataque");
    }else{
        opVida = opVida - 25;
        document.getElementById('vida-oponente').style.width = opVida + "px";
        document.getElementById('logs-acao').innerHTML = pkmJ1 + " utilizou o cauda de ferro e causou 25 de dano ao oponente";
        caudaCont = caudaCont - 1;
        ataqueOponente();
        checkvida();
    }
}

function Mordida(){
    if (mordidaCont < 1) {
        alert("Você não tem mais poder para utilizar esse ataque");
    }else{
        opVida = opVida - 40;
        document.getElementById('vida-oponente').style.width = opVida + "px";
        document.getElementById('logs-acao').innerHTML = pkmJ1 + " usou mordida e tirou 40 de vida do oponente";
        mordidaCont = mordidaCont - 1;
        ataqueOponente();
        checkvida();

    }
}

function CaraFeia(){
    if (carafeiaCont < 1) {
        alert("Você não tem mais poder para utilizar esse ataque");
    }else{
        opVida = opVida - 0;
        document.getElementById('vida-oponente').style.width = opVida + "px";
        document.getElementById('logs-acao').innerHTML = pkmJ1 + " assustou o pokemon oponente e a sua defesa caiu";
        carafeiaCont = carafeiaCont - 1;
        ataqueOponente();
        checkvida();
    }
}

// #####################################
// #Pikachu ATQ                        #
// #####################################
function ChoqueDoTrovao(){
    if (choqueDoTrovaoCont < 1) {
        alert("Você não tem mais poder para utilizar esse ataque");
    }else{
        opVida = opVida - 10;
        document.getElementById('vida-oponente').style.width = opVida + "px";
        choqueDoTrovaoCont = choqueDoTrovaoCont - 1;
        ataqueOponente();
        checkvida();
        document.getElementById('logs-acao').innerHTML = pkmJ1 + " utilizou o choque do trovao e causou 10 de dano ao oponente";
    }
}

function Investida(){
    if (InvestidaCont < 1) {
        alert("Você não tem mais poder para utilizar esse ataque");
    }else{
        opVida = opVida - 15;
        document.getElementById('vida-oponente').style.width = opVida + "px";
        InvestidaCont = InvestidaCont - 1;
        ataqueOponente();
        checkvida();
        document.getElementById('logs-acao').innerHTML = pkmJ1 + " utilizou a investida e tirou 15 de vida do oponente";
    }
}

function Paralisador(){
    if (paralisadorCont < 1) {
        alert("Você não tem mais poder para utilizar esse ataque");
    }else{
        opVida = opVida - 0;
        document.getElementById('vida-oponente').style.width = opVida + "px";
        paralisadorCont = paralisadorCont - 1;
        document.getElementById('logs-acao').innerHTML = "Pikachu utilizou o Paralisador, agora o oponente está paralisado durante este round\nPP:" + paralisadorCont + "";
        checkvida();
    }
}

// #####################################
// #Bulbasaur ATQ                      #
// #####################################

function FolhaNavalha(){
    if (FolhaNavalhaCont < 1) {
        alert("Você não tem mais poder para utilizar esse ataque");
    }else{
        opVida = opVida - 15;
        document.getElementById('vida-oponente').style.width = opVida + "px";
        FolhaNavalhaCont = FolhaNavalhaCont - 1;
        document.getElementById('logs-acao').innerHTML = pkmJ1 + " utilizou a Folha Navalha e tirou 15 de vida";
        
        ataqueOponente();
        checkvida();

    }
}

function RaioSolar(){
    if (RaioSolarCont < 1) {
        alert("Você não tem mais poder para utilizar esse ataque");
    }else{
        opVida = opVida - 50;
        document.getElementById('vida-oponente').style.width = opVida + "px";
        RaioSolarCont = RaioSolarCont - 1;
        document.getElementById('logs-acao').innerHTML = pkmJ1 + " utilizou o Raio Solar e tirou 50 de vida do oponente";
        ataqueOponente();
        checkvida();

    }
}

function PoDoSono(){
    if (PoDoSonoCont < 1) {
        alert("Você não tem mais poder para utilizar esse ataque");
    }else{
        opVida = opVida - 0;
        document.getElementById('vida-oponente').style.width = opVida + "px";
        PoDoSonoCont = PoDoSonoCont - 1;
        
        ataqueOponente();
        checkvida();
    }
}

function GigaDrain(){
    if (GigaDrainCont < 1) {
        alert("Você não tem mais poder para utilizar esse ataque");
    }else{
        opVida = opVida - 30;
        vidaMeuPkm = vidaMeuPkm + 30;
        document.getElementById('vida-oponente').style.width = opVida + "px";
        document.getElementById('vida-meu-pkm').style.width = vidaMeuPkm + "px";
        GigaDrainCont = GigaDrainCont - 1;
        document.getElementById('logs-acao').innerHTML = pkmJ1 + " utilizou o Giga Drain e tirou 30 de vida do oponente";

        ataqueOponente();
        checkvida();
    }
}

// #####################################
// #Ratata ATQ                         #
// #####################################
function AtaqueRapido(){
    if (AtaqueRapidoCont < 1) {
        alert("Você não tem mais poder para utilizar esse ataque");
    }else{
        opVida = opVida - 15;
        document.getElementById('vida-oponente').style.width = opVida + "px";
        AtaqueRapidoCont = AtaqueRapidoCont - 1;
        document.getElementById('logs-acao').innerHTML = pkmJ1 + " utilizou o Ataque rápido e tirou 15 de vida do oponente";
        ataqueOponente();
        checkvida();
    }
}

function Dentada(){
    if (DentadaCont < 1) {
        alert("Você não tem mais poder para utilizar esse ataque");
    }else{
        opVida = opVida - 30;
        document.getElementById('vida-oponente').style.width = opVida + "px";
        DentadaCont = DentadaCont - 1;
        document.getElementById('logs-acao').innerHTML = pkmJ1 + " utilizou o Dentada e tirou 30 de vida do oponente";
        ataqueOponente();
        checkvida();
    }
}

function Cabecada(){
    if (CabecadaCont < 1) {
        alert("Você não tem mais poder para utilizar esse ataque");
    }else{
        opVida = opVida - 10    ;
        document.getElementById('vida-oponente').style.width = opVida + "px";
        document.getElementById('logs-acao').innerHTML = pkmJ1 + " utilizou o cabecada e tirou 10 de vida do oponente";
        CabecadaCont = CabecadaCont - 1;
        ataqueOponente();
        checkvida();
    }
}

// #####################################
// #Squirtle ATQ                       #
// #####################################
function Surfar(){
    if (SurfarCont < 1) {
        alert("Você não tem mais poder para utilizar esse ataque");
    }else{
        opVida = opVida - 30;
        document.getElementById('vida-oponente').style.width = opVida + "px";
        document.getElementById('logs-acao').innerHTML = pkmJ1 + " utilizou o Surfar e tirou 30 de vida do oponente";
        SurfarCont = SurfarCont - 1;
        ataqueOponente();
        checkvida();
    }
}

function PistolaDeAgua(){
    if (PistolaDeAguaCont < 1) {
        alert("Você não tem mais poder para utilizar esse ataque");
    }else{
        opVida = opVida - 20;
        document.getElementById('vida-oponente').style.width = opVida + "px";
        document.getElementById('logs-acao').innerHTML = pkmJ1 + " utilizou o Pistola de agua e tirou 20 de vida do oponente";
        PistolaDeAguaCont = PistolaDeAguaCont - 1;
        ataqueOponente();
        checkvida();
    }
}

function CanhaoDeAgua(){
    if (CanhaoDeAguaCont < 1) {
        alert("Você não tem mais poder para utilizar esse ataque");
    }else{
        opVida = opVida - 20;
        document.getElementById('vida-oponente').style.width = opVida + "px";
        document.getElementById('logs-acao').innerHTML = pkmJ1 + " utilizou o Canhao da agua e tirou 20 de vida do oponente";
        CanhaoDeAguaCont = CanhaoDeAguaCont - 1;
        ataqueOponente();
        checkvida();
    }
}

function EscudoDeCasco(){
    if (EscudoDeCascoCont < 1) {
        alert("Você não tem mais poder para utilizar esse ataque");
    }else{
        opVida = opVida - 0;
        document.getElementById('vida-oponente').style.width = opVida + "px";
        document.getElementById('logs-acao').innerHTML = pkmJ1 + " utilizou o Escudo de casco e a defesa oponente abaixou";
        EscudoDeCascoCont = EscudoDeCascoCont - 1;
        ataqueOponente();   
        checkvida();
    }
}

// #####################################
// #Escolha de pokemons                #
// #####################################
function charmanderJ1() {
    pkmJ1 = "charmander";
    charmanderATK();
    
    document.getElementById('pkm-seu-escolhido').src = "https://img.pokemondb.net/sprites/black-white/anim/back-normal/charmander.gif";
    document.getElementById('seu-pkm-frente').src = "https://img.pokemondb.net/sprites/go/normal/charmander.png";
    document.getElementById('charmanderJ1').disabled = true;
    document.getElementById("charmander-icon-j1").style.filter = "grayscale(100%)";
    document.getElementById('pikachuJ1').disabled = true;
    document.getElementById("pikachu-icon-j1").style.filter = "grayscale(100%)";
    document.getElementById('bulbasaurJ1').disabled = true;
    document.getElementById("bulbasaur-icon-j1").style.filter = "grayscale(100%)";
    document.getElementById('squirtleJ1').disabled = true;
    document.getElementById("squirtle-icon-j1").style.filter = "grayscale(100%)";
    document.getElementById('ratataJ1').disabled = true;
    document.getElementById("ratata-icon-j1").style.filter = "grayscale(100%)";

    document.getElementById('pikachuJ2').disabled = false;
    document.getElementById("pikachu-icon-j2").style.filter = "grayscale(0%)";
    document.getElementById("charmander-icon-j2").style.filter = "grayscale(100%)";
    document.getElementById('bulbasaurJ2').disabled = false;
    document.getElementById("bulbasaur-icon-j2").style.filter = "grayscale(0%)";
    document.getElementById('squirtleJ2').disabled = false;
    document.getElementById("squirtle-icon-j2").style.filter = "grayscale(0%)";
    document.getElementById('ratataJ2').disabled = false;
    document.getElementById("ratata-icon-j2").style.filter = "grayscale(0%)";
}
function pikachuJ1() {
    pkmJ1 = "pikachu";
    pikachuATK();
    document.getElementById('seu-pkm-frente').src = "https://img.pokemondb.net/sprites/go/normal/pikachu.png";
    document.getElementById('pkm-seu-escolhido').src = "https://img.pokemondb.net/sprites/black-white/anim/back-normal/pikachu.gif";
    document.getElementById('charmanderJ1').disabled = true;
    document.getElementById("charmander-icon-j1").style.filter = "grayscale(100%)";
    document.getElementById('pikachuJ1').disabled = true;
    document.getElementById("pikachu-icon-j1").style.filter = "grayscale(100%)";
    document.getElementById('bulbasaurJ1').disabled = true;
    document.getElementById("bulbasaur-icon-j1").style.filter = "grayscale(100%)";
    document.getElementById('squirtleJ1').disabled = true;
    document.getElementById("squirtle-icon-j1").style.filter = "grayscale(100%)";
    document.getElementById('ratataJ1').disabled = true;
    document.getElementById("ratata-icon-j1").style.filter = "grayscale(100%)";

    document.getElementById("pikachu-icon-j2").style.filter = "grayscale(100%)";
    document.getElementById('charmanderJ2').disabled = false;
    document.getElementById("charmander-icon-j2").style.filter = "grayscale(0%)";
    document.getElementById('bulbasaurJ2').disabled = false;
    document.getElementById("bulbasaur-icon-j2").style.filter = "grayscale(0%)";
    document.getElementById('squirtleJ2').disabled = false;
    document.getElementById("squirtle-icon-j2").style.filter = "grayscale(0%)";
    document.getElementById('ratataJ2').disabled = false;
    document.getElementById("ratata-icon-j2").style.filter = "grayscale(0%)";
}
function bulbasaurJ1() {
    pkmJ1 = "bulbasaur";
    bulbasaurATK();
    document.getElementById('seu-pkm-frente').src = "https://img.pokemondb.net/sprites/go/normal/bulbasaur.png";
    document.getElementById('pkm-seu-escolhido').src = "https://img.pokemondb.net/sprites/black-white/anim/back-normal/bulbasaur.gif";
    document.getElementById('charmanderJ1').disabled = true;
    document.getElementById("charmander-icon-j1").style.filter = "grayscale(100%)";
    document.getElementById('pikachuJ1').disabled = true;
    document.getElementById("pikachu-icon-j1").style.filter = "grayscale(100%)";
    document.getElementById('bulbasaurJ1').disabled = true;
    document.getElementById("bulbasaur-icon-j1").style.filter = "grayscale(100%)";
    document.getElementById('squirtleJ1').disabled = true;
    document.getElementById("squirtle-icon-j1").style.filter = "grayscale(100%)";
    document.getElementById('ratataJ1').disabled = true;
    document.getElementById("ratata-icon-j1").style.filter = "grayscale(100%)";

    document.getElementById('charmanderJ2').disabled = false;
    document.getElementById("charmander-icon-j2").style.filter = "grayscale(0%)";
    document.getElementById("bulbasaur-icon-j2").style.filter = "grayscale(100%)";
    document.getElementById('pikachuJ2').disabled = false;
    document.getElementById("pikachu-icon-j2").style.filter = "grayscale(0%)";
    document.getElementById('squirtleJ2').disabled = false;
    document.getElementById("squirtle-icon-j2").style.filter = "grayscale(0%)";
    document.getElementById('ratataJ2').disabled = false;
    document.getElementById("ratata-icon-j2").style.filter = "grayscale(0%)";
}
function squirtleJ1() {
    pkmJ1 = "squirtle";
    squirtleATK();
    document.getElementById('seu-pkm-frente').src = "https://img.pokemondb.net/sprites/go/normal/squirtle.png";
    document.getElementById('pkm-seu-escolhido').src = "https://img.pokemondb.net/sprites/black-white/anim/back-normal/squirtle.gif";
    document.getElementById('charmanderJ1').disabled = true;
    document.getElementById("charmander-icon-j1").style.filter = "grayscale(100%)";
    document.getElementById('pikachuJ1').disabled = true;
    document.getElementById("pikachu-icon-j1").style.filter = "grayscale(100%)";
    document.getElementById('bulbasaurJ1').disabled = true;
    document.getElementById("bulbasaur-icon-j1").style.filter = "grayscale(100%)";
    document.getElementById('squirtleJ1').disabled = true;
    document.getElementById("squirtle-icon-j1").style.filter = "grayscale(100%)";
    document.getElementById('ratataJ1').disabled = true;
    document.getElementById("ratata-icon-j1").style.filter = "grayscale(100%)";

    document.getElementById("squirtle-icon-j2").style.filter = "grayscale(100%)";
    document.getElementById('charmanderJ2').disabled = false;
    document.getElementById("charmander-icon-j2").style.filter = "grayscale(0%)";
    document.getElementById('pikachuJ2').disabled = false;
    document.getElementById("pikachu-icon-j2").style.filter = "grayscale(0%)";
    document.getElementById('bulbasaurJ2').disabled = false;
    document.getElementById("bulbasaur-icon-j2").style.filter = "grayscale(0%)";
    document.getElementById('ratataJ2').disabled = false;
    document.getElementById("ratata-icon-j2").style.filter = "grayscale(0%)";
}
function ratataJ1() {
    pkmJ1 = "ratata";

    ratataATK();
    document.getElementById('seu-pkm-frente').src = "https://img.pokemondb.net/sprites/go/normal/ratata.png";
    document.getElementById('pkm-seu-escolhido').src = "https://img.pokemondb.net/sprites/black-white/anim/back-normal/rattata.gif";
    document.getElementById('charmanderJ1').disabled = true;
    document.getElementById("charmander-icon-j1").style.filter = "grayscale(100%)";
    document.getElementById('pikachuJ1').disabled = true;
    document.getElementById("pikachu-icon-j1").style.filter = "grayscale(100%)";
    document.getElementById('bulbasaurJ1').disabled = true;
    document.getElementById("bulbasaur-icon-j1").style.filter = "grayscale(100%)";
    document.getElementById('squirtleJ1').disabled = true;
    document.getElementById("squirtle-icon-j1").style.filter = "grayscale(100%)";
    document.getElementById('ratataJ1').disabled = true;
    document.getElementById("ratata-icon-j1").style.filter = "grayscale(100%)";

    document.getElementById("ratata-icon-j2").style.filter = "grayscale(100%)";
    document.getElementById('charmanderJ2').disabled = false;
    document.getElementById("charmander-icon-j2").style.filter = "grayscale(0%)";
    document.getElementById('pikachuJ2').disabled = false;
    document.getElementById("pikachu-icon-j2").style.filter = "grayscale(0%)";
    document.getElementById('bulbasaurJ2').disabled = false;
    document.getElementById("bulbasaur-icon-j2").style.filter = "grayscale(0%)";
    document.getElementById('squirtleJ2').disabled = false;
    document.getElementById("squirtle-icon-j2").style.filter = "grayscale(0%)";
}   

function aparecer() {
    var ocultarMenu;

    if (document.getElementById('opcao').style.display === "none") {
        document.getElementById('opcao').style.display = "block"
    }else{
        document.getElementById('opcao').style.display = "none";
    }
    
    if (document.getElementById('loja').style.display === "none") {
        document.getElementById('loja').style.display = "block"
    }else{
        document.getElementById('loja').style.display = "none";
    }

    if (document.getElementById('campo-batalha').style.display === "") {
        document.getElementById('campo-batalha').style.display = "";
        
    }else{
        document.getElementById('campo-batalha').style.display = "";
    }
}
function aparecerCampo() {
    var display = document.getElementById('campo-batalha').style.display;
    if(display == "none")
        document.getElementById('campo-batalha').style.display = 'block';
    else
        document.getElementById('campo-batalha').style.display = 'none';
}

//
function charmanderJ2() {
    pkmJ2 = "charmander";
    aparecer();
    document.getElementById('pkm-op-escolhido').src = "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif";
    document.getElementById('pkm-op-nome').innerHTML = "Charmander";
    document.getElementById('charmanderJ2').disabled = true;
    document.getElementById('pikachuJ2').disabled = true;
    document.getElementById('bulbasaurJ2').disabled = true;
    document.getElementById('squirtleJ2').disabled = true;
    document.getElementById('ratataJ2').disabled = true;


}
function pikachuJ2() {
    pkmJ2 = "pikachu";
    aparecer();
    document.getElementById('charmanderJ2').disabled = true;
    document.getElementById('pkm-op-escolhido').src = "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif";
    document.getElementById('pkm-op-nome').innerHTML = "Pikachu";
    document.getElementById('pikachuJ2').disabled = true;
    document.getElementById('bulbasaurJ2').disabled = true;
    document.getElementById('squirtleJ2').disabled = true;
    document.getElementById('ratataJ2').disabled = true;


}
function bulbasaurJ2() {
    pkmJ2 = "bulbasaur";
    aparecer();
    document.getElementById('pkm-op-escolhido').src = "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif";
    document.getElementById('pkm-op-nome').innerHTML = "Bulbasaur";
    document.getElementById('charmanderJ2').disabled = true;
    document.getElementById('pikachuJ2').disabled = true;
    document.getElementById('bulbasaurJ2').disabled = true;
    document.getElementById('squirtleJ2').disabled = true;
    document.getElementById('ratataJ2').disabled = true;

}
function squirtleJ2() {
    pkmJ2 = "squirtle";
    aparecer();
    document.getElementById('pkm-op-escolhido').src = "https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif";
    document.getElementById('pkm-op-nome').innerHTML = "Squirtle";
    document.getElementById('charmanderJ2').disabled = true;
    document.getElementById('pikachuJ2').disabled = true;
    document.getElementById('bulbasaurJ2').disabled = true;
    document.getElementById('squirtleJ2').disabled = true;
    document.getElementById('ratataJ2').disabled = true;


}
function ratataJ2() {
    pkmJ2 = "ratata";
    aparecer();
    document.getElementById('pkm-op-escolhido').src = "https://img.pokemondb.net/sprites/black-white/anim/normal/rattata.gif";
    document.getElementById('pkm-op-nome').innerHTML = "Ratata";
    document.getElementById('charmanderJ2').disabled = true;
    document.getElementById('pikachuJ2').disabled = true;
    document.getElementById('bulbasaurJ2').disabled = true;
    document.getElementById('squirtleJ2').disabled = true;
    document.getElementById('ratataJ2').disabled = true;
}

// #####################################
// #OPONENTE ATAQUE                    #
// #####################################
var vidaMeuPkm = 200;


function BrasaJ2(){
        vidaMeuPkm = vidaMeuPkm - 10;
        document.getElementById('vida-meu-pkm').style.width = vidaMeuPkm + "px";
    
    }
    function CaudadeferroJ2(){
            vidaMeuPkm = vidaMeuPkm - 25;
            document.getElementById('vida-meu-pkm').style.width = vidaMeuPkm + "px";
        
    }
    
    function MordidaJ2(){
            vidaMeuPkm = vidaMeuPkm - 40;
            document.getElementById('vida-meu-pkm').style.width = vidaMeuPkm + "px";
        
    }
    
    function CaraFeiaJ2(){
            vidaMeuPkm = vidaMeuPkm - 0;
            document.getElementById('vida-meu-pkm').style.width = vidaMeuPkm + "px";
        
    }
    
    // #####################################
    // #Pikachu ATQ                        #
    // #####################################
    function ChoqueDoTrovaoJ2(){
            vidaMeuPkm = vidaMeuPkm - 10;
            document.getElementById('vida-meu-pkm').style.width = vidaMeuPkm + "px";
    }
    
    function InvestidaJ2(){
            vidaMeuPkm = vidaMeuPkm - 15;
            document.getElementById('vida-meu-pkm').style.width = vidaMeuPkm + "px";
        
    }
    
    function ParalisadorJ2(){
            vidaMeuPkm = vidaMeuPkm - 0;
            document.getElementById('vida-meu-pkm').style.width = vidaMeuPkm + "px";
        
    }
    
    // #####################################
    // #Bulbasaur ATQ                      #
    // #####################################
    
    function FolhaNavalhaJ2(){
            vidaMeuPkm = vidaMeuPkm - 15;
            document.getElementById('vida-meu-pkm').style.width = vidaMeuPkm + "px";
        
    }
    
    function RaioSolarJ2(){
            vidaMeuPkm = vidaMeuPkm - 50;
            document.getElementById('vida-meu-pkm').style.width = vidaMeuPkm + "px";
        
    }
    
    function PoDoSonoJ2(){
            vidaMeuPkm = vidaMeuPkm - 0;
            document.getElementById('vida-meu-pkm').style.width = vidaMeuPkm + "px";
        
    }
    
    function GigaDrainJ2(){
            vidaMeuPkm = vidaMeuPkm - 10;
            document.getElementById('vida-meu-pkm').style.width = vidaMeuPkm + "px";
        
    }
    
    // #####################################
    // #Ratata ATQ                         #
    // #####################################
    function AtaqueRapidoJ2(){
            vidaMeuPkm = vidaMeuPkm - 15;
            document.getElementById('vida-meu-pkm').style.width = vidaMeuPkm + "px";
        
    }
    
    function DentadaJ2(){
            vidaMeuPkm = vidaMeuPkm - 30;
            document.getElementById('vida-meu-pkm').style.width = vidaMeuPkm + "px";
        
    }
    
    function CabecadaJ2(){
            vidaMeuPkm = vidaMeuPkm - 20;
            document.getElementById('vida-meu-pkm').style.width = vidaMeuPkm + "px";
        
    }
    
    // #####################################
    // #Squirtle ATQ                       #
    // #####################################
    function SurfarJ2(){
            vidaMeuPkm = vidaMeuPkm - 30;
            document.getElementById('vida-meu-pkm').style.width = vidaMeuPkm + "px";
        
    }
    
    function PistolaDeAguaJ2(){
            vidaMeuPkm = vidaMeuPkm - 20;
            document.getElementById('vida-meu-pkm').style.width = vidaMeuPkm + "px";
        
    }
    
    function CanhaoDeAguaJ2(){
            vidaMeuPkm = vidaMeuPkm - 20;
            document.getElementById('vida-meu-pkm').style.width = vidaMeuPkm + "px";
        
    }
    
    function EscudoDeCascoJ2(){
            vidaMeuPkm = vidaMeuPkm - 0;
            document.getElementById('vida-meu-pkm').style.width = vidaMeuPkm + "px";
        
    }

var sorteio = Math.floor(Math.random()*4);
function ataqueOponente() {
    /* Charmander */
    if (pkmJ2 == "charmander") {
        if (sorteio == 0) {
            BrasaJ2();
        }else if (sorteio == 1) {
           CaudadeferroJ2(); 
        }else if (sorteio == 2) {
            MordidaJ2();
        }else if (sorteio == 3) {
            CaraFeiaJ2();
        }
    }
    /* Pikachu */
    if (pkmJ2 == "pikachu") {
        if (sorteio == 0) {
            ChoqueDoTrovaoJ2();
        }else if (sorteio == 1) {
            InvestidaJ2();
        }else if (sorteio == 2) {
            ParalisadorJ2();
        }else if (sorteio == 3) {
            CaudadeferroJ2();
        }
    }
    /* Bulbasaur */
    if (pkmJ2 == "bulbasaur") {
        if (sorteio == 0) {
            FolhaNavalhaJ2();
        }else if (sorteio == 1) {
            RaioSolarJ2();
        }else if (sorteio == 2) {
            PoDoSonoJ2();
        }else if (sorteio == 3) {
            GigaDrainJ2();
        }
    }
    /* ratata */
    if (pkmJ2 == "ratata") {
        if (sorteio == 0) {
            AtaqueRapidoJ2();
        }else if (sorteio == 1) {
            DentadaJ2();
        }else if (sorteio == 2) {
            CabecadaJ2();
        }else if (sorteio == 3) {
            CaraFeiaJ2();
        }
    }
    /* squirtle */
    if (pkmJ2 == "squirtle") {
        if (sorteio == 0) {
            SurfarJ2();
        }else if (sorteio == 1) {
            PistolaDeAguaJ2();
        }else if (sorteio == 2) {
            CanhaoDeAguaJ2();
        }else if (sorteio == 3) {
            EscudoDeCascoJ2();
        }
    }
}

function checkvida() {
    if (opVida < 1) {
        alert("Pokemon inimigo desmaiou, você ganhou o round");
        alert("Parabéns você ganhou de lucro 25C");
        money = money + 50;

        pkmJ1 = "";
        pkmJ2 = "";
        opVida = 200;
        vidaMeuPkm = 200; 
        aparecer();
        aparecerCampo();
        document.getElementById('qtd-money').innerHTML = money;
        document.getElementById('vida-oponente').style.width = vidaMeuPkm + "px";
        document.getElementById('vida-meu-pkm').style.width = vidaMeuPkm + "px";
        document.getElementById('charmanderJ1').disabled = false;
        document.getElementById("charmander-icon-j1").style.filter = "grayscale(0%)";
        document.getElementById('pikachuJ1').disabled = false;
        document.getElementById("pikachu-icon-j1").style.filter = "grayscale(0%)";
        document.getElementById('bulbasaurJ1').disabled = false;
        document.getElementById("bulbasaur-icon-j1").style.filter = "grayscale(0%)";
        document.getElementById('squirtleJ1').disabled = false;
        document.getElementById("squirtle-icon-j1").style.filter = "grayscale(0%)";
        document.getElementById('ratataJ1').disabled = false;
        document.getElementById("ratata-icon-j1").style.filter = "grayscale(0%)";

        document.getElementById('ratataJ2').disabled = true;
        document.getElementById("ratata-icon-j2").style.filter = "grayscale(100%)";
        document.getElementById('charmanderJ2').disabled = true;
        document.getElementById("charmander-icon-j2").style.filter = "grayscale(100%)";
        document.getElementById('pikachuJ2').disabled = true;
        document.getElementById("pikachu-icon-j2").style.filter = "grayscale(100%)";
        document.getElementById('bulbasaurJ2').disabled = true;
        document.getElementById("bulbasaur-icon-j2").style.filter = "grayscale(100%)";
        document.getElementById('squirtleJ2').disabled = true;
        document.getElementById("squirtle-icon-j2").style.filter = "grayscale(100%)";

    }else if (vidaMeuPkm < 1) {
        alert("Seu pokemon desmaiou, você perdeu o round.")
        pkmJ1 = "";
        pkmJ2 = "";
        opVida = 200;
        vidaMeuPkm = 200; 
        aparecer();
        aparecerCampo();
        document.getElementById('qtd-money').innerHTML = money;
        document.getElementById('vida-oponente').style.width = vidaMeuPkm + "px";
        document.getElementById('vida-meu-pkm').style.width = vidaMeuPkm + "px";
        document.getElementById('charmanderJ1').disabled = false;
        document.getElementById("charmander-icon-j1").style.filter = "grayscale(0%)";
        document.getElementById('pikachuJ1').disabled = false;
        document.getElementById("pikachu-icon-j1").style.filter = "grayscale(0%)";
        document.getElementById('bulbasaurJ1').disabled = false;
        document.getElementById("bulbasaur-icon-j1").style.filter = "grayscale(0%)";
        document.getElementById('squirtleJ1').disabled = false;
        document.getElementById("squirtle-icon-j1").style.filter = "grayscale(0%)";
        document.getElementById('ratataJ1').disabled = false;
        document.getElementById("ratata-icon-j1").style.filter = "grayscale(0%)";

        document.getElementById('ratataJ2').disabled = true;
        document.getElementById("ratata-icon-j2").style.filter = "grayscale(100%)";
        document.getElementById('charmanderJ2').disabled = true;
        document.getElementById("charmander-icon-j2").style.filter = "grayscale(100%)";
        document.getElementById('pikachuJ2').disabled = true;
        document.getElementById("pikachu-icon-j2").style.filter = "grayscale(100%)";
        document.getElementById('bulbasaurJ2').disabled = true;
        document.getElementById("bulbasaur-icon-j2").style.filter = "grayscale(100%)";
        document.getElementById('squirtleJ2').disabled = true;
        document.getElementById("squirtle-icon-j2").style.filter = "grayscale(100%)";
    }
}

function debugon() {
    if (debug == 0) {
        document.getElementById('onoff').style.color = "#15ff00";
        document.getElementById('onoff').innerHTML = "On";   
        debug = 1;
    }else{
        document.getElementById('onoff').style.color = "red";
        document.getElementById('onoff').innerHTML = "Off";  
        debug = 0
    }
}
function pularpkm() {
    aparecer();
}

var ataques = document.getElementById("ataques-pkm");

function ocultaratqs() {
    // ocultar atqs qnd abrir mochila
    document.getElementById('ataques-pkm').style.display = "none";
    document.getElementById('ataques-meu-pkm').style.display = "none";
    document.getElementById('mochila').style.display = "";
}
function apareceratqs() {
    document.getElementById('ataques-pkm').style.display = "";
    document.getElementById('ataques-meu-pkm').style.display = "";
    document.getElementById('mochila').style.display = "none";
    mochila = 0;

}



function abrirmochila() {
    carregar();
    console.log(jogador1 + " abriu a mochila");
    if (mochila == 0) {
     ocultaratqs();
     mochila = 1;   
    }
}

function potion() {
    if (vidaMeuPkm > 199) {
        alert("vida cheia");
    }else if (vidaMeuPkm < 199) {
        if (qtdpocao > 0) {
            qtdpocao = qtdpocao - 1;        
            alert("Você usou a poção: " + qtdpocao);
            alert("Sua vida foi de: " + vidaMeuPkm);
            vidaMeuPkm = vidaMeuPkm + 45;
            alert("Para: " + vidaMeuPkm);
            document.getElementById('vida-meu-pkm').style.width = vidaMeuPkm + "px";
        }else{
            alert("Você não tem poção disponível");
        }
    }
}

function spotion() {
    if (vidaMeuPkm > 199) {
        alert("vida cheia");
    }else if (vidaMeuPkm < 199) {
        if (qtdspocao > 0) {
            qtdspocao = qtdspocao - 1;        
            alert("Você usou a poção: " + qtdspocao);
            alert("Sua vida foi de: " + vidaMeuPkm);
            vidaMeuPkm = vidaMeuPkm + 100;
            alert("Para: " + vidaMeuPkm);
            document.getElementById('vida-meu-pkm').style.width = vidaMeuPkm + "px";
        }else{
            alert("Você não tem poção disponível");
        }
    }
}


function pkmslots() {
    if (pkmslot == "") {
        alert("Você não possui pokemon como aliado");
    }else if (pkmslot == "charmander") {
        alert('Você trocou de pokémon para o charmander');
        document.getElementById('seu-pkm-frente').src = "https://img.pokemondb.net/sprites/go/normal/charmander.png";
        document.getElementById('pkm-seu-escolhido').src = "https://img.pokemondb.net/sprites/black-white/anim/back-normal/charmander.gif";
        charmanderATK();
    }else if (pkmslot == "pikachu") {
        alert('Você trocou de pokémon para o pikachu');
        document.getElementById('seu-pkm-frente').src = "https://img.pokemondb.net/sprites/go/normal/pikachu.png";
        document.getElementById('pkm-seu-escolhido').src = "https://img.pokemondb.net/sprites/black-white/anim/back-normal/pikachu.gif";
        pikachuATK();
    }else if (pkmslot == "bulbasaur") {
        alert('Você trocou de pokémon para o bulbasaur');
        document.getElementById('seu-pkm-frente').src = "https://img.pokemondb.net/sprites/go/normal/bulbasaur.png";
        document.getElementById('pkm-seu-escolhido').src = "https://img.pokemondb.net/sprites/black-white/anim/back-normal/bulbasaur.gif";
        bulbasaurATK();
    }else if (pkmslot == "squirtle") {
        alert('Você trocou de pokémon para o squirtle');
        document.getElementById('seu-pkm-frente').src = "https://img.pokemondb.net/sprites/go/normal/squirtle.png";
        document.getElementById('pkm-seu-escolhido').src = "https://img.pokemondb.net/sprites/black-white/anim/back-normal/squirtle.gif";
        squirtleATK(); 
    }
    else if (pkmslot == "ratata") {
        alert('Você trocou de pokémon para o ratata');
        document.getElementById('seu-pkm-frente').src = "https://img.pokemondb.net/sprites/go/normal/ratata.png";
        document.getElementById('pkm-seu-escolhido').src = "https://img.pokemondb.net/sprites/black-white/anim/back-normal/ratata.gif";
        ratataATK();
    }
}

function comprarpotion() {
    if (money > 15) {
        alert("Você comprou uma poção");
        qtdpocao = qtdpocao+1;
        money = money - 15;
        document.getElementById('qtd-potion').innerHTML = qtdpocao;
        document.getElementById('qtd-money').innerHTML = money;
    }else if (money < 15) {
        alert("Você não possui dinheiro suficiente");
    }
}
function comprarspotion() {
    if (money > 50) {
        alert("Você comprou uma super poção");
        qtdspocao = qtdspocao + 1;
        money = money -50;
        document.getElementById('qtd-spotion').innerHTML = qtdspocao;
        document.getElementById('qtd-money').innerHTML = money;
    }else if (money < 50) {
        alert("Você não possui dinheiro suficiente");
    }
}
function comprarmrevive() {
    if (money > 100) {
        alert("Você comprou o max-revive");
        qtdmrevive = qtdmrevive + 1;
        money = money -100;
        document.getElementById('qtd-maxrevive').innerHTML = qtdmrevive;
        document.getElementById('qtd-money').innerHTML = money;
    }else if (money < 100) {
        alert("Você não possui dinheiro suficiente");
    }
}
function comprarmslot() {
    if (qtdmslot > 0) {
        alert("Você já possui o limite de mais slots");
    }else{
        if (money > 150) {
            alert("Você comprou o mais slots");
            qtdmslot = qtdmslot +1;
            money = money -150;
            document.getElementById('qtd-mslot').innerHTML = qtdmslot;
            document.getElementById('qtd-money').innerHTML = money;
            document.getElementById('moreslotbtn').disabled = false;
        }else if (money < 150) {
            alert("Você não possui dinheiro suficiente");
        }
    }
}
function comprarmstone() {
    if (money > 250) {
        alert("Você comprou uma mega stone");
        qtdmstone = qtdmstone + 1;
        money = money-250;
        document.getElementById('qtd-mstone').innerHTML = qtdmstone;
        document.getElementById('qtd-money').innerHTML = money;
    }else if (money < 250) {
        alert("Você não possui dinheiro suficiente");
    }
}
function ativarslot() {
    document.getElementById('escolha-pkm-slot-2').style.display = "";
}

function charmanderJ1mslot() {
    pkmslot = "charmander";
    alert("Charmander foi escolhido como pokemon aliado");
}

function pikachuJ1mslot() {
    pkmslot = "pikachu";
    alert("Pikachu foi escolhido como pokemon aliado");
}

function bulbasaurJ1mslot() {
    pkmslot = "bulbasaur";
    alert("Bulbasaur foi escolhido como pokemon aliado");
}

function squirtleJ1mslot() {
    pkmslot = "squirtle";
    alert("Squirtle foi escolhido como pokemon aliado");
}

function ratataJ1mslot() {
    pkmslot = "ratata";
    alert("ratata foi escolhido como pokemon aliado");
}