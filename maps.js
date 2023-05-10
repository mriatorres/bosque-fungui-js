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

  //Nivel 7
  maps.push(`
   XXXXXXXXXX
   XXXXXXXXIX
   XXX------X
   XXX-XX-X-X
   X---XX---X
   X-XXXXXXXX
   X--XXXXXXX
   XX--XXXXXX
   XXX-X---XX
   XXX---XOXX

`);

//Nivel 8
maps.push(`
XXX---X-XX
XXX-----O-
X----XXXXX
XXXX--XXXX
X-----XXXX
XX-XXXXXXX
XX------XX
XXX--X-XXX
XI--XXXXXX
XX-XXXXXXX

`);

//Nivel 9
maps.push(`
 XXXXXXXXXX
 XX--X--IXX
 XX----XXXX
 XX-XXX--XX
 XX-X----XX
 X----XX--X
 --XX-XXX-X
 -XX------X
 -O-XXXXXXX
 X-XXXXXXXX
 
`);

//Nivel 10
maps.push(`
 XXX----XXX
 X---XX-OXX
 X-XXXX-XXX
 X-XXXX-X-X
 X-XXIX---X
 X--X-XXX-X
 XX---XX--X
 XXX-X-X--X
 XXXX----XX
 XXXXX-XXXX

`);