 

let mySports=['Marathon','Triathlon','Pentathlon']
const getRandEvent = () => {
  const random = Math.floor(Math.random()*3);
  return mySports[random]
};
let athlete2='Warren'
// The scope of `trainingDays` is too tight 
const getTrainingDays = activity => {

  if (activity=='Marathon') {
    return 50;
  } else if (activity=='Triathlon') {
    return 75;
  }
  else if (activity=='Pentathlon') {
    return 100;
  }



// decide the day according to the activity, write a activityal;

return trainingDays;
};
const athlete = 'Nala';
const logEvent =(athlete, activity) => {
  
  console.log(`${athlete}'s activity is: ${activity}`);
};

const logTime =(athlete, days) => {
  
  console.log(`${athlete}'s time to train is: ${days} days`);
};

const sport = getRandEvent();
const days = getTrainingDays(sport);
const sport2 = getRandEvent();
const days2 = getTrainingDays(sport2);

logEvent(athlete,sport);
logTime(athlete,days);
logEvent(athlete2,sport2);
logTime(athlete2,days2);
