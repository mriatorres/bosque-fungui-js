/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
*/

//Southern Appalachian Woodrat
// the western Appalachian mountains of Virginia


const emojis = {
    '-': ' ',
    'O': '🚪',
    'X': '🌲',
    'I': '🍄',
    'PLAYER': '🐀',
    'BOMB_COLLISION': '🔥',
    'GAME_OVER': '👎',
    'WIN': '🏆',
    'HEART': '❤️',
  };

  //Nivel 0  
  const maps = [];
  maps.push(`
    IXXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    OXXXXXXXXX
  `);

  //Nivel 1
  maps.push(`
    O--XXXXXXX
    X--XXXXXXX
    XX----XXXX
    X--XX-XXXX
    X-XXX--XXX
    X-XXXX-XXX
    XX--XX--XX
    XX--XXX-XX
    XXXX---IXX
    XXXXXXXXXX
    `);

    //Nivel 2
  maps.push(`
    I-----XXXX
    XXXXX-XXXX
    XX----XXXX
    XX-XXXXXXX
    XX-----XXX
    XXXXXX-XXX
    XX-----XXX
    XX-XXXXXXX
    XX-----OXX
    XXXXXXXXXX
  `);

  //Nivel 3
 maps.push(`
   O--XXXXXXX
   XX--XXXXXX
   XXX-XXXXXX
   XXX-XXXXXX
   XXX--XXXXX
   XXXX----XX
   XXXXX-XXXX
   XXXXX-XXXX
   XXXXX---IX
   XXXXXXXXXX
  `);

  //Nivel 4
 maps.push(` 
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XI-------X
  XX--XXXXXX
  XXX----XXX
  XXXXXX-XXX
  XXXXX---OX
  XXXXX--XXX
 
 `);
 
 //Nivel 5
 maps.push(` 
  XXXXXXXXXX
  XXXXXX--IX
  XXXXXX-XXX
  XXX----XXX
  XO--XXXXXX
  XXX---XXXX
  XXXXX-XXXX
  XXXXX---XX
  XXXXXXXXXX
  
 `);
 
 //Nivel 6
 maps.push(` 
  XXXX-----X
  XXXX-XXXOX
  X----XXXXX
  X-XXXXXXXX
  X---XXXXXX
  XXX-XXXXXX
  XXX-XXXXXX
  XXX---XXXX
  XXXXX-XXXX
  XXXXX--IXX

 `);