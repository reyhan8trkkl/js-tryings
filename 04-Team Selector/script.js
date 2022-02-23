let team = {
//create a positions property object
_positions: {
//creating the 3 choice properties
center: [],
forward: [],
guard: []
},//end of the positions object
// a setter method for each choice
set center(newCenter) {
this.center = newCenter;
},
set forward(newForward){
this.forward = newForward;
},
set guard(newGuard){
this.guard = newGuard;
},
// a getter method for each choice
get center(){
return this.center;
},
get forward(){
return this.forward;
},
get guard(){
return this.guard;
},
// a getter method for the positions property
get positions(){
return {
center: this._positions.center,//this uses the center getter methods
forward: this._positions.forward,
guard: this._positions.guard,
};
},

addPlayerToPosition(positionName, playerName, playerPoint){
const player = {
name: playerName,
point: playerPoint,
};
this._positions[positionName].push(player);
},

getRandomPlayerFromPosition(positionName){
const players = this._positions[positionName];
const randomIndex = Math.floor(Math.random() * players.length);
return players[randomIndex];
},

generateRandomTeam(){
const center = this.getRandomPlayerFromPosition('center');
const firstForward = this.getRandomPlayerFromPosition('forward');
const secondForward = this.getRandomPlayerFromPosition('forward');
const firstGuard = this.getRandomPlayerFromPosition('guard');
const secondGuard = this.getRandomPlayerFromPosition('guard');
const averagePoint = (center.point + firstForward.point + secondForward.point + firstGuard.point + secondGuard.point) / 5;
return `Your team is : \n${center.name}, \n${firstForward.name}, \n${secondForward.name}, \n${firstGuard.name} \nand ${secondGuard.name}. \nThe average point is : ${averagePoint}`;
}
}; //end of team object

team.addPlayerToPosition('center', 'Bam Adebayo', 5.25);
team.addPlayerToPosition('center', 'Tony Bradley', 6.25);
team.addPlayerToPosition('center', 'Zach Collins', 7.50);
team.addPlayerToPosition('center', 'Marc Gasol', 8.50);
team.addPlayerToPosition('center', 'Dwight Howard', 8.50);

team.addPlayerToPosition('forward', 'LeBron James', 9.50);
team.addPlayerToPosition('forward', 'Kevin Durant', 9.00);
team.addPlayerToPosition('forward', 'Anthony Davis', 8.50);
team.addPlayerToPosition('forward', 'Harrison Barnes', 8.25);
team.addPlayerToPosition('forward', 'Bojan Bogdanovic', 7.50);

team.addPlayerToPosition('guard', 'James Harden', 9.25);
team.addPlayerToPosition('guard', 'Stephen Curry', 8.25);
team.addPlayerToPosition('guard', 'Grayson Allen', 7.50);
team.addPlayerToPosition('guard', 'Kyle Anderson', 6.50);
team.addPlayerToPosition('guard', 'Grayson Allen', 5.50);

let selectedTeam = team.generateRandomTeam();
console.log(selectedTeam)
console.log(team)
