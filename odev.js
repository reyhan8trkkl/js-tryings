// Exercises:Loops
// Iterate 0 to 10 using for loop, do the same using while and do while loop.
for (let i = 0; i < 10; i++) {
  console.log(i);
}
i=0;
while (i<9) {
  console.log(i);
  i++
}
  i=0;
  do {
    console.log(i);
    i++
  } while (i<10);

// Iterate 10 to 0 using for loop, do the same using while and do while loop.
for (let i = 10; i >= 0; i--) {
  console.log(i);
}
i=10;
while (i>=0) {
  console.log(i);
  i--
}
  i=10;
  do {
    console.log(i);
    i--
  } while (i>=0);

// Write a loop that makes seven calls to console.log to output the following triangle:
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######

let calls=[]
for (let j = 0; j <7; j++) {
 calls = calls + ["#"]
 console.log(calls);
}

// Iterate the array, ['HTML', 'CSS', 'JavaScript'] using a for loop and print out the items.

let slanguages = ['HTML', 'CSS', 'JavaScript']

for (let k = 0; k < 3; k++) {
  console.log(slanguages[k]);
}

// Use for loop to iterate from 0 to 100 and print only even numbers

for (let i = 0; i <=100; i++) {
   if (i%2==0) {
     console.log(i);
   }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers

for (let i = 0; i <=100; i++) {
  if (i%2!=0) {
    console.log(i);
  }
}


// Use for loop to iterate from 0 to 100 and print and print the sum of all numbers.

let sum = 0;
for (let i=0; i<=100; i++) {
  console.log(i);    
  sum = sum + i;
}
console.log(sum); 


// The sum all numbers in a given number. Ex. 5465 => 5+4+6+5 => 20  

let value = "3567"
let nvalue = value.length
let value1 = parseInt(value);

  if (nvalue == 1) { //birler-onlar-yuzler-binler basamagi seklinde saga dogru hesaplandi
    console.log(value1);
  }
  else if (nvalue == 2) {
    sumoff =value1%10+value1/10;
    console.log(Math.floor(String(sumoff)))
  }
  else if (nvalue == 3) {
   sumoff1 = parseInt(value1%10+parseInt((value1%100)/10)+value1/100); 
   console.log(String(sumoff1))
  }
  else if (nvalue == 4) {
    sumoff2 = parseInt(value1%10+parseInt((value1%100)/10)+parseInt((value1%1000)/100) +value1/1000); 
    console.log(Math.floor(String(sumoff2)))
  }
  
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let sumt=0;
let sumt1=0
for ( k = 0; k<=100; k++) {
  if (k%2==0) {
    sumt = sumt + k
  } else {
    sumt1 = sumt1 + k
  }
}
console.log(sumt);
console.log(sumt1);

//Develop a small script which generate a six characters random id:
//Ex.: 5j2khz
let randomid = []
let letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
var rletter = letter.split("");

randomid[0] = Math.floor(Math.random()*10)
randomid[1] = rletter[Math.floor(Math.random()*letter.length)]
randomid[2] = Math.floor(Math.random()*10)
randomid[3] = rletter[Math.floor(Math.random()*letter.length)]
randomid[4] = rletter[Math.floor(Math.random()*letter.length)]
randomid[5] = rletter[Math.floor(Math.random()*letter.length)]
console.log(`${randomid[0]+randomid[1]+ randomid[2]+randomid[3]+randomid[4]+randomid[5]}`)

