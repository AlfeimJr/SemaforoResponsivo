const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let corIndex = 0;
let intervalId = null;

const trafficLght = (event) =>{
    pararAutomatic();
    ligar[event.target.id]();
}

const proximoIndex = () =>{
    if (corIndex < 2){
        corIndex++
    }else{
        corIndex = 0;
    }
    
}

const trocarCor = () =>{
    const cores = ['vermelho', 'amarelo', 'verde']
    const cor = cores[corIndex];
    ligar[cor]();
    proximoIndex()
}

const pararAutomatic = () => {
    clearInterval (intervalId);
}


const ligar = {
    'vermelho': () => img.src = "./img/vermelho.png",
    'amarelo': () => img.src = "./img/amarelo.png",
    'verde': () => img.src = "./img/verde.png",
    'desligado': () => img.src ="./img/semaforo.png",
    'automatic': () => intervalId = setInterval(trocarCor, 1000)
}
buttons.addEventListener('click', trafficLght);
