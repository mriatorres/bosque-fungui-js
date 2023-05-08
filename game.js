//Comenzar a jugar
function jugar(){
  document.querySelector('.game-container').classList.remove('inactive');
  document.querySelector('.inicio').classList.add('inactive');
  document.querySelector('.volverJugar').classList.add('inactive');
}

//Volver a jugar
const jugarDeNuevo = document.querySelector('.volverJugar');
jugarDeNuevo.addEventListener('click', VolverAJugar)
function VolverAJugar(){
  location.reload();
}


const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

//Botones
const btnUp = document.getElementById('up');
const btnLeft = document.getElementById('left');
const btnRight = document.getElementById('right');
const btnDown = document.getElementById('down');

//Adiciones
const spanLives = document.querySelector('#lives');
const spanTime= document.querySelector('#time');
const spanRecord= document.querySelector('#record');
const pResult= document.querySelector('#result');


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

//Posicion enemigo
let enemyPositions = [];

//Numero de nivel
let level = 0;

//Numero de vidas
let lives = 3;

//Tiempo
let timeStart;
let tomePlayer;
let timeInterval;


window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize() {
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.7;
  } else {
    canvasSize = window.innerHeight * 0.7;
  }
  
  canvasSize = Number(canvasSize.toFixed(0));


  canvas.setAttribute('width', canvasSize);
  canvas.setAttribute('height', canvasSize);
  
  elementsSize = Number(((canvasSize / 10)-2).toFixed(0) );

  //Responsive player
  playerPosition.x = undefined;
  playerPosition.y = undefined;
  startGame();
}


//Renderizar mapa
function startGame() {

  game.font = elementsSize + 'px Verdana';
  game.textAlign = 'end';
 //Elementos mapa
  const map = maps[level];
//Se acabaron los niveles
  if (!map) {
    gameWin();
    return;
  }

  if (!timeStart) {
    timeStart = Date.now();
    timeInterval = setInterval(showTime, 100);
    showRecord();
  }
  //Filas mapa
  const mapRows = map.trim().split('\n');
  //Filas y columnas
  const mapRowCols = mapRows.map(row => row.trim().split(''));

  //Vidas
  showLives();

   // console.log({map, mapRows, mapRowCols});

  /*for (let row = 1; row <= 10; row++) {
    for (let col = 1; col <= 10; col++) {
        
    //Emoji correspondiente ak elemento en mapRows
    game.fillText(emojis[mapRowCols [row - 1][col - 1 ]],
    elementsSize * col, 
    elementsSize * row);
    }
  }*/
  enemyPositions = [];
  game.clearRect(0,0,canvasSize, canvasSize)
  mapRowCols.forEach((row, rowI) => {
    row.forEach((col, colI) => {
      const emoji = emojis[col];
      const posX = Number((elementsSize * (colI + 1)).toFixed(0));
      const posY = Number((elementsSize * (rowI + 1)).toFixed(0));
      game.fillText(emoji, posX, posY);

      //Posicion del jugador
      if (col == 'O') {
        if (!playerPosition.x && !playerPosition.y) {
          playerPosition.x = posX;
          playerPosition.y = posY;
          console.log({playerPosition});
        }
      } else if (col == 'I') {
        giftPosition.x = posX;
        giftPosition.y = posY;
      } else if (col == 'X') {
        enemyPositions.push({
          x: posX,
          y: posY,
        });
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
  
  if (giftCollision) {
    levelWin()
  }

  const enemyCollision = enemyPositions.find(enemy => {
    const enemyCollisionX = enemy.x.toFixed(3) == playerPosition.x.toFixed(3);
    const enemyCollisionY = enemy.y.toFixed(3) == playerPosition.y.toFixed(3);
    return enemyCollisionX && enemyCollisionY;
  });
  
  if (enemyCollision) {
    levelFail();
  }

  game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y);
}

//Ganar nivel
function levelWin(){
  console.log('Subiste de nivel');
  level ++;
  startGame(); 
}

//Perder nivel
function levelFail(){
  lives --;
  
  if (lives <= 0) {
    lives --
    level = 0;
    lives = 3;
    timeStart = undefined;
    swal({title: 'Perdiste',
          text: 'Buena suerte la proxima...',
          buttons: {continue:'Continuar'}
        })
        .then((value) => {
          switch(value){
            case 'continue':
              location.reload();
          }
        })
        
  }
  playerPosition.x = undefined;
  playerPosition.y = undefined;
  startGame();
}

//Se gano el juego
function gameWin() {
  clearInterval(timeInterval);
  document.querySelector('#game').classList.add('inactive');
  document.querySelector('.btns').classList.add('inactive');
  document.querySelector('.volverJugar').classList.remove('inactive');

  swal({title:'¡Felicidades!', 
      text: 'Ganaste todos los niveles',
    });
  //Record
  const recordTime = localStorage.getItem('record_time');
  const playerTime = millisToMinutesAndSeconds(Date.now() - timeStart);

  if(recordTime) {
    if(recordTime >= playerTime) {
      localStorage.setItem('record_item', playerTime);
      swal('¡Excelente!','¡Ganaste todos los niveles y \nsuperaste el record establecido anteriormente!'); 
    }else{
      swal('¡Felicidades!', '¡Ganaste todos los niveles!')
    }

}else {
  localStorage.setItem('record_time', playerTime);
  location.reload();
}

}

//Mostrar vidas
function showLives(){
  const heartArray = Array(lives).fill(emojis['HEART']);

  //Limpiar array
  spanLives.innerHTML = "";
  heartArray.forEach(heart => {
    spanLives.append(heart);
  })
}

//Mostrar tiempo 
function showTime(){
  spanTime.innerHTML = millisToMinutesAndSeconds (Date.now() - timeStart);
}

//Mostrar tiempo record
function showRecord(){
  spanRecord.innerHTML = localStorage.getItem('record_time');
}

//Milisegundos a segundos
function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
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
  if((playerPosition.y - elementsSize + 1) < elementsSize){
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
  if((playerPosition.x + elementsSize + 1) > canvasSize){
    console.log('OUT');
  }else{
  playerPosition.x += elementsSize
  startGame();
}
}

function moveDown(){
  console.log('abajo');
  if((playerPosition.y + elementsSize) > canvasSize){
    console.log('OUT');
  }else{
  playerPosition.y += elementsSize
 startGame();
}
}
