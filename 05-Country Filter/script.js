
// Filter out countries
// 1.	Extract all the countries contain the word 'land' from the countries array and print it as array
// 2.	Find the country containing the hightest number of characters in the countries array
// 3.	Extract all the countries containing only four characters from the countries array and print it as array
// 4.	Extract all the countries containing two or more words from the countries array and print it as array
// 5.	Reverse the countries array and capitalize each country and stored it as an array.
// 6.	Extract all the countries don’t contain the word 'land' from the countries array, add “land” at the end of the country and print it as array.


const countries = ['Albania', 'bolivia', 'Canada', 'Bali', 'denmark', 'czech republic', 'ethiopia', 'Finland', 'Germany', 'hungary', 'Ireland', 'Japan', 'Kenya', 'United States' ]

// step-1

function countryFind1(arr) {
  let countryFound = [];
  for (i=0; i<arr.length; i++){
    if(arr[i].includes("land")){
      countryFound.push(arr[i]);
    }
  }
  return countryFound
}
console.log(countryFind1(countries));


//step-2

//version-1
function longestCountry(arr){
  var longest= "";
  for (i=0; i<arr.length; i++){
      if (arr[i].length > longest.length){
        longest= arr[i];
      }
  }
  return longest;
}
console.log(longestCountry(countries));


// version-2
function longestCountry2(arr){
  return arr.reduce((a, b) => a.length > b.length ? a : b, '');
}

console.log(longestCountry2(countries));


//step-3
//version-1
function countrySort(arr){
    var continued;
    var newLength = arr.length-1;
    do {
        continued = false;
        for (var i=0; i < newLength; i++)
        {
            if (arr[i].length > arr[i+1].length)
            {
               var temp = arr[i];
               arr[i] = arr[i+1];
               arr[i+1] = temp;
               continued = true;
            }
        }
        newLength--;
    } while (continued);
  return arr;
}
console.log(countrySort(countries));

//version-2
function countrySort2(arr){
  var newLength = arr.length-1;
  while (newLength < 0){
      for (var i=0; i < newLength; i++)
      {
          if (arr[i].length > arr[i+1].length)
          {
             var temp = arr[i];
             arr[i] = arr[i+1];
             arr[i+1] = temp;
          }
      }
      newLength--;
  }
return arr;
}
console.log(countrySort2(countries));

//version-3
function countrySort3(arr){
arr.sort(function(a, b){
  // b.length - a.length  // descending
  a.length - b.length;    // ascending
})
return arr;
}
console.log(countrySort3(countries));


//step-4

function countryFind4(arr){
  let countryFound = [];
  for (i=0; i<arr.length; i++){
    if(arr[i].length === 4){
      countryFound.push(arr[i]);
    }
  }
  return countryFound
}
console.log(countryFind4(countries));


//step-5

function countryFind5(arr){
  let countryFound = [];
  for (i=0; i<arr.length; i++){
    if(arr[i].includes(" ")){
      countryFound.push(arr[i]);
    }
  }
  return countryFound
}
console.log(countryFind5(countries));


//step-6

function countryFind6(arr){
  let countryFound = [];
  for (i=0; i<arr.length; i++){ 
    if(arr[i].includes(" ")){
      let doubleWord = arr[i].split(' ')
      for (j=0 ; j < doubleWord.length ; j++){ 
        doubleWord[j] = doubleWord[j].charAt(0).toUpperCase() + doubleWord[j].substring(1);
      }
      countryFound.push(doubleWord.join(' '))
      } else {
      countryFound.push(arr[i][0].toUpperCase() + arr[i].substring(1));
    }
    }
    return countryFound;
  }

console.log(countryFind6(countries));


// step-7

function countryFind7(arr) {
  let countryFound = [];
  for (i=0; i<arr.length; i++){
    if(!arr[i].includes("land")){
      countryFound.push(arr[i].concat('land'));
    }
  }
  return countryFound
}
console.log(countryFind7(countries));
