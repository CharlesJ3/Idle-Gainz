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
  const topBorder = context.strokeRect  (1, 1, 398, 120);
  // const middleBorder = context.strokeRect(1, 1, 398, 298);

}

drawBorders();

/*
* -------------------------------
* Objects
* -------------------------------
*/

const player = {
  gainzLevel: 0,
  totalGainz: 0,
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
  currentEnemyWeight: 10,
  maxEnemyWeight: 10
}

const Lift = function(name, level, weightGain, type, typeTwo, speed, count, cost) {
  this.name = name,
  this.level = level,     
  this.weightGain = weightGain,
  this.type = type,      
  this.typeTwo = typeTwo,
  this.speed = speed,
  this.count = count,
  this.cost = cost
} 

const achievements = {

}


/*
* LIFTZ!!!
*/

const MarshmellowCurls = new Lift('Marshmellow Curls', 0, 1, 'arms', 'bicep', 0, 1);


const buyMarshmellowCurls = function(){  

  for(let x = 0; x < player.costMultiplier; x++){

    //Initial check for weight
    if(player.gainz <= MarshmellowCurls.cost){ 
      break;
    }

    //Set a ceiling for the cost
    player.gainz -= Math.ceil(MarshmellowCurls.cost);
    MarshmellowCurls.count++;
    player.totalGainz++;
   }
  
    document.getElementById('marshmellowCurlsCost').innerHTML = "Cost: " + nFormatter(Math.ceil(MarshmellowCurls.cost).toFixed(0));
}

/*
* Initial Image/Text Placement
*/ 

document.getElementById('ln01').innerHTML = `Title: \n${MarshMellowCurls.name}`;
/*
* Menu and Menu Switching
*/

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
* Weight Bar
*/  

const weightBarEnemy = {
  x: 120,
  y: 10,
  width: 150,
  height: 10
};
// Render Loop
function onTimerTick() {

  //Calculate enemy.currentEnemyWeight bar percentage
  const totalRemainingWeight = enemy.currentEnemyWeight / enemy.maxEnemyWeight;

    document.getElementById('weightBarEnemy').innerHTML = nFormatter((enemy.currentEnemyWeight).toFixed(1)) + "/" + nFormatter(((enemy.maxEnemyWeight)).toFixed(1)) + " WEIGHT";
    context.fillStyle = "aliceblue";

  if (enemy.currentEnemyWeight > 0){
    context.fillRect(weightBarEnemy.x, weightBarEnemy.y, weightBarEnemy.width, weightBarEnemy.height);
    context.fillStyle = "red";
    context.fillRect(weightBarEnemy.x, weightBarEnemy.y, weightBarEnemy.width * totalRemainingWeight, weightBarEnemy.height);
  }
}

// Loop
setInterval(onTimerTick, 100);


/*
* Number Formatter 
*/

//REFACTOR

/*
*
* Easy-read Number Conversion
* Ex. 1000000 will read 1.00m or 1.0m
*
*/
function nFormatter(num) {
  if (num >= 1e51) {
          return (num / 1e51).toFixed(2).replace(/\.0$/, '') + 'SD';
  } 
  if (num >= 1e48) {
          return (num / 1e48).toFixed(2).replace(/\.0$/, '') + 'Q3';
    } 
  if (num >= 1e45) {
          return (num / 1e45).toFixed(2).replace(/\.0$/, '') + 'Q2';
    } 
  if (num >= 1e42) {
          return (num / 1e42).toFixed(2).replace(/\.0$/, '') + 'T';
    } 
  if (num >= 1e39) {
        return (num / 1e39).toFixed(2).replace(/\.0$/, '') + 'D';
  } 
  if (num >= 1e36) {
          return (num / 1e36).toFixed(2).replace(/\.0$/, '') + 'u';
    } 
  if (num >= 1e33) {
          return (num / 1e33).toFixed(2).replace(/\.0$/, '') + 'd';
    } 
  if (num >= 1e30) {
          return (num / 1e30).toFixed(2).replace(/\.0$/, '') + 'n';
    } 
  if (num >= 1e27) {
          return (num / 1e27).toFixed(2).replace(/\.0$/, '') + 'o';
    } 
  if (num >= 1e24) {
          return (num / 1e24).toFixed(2).replace(/\.0$/, '') + 'S';
    } 
  if (num >= 1e21) {
      return (num / 1e21).toFixed(2).replace(/\.0$/, '') + 's';
    } 
  if (num >= 1e18) {
      return (num / 1e18).toFixed(2).replace(/\.0$/, '') + 'Q';
    } 
  if (num >= 1e15) {
      return (num / 1e15).toFixed(2).replace(/\.0$/, '') + 'q';
    } 
  if(num >= 1e12) {
      return (num / 1e12).toFixed(2).replace(/\.0$/, '') + 't';
    }  
  if(num >= 1e9) {
      return (num / 1e9).toFixed(2).replace(/\.0$/, '') + 'b';
    }
  if(num >= 1e6) {
      return (num / 1e6).toFixed(2).replace(/\.0$/, '') + 'm';
   }
  if(num >= 1e3) {
      return (num / 1e3).toFixed(2).replace(/\.0$/, '') + 'k';
   }

   return num;
}




/*
* Find a Place For Me
*/
