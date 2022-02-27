
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

function express(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i] = [arr[i], arr[i].substring(0, 3).toUpperCase(), arr[i].length]
  }
  return arr;
}

console.log(express(countries));



// Add "-" after every even number

const numbers = "315469781318158";

const lastArray2 = (arr) => arr.split("").map(element => element % 2 === 0 ? element = element + "-" : "") 
console.log(lastArray2(numbers).join(""));



function lastArray(data) {
  let arr = data.toString().split('');
  arr.forEach(element => {
    if (Number(element) % 2 === 0) {
      console.log('er')
      arr[arr.indexOf(element)] = Number(element) + "-"
    }
  });

  return arr.join("");
}
console.log(lastArray(numbers));


 var arr = [5, 24, 122, 625, 3125, 15625];
 function isOdd(number) {
   return number % 2 == 1;
 }
 function divide(number) {
   return number / 25;
 }
 console.log(arr.filter(isOdd).map(divide));