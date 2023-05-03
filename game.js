const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);

function startGame () {
    // game.&*()
    let canvasSize;
    if(window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8;
    }else {
        canvasSize = window.innerHeight * 0.8;
    }


    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    //10 grillas (40px) en un canvas de 400px 
    const elementSize =  canvasSize / 10; 


    game.font = elementSize + 'px Verdana';
    game.textAlign = 'end';

    for (let i = 1; i <= 10; i++) {
        game.fillText('🌲', elementSize * i, elementSize);
    
 }
 
    
}
