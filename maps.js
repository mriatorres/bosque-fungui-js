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
   X---XX-X-X
   X-XXXXXXXX
   X--XXXXXXX
   XX--XXXXXX
   XXX-X---XX
   XXX---XOXX

`);

//Nivel 8
maps.push(`
XXX----X-X
XXX-X---O-
X----XXXXX
XXXXX-XXXX
X----XXXXX
XX-XXXXXXX
XX------XX
XXX-XXX-XX
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
 X----XX-XX
 --XX-XXX-X
 -X-----X-X
 -O-XXX---X
 X-XXXXXXXX
 
`);

//Nivel 10
maps.push(`
 XXX----X-X
 X---XX-X-X
 X-XXXX---X
 X-XXXXXX-X
 ---XIX---X
 --X--XX--X
 X-X-XX---X
 X-----XX-X
 X--X-X---X
 XXX------X

`);