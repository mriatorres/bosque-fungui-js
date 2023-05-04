const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

let canvasSize;
let elementsSize;

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
  
  elementsSize = (canvasSize / 10) - 1;

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

    console.log({map, mapRows, mapRowCols});

  /*for (let row = 1; row <= 10; row++) {
    for (let col = 1; col <= 10; col++) {
        
    //Emoji correspondiente ak elemento en mapRows
    game.fillText(emojis[mapRowCols [row - 1][col - 1 ]],
    elementsSize * col, 
    elementsSize * row);
    }
  }*/
  mapRowCols.forEach(row, rowI =>{
    row.forEach(col, colI => {
        const emoji = emojis[col];
        game.fillText(emoji, x, y);

    });
  });
}