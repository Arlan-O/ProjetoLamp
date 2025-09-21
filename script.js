const on = document.getElementById('on');
const off = document.getElementById('off');
const lamp = document.getElementById('lamp');

//função que verifica se a imagem atual é a quebrada
function broke(){
    return lamp.src.indexOf('quebrada') > -1
}

//a condição é "se não for" a quebrada liga
function ligar(){
    if(!broke()){
    lamp.src = './IMG/ligada.jpg';
    }
}

//a condição é "se não for" a quebrada desliga
function desligar(){
    if (!broke()){
    lamp.src = './IMG/desligada.jpg';
    } 
}

function quebrado(){
    lamp.src = './IMG/quebrada.jpg'
}


off.addEventListener('click', desligar);
on.addEventListener ('click', ligar);

lamp.addEventListener('mouseover', ligar);
lamp.addEventListener('mouseout', desligar);

lamp.addEventListener('dblclick', quebrado)
