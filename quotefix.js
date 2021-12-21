//Transform a string into an array and fix it!
//"Some body can write code that a very well designed code machines can understand. Good programmers write code that humans can understand.” – Martin Fowler. Agile Software Design";


let favoriteQuote = "Some body can write code that a very well designed code machines can understand. Good programmers write code that humans can understand.  Martin Fowler. Agile Software Design";

favoriteQuote = favoriteQuote.split(" ");

console.log(favoriteQuote.length);
favoriteQuote.pop();
console.log(favoriteQuote);
favoriteQuote.push("Development", "ThoughtWorks","Inc");
console.log(favoriteQuote)
let indexnum=favoriteQuote.indexOf("body");

favoriteQuote[indexnum] = "fool";
console.log(favoriteQuote);
favoriteQuote.shift(); // ilk degeri siler
favoriteQuote.unshift("Any");
let indexnum1 = favoriteQuote.indexOf("very");
favoriteQuote.splice(indexnum1,5,"computer")
console.log(favoriteQuote);
favoriteQuote = favoriteQuote.join(" "); // diziden cumleye cevirdi
console.log(favoriteQuote);


