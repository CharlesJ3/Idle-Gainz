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
  const mainBorder = context.strokeRect(1, 1, 398, 298); 
  const topBorder = context.strokeRect  (1, 1, 398, 288 / 1.885);
  const middleBorder = context.strokeRect(1, 1, 398, 298 / 1.65);

}

drawBorders();

/*
* -------------------------------
* Objects
* -------------------------------
*/

const player = {
  gainzLevel: 0,
  gainzStatus: ['So small it physically hurts to look at you', 'A disappointment to your ancestors', 'Beginner Gainz Starting', 
  'Ok, starting to get there', 'Worthy of a statue made of butter', 'You don\'t hate yourself... as much', 'The beach is THAT way!',
  ],
  level: 0,
  gainz: 0,
  enemyLootChoice : [0,0,0],

  //Our Gainz Status!
  updateGainz(){
    if(this.gainzLevel < 6){
      this.gainzLevel++;
    }
  },

  //Show the Gainz Status!
  getGainzStatus(){
    document.getElementById('gainzStatus').innerHTML = `${this.gainzStatus[this.gainzLevel]}`;
  },

  //Update all text that may have been updated randomly at one point in time, space, and gainz
  runUpdateStatusText(){
    this.getGainzStatus();
  }

}

const enemy = {

}

const skills = {
  
}

const achievements = {

}

/*
* Menu and Menu Switching
*/
// #menuSystemTwo


// REFACTOR : 
const switchMenuOne = () => {
  $( "#menuSystemOne" ).css('display', 'inherit');
  $( "#menuSystemTwo" ).css('display', 'none');
  $( "#menuSystemThree" ).css('display', 'none');
  $( "#menuSystemFour" ).css('display', 'none');
}

const switchMenuTwo = () => {
  $( "#menuSystemOne" ).css('display', 'none');
  $( "#menuSystemTwo" ).css('display', 'inherit');
  $( "#menuSystemThree" ).css('display', 'none');
  $( "#menuSystemFour" ).css('display', 'none');
}

const switchMenuThree = () => {
  $( "#menuSystemOne" ).css('display', 'none');
  $( "#menuSystemTwo" ).css('display', 'none');
  $( "#menuSystemThree" ).css('display', 'inherit');
  $( "#menuSystemFour" ).css('display', 'none');
}

const switchMenuFour = () => {
  $( "#menuSystemOne" ).css('display', 'none');
  $( "#menuSystemTwo" ).css('display', 'none');
  $( "#menuSystemThree" ).css('display', 'none');
  $( "#menuSystemFour" ).css('display', 'inherit');
}


const checkForTalents = () => {
  
  if(!$('#tmodalTalents').prop('checked')) {
    $(".modalTalents").css('display', 'none');
  }
  
  if($('#tmodalTalents').prop('checked')) {
    $(".modalTalents").css('display', 'inherit');
  }
}


$( '.menuTable' ).hover(
  function() {
    $( this ).addClass( "custom-heading-1" );
  }, function() {
    setTimeout(() => {
      $( this ).removeClass( "custom-heading-1" )
    }, 2500);
  }
);


/*
* Find a Place For Me
*/
