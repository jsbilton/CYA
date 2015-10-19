confirm("Let's get it on!");

var age = prompt ("What's my age again?");
if(age < 18){
    console.log("You may not proceed")
} else {
    console.log("You may proceed at leisure!")
}

var marty = prompt("You are Marty McFly. The year is 1955. Your friend Doctor Emmitt Brown needs your help. The Doc's beloved Clara has been taken by the McFly family arch nemesis, Biff Tannen. Marty, you can FIGHT Biff, SHOOT Biff, or you can TRAVEL through time.")

switch(marty) {
  case 'FIGHT':
  var brave = prompt("Thats mighty chivalrous of you! Are you brave (YES or NO)?");
  var chicken = prompt("What's wrong McFly, chicken?");
      if(brave  === 'YES') && (chicken === 'YES'){
        console.log("It was brave of you to stand up to Biff. Doc Brown says that should make us even.");
      }else {
        console.log("I always knew you were yellow!");
      }
      break;
    }
  switch(marty) {
    case 'SHOOT':
    var murder = prompt("Thats mighty heavy of you Marty. Are you going to murder him like he did your father in alternate 1985? (YES or NO)");
    var kill = prompt("Are you able to kill Biff? (YES or NO)");
        if(murder  === 'YES') && (pistol === 'YES'){
          console.log("You are a cold blooded killer Marty McFly.");
        }else {
          console.log("You couldn't kill Biff.");
        }
        break;
      }
  switch(marty) {
      case 'TRAVEL':
      var future = prompt("Are you going back to the future? (YES or NO)");
      var year = prompt("Are you traveling back to the year 1985? (YES or NO)");
          if( future === 'YES') && ( year === 'YES'){
            console.log("Yeah, we are finally back in 1985! Where's Huey Lewis?");
          }else {
            console.log("You are in 2015");
          }
          break;
}
