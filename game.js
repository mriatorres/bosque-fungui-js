const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

//Botones
const btnUp = document.getElementById('up');
const btnLeft = document.getElementById('left');
const btnRight = document.getElementById('right');
const btnDown = document.getElementById('down');



let canvasSize;
let elementsSize;

//Posicion jugador
const playerPosition = {
  x: undefined,
  y: undefined
}

//Posicion premio
const giftPosition = {
  x: undefined,
  y: undefined,
};

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize() {
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }
  
  canvas.setAttribute('width', canvasSize);
  canvas.setAttribute('height', canvasSize);
  
  elementsSize = (canvasSize / 10) - 2;

  startGame();
}

function startGame() {
  console.log({ canvasSize, elementsSize });

  game.font = elementsSize + 'px Verdana';
  game.textAlign = 'end';
 //Elementos mapa
  const map = maps[2];
  //Filas mapa
  const mapRows = map.trim().split('\n');
  //Filas y columnas
  const mapRowCols = mapRows.map(row => row.trim().split(''));

   // console.log({map, mapRows, mapRowCols});

  /*for (let row = 1; row <= 10; row++) {
    for (let col = 1; col <= 10; col++) {
        
    //Emoji correspondiente ak elemento en mapRows
    game.fillText(emojis[mapRowCols [row - 1][col - 1 ]],
    elementsSize * col, 
    elementsSize * row);
    }
  }*/
  game.clearRect(0,0,canvasSize, canvasSize)
  mapRowCols.forEach((row, rowI) => {
    row.forEach((col, colI) => {
      const emoji = emojis[col];
      const posX = elementsSize * (colI + 1);
      const posY = elementsSize * (rowI + 1);
      game.fillText(emoji, posX, posY);

      //Posicion del jugador
      if (col == 'O') {
        if(!playerPosition.x && !playerPosition.y) {
          playerPosition.x = posX;
          playerPosition.y = posY;
          console.log({playerPosition});
        }
      }else if(col == 'I'){
        giftPosition.x =  posX;
        giftPosition.y = posY
      }
      game.fillText(emoji, posX, posY);
    });
  });
  movePlayer();
}

function movePlayer() {
  const giftCollisionX = playerPosition.x.toFixed(3) == giftPosition.x.toFixed(3);
  const giftCollisionY = playerPosition.y.toFixed(3) == giftPosition.y.toFixed(3);
  const giftCollision = giftCollisionX && giftCollisionY;
  
  //Posicion jugador coincide con la del regalo
  if (giftCollision) {
    console.log('Subiste de nisvel!');
  }
  game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y); 
}

//Movimientos jugadores teclas
window.addEventListener('keydown', moveByKeys);

//Movimientos jugador botones
btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

function moveByKeys(event){
  if(event.key == 'ArrowUp') moveUp();
   else if (event.key == 'ArrowLeft') moveLeft();
   else if (event.key == 'ArrowRight') moveRight();
   else if (event.key == 'ArrowDown') moveDown();
}

function moveUp() {
  console.log('Arriba');
  if((playerPosition.y - elementsSize) < elementsSize){
    console.log('OUT');
  }else{
  playerPosition.y -= elementsSize
  startGame();
}
}

function moveLeft(){
  console.log('izquierda');
  if((playerPosition.x - elementsSize) < elementsSize){
    console.log('OUT');
  }else{
  playerPosition.x-= elementsSize
  startGame();
}
}

function moveRight(){
  console.log('derecha');
  if((playerPosition.x + elementsSize) > canvasSize){
    console.log('OUT');
  }else{
  playerPosition.x += elementsSize
  startGame();
}
}

function moveDown(){
  console.log('abajo');
  console.log('derecha');
  if((playerPosition.y + elementsSize) > canvasSize){
    console.log('OUT');
  }else{
  playerPosition.y += elementsSize
 startGame();
}
}
