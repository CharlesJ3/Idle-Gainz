/*
*
* Quick Index 
*
* - Canvas Settings
*/

/*
* -------------------------------
* Canvas Settings 
* -------------------------------
*/


/*Main battle area*/
const canvas = document.getElementById('battleArea');
const context = canvas.getContext('2d');

//Drawing some simple borders and a background to help separate items
let drawBorders = function() {
  context.fillStyle = 'rgba(0,0,0,0.01)';

  //Fill the rectangle based on canvas width/height
  context.fillRect(0,0, canvas.width, canvas.height);

  //Scale the borders to be a little more visible
  context.scale(2,2);                           
  context.strokeStyle = 'maroon';

  //Borders for canvas
  let mainBorder = context.strokeRect(1, 1, 398, 298); 
  let topBorder = context.strokeRect  (1, 1, 398, 288 / 1.885);
  let middleBorder = context.strokeRect(1, 1, 398, 298 / 1.65);

}

drawBorders();

/*
* -------------------------------
* Objects
* -------------------------------
*/

console.log('Begin!');