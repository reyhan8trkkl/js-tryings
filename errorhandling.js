/*Identify and fix the syntax errors in the arrays below.*/

var toys = ["car", "truck", "wagon"];  //virgul ve tirnak eklendi      
console.log(toys);

var numbers = [ 9, 0, 1, 0.1, 5 ];   //paranteze aldik
console.log(numbers);       

var letters = ["a", "b", "c", "d"];           // ; ekledik
console.log(letters);

var cars = ["ford", "dodge", "kia", "lexus", "tesla"];      // = ve " kullandik"
console.log(cars);

cars[10]="mercedes";           // tirnak kullandik
console.log(cars);

cars.splice(0, 0, "bmw");         // virgul noktali virgul tirnak kullandik
console.log(cars);


var person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
var [ x , y , z ] = person;           // sayilari ve parantezi sildik
console.log(`${x} ${y} is ${z} years old`)
