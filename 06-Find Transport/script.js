/*
  I am new to London and would like to know what transport I can take to different famous locations.
  An array with London locations, and the forms of transport you can take to get there, have been provided.

  Return an array of where I can go if I only want to use a specific mode of transport.

  NOTE: only the names should be returned, not the means of transport.
*/
const londonLocations = [
  ["Angel", "tube", "bus"],
  ["Greenwich", "bus", "river boat", "dlr", "air line", "tube"],
  ["London Bridge", "tube", "river boat"],
  ["Tower Bridge", "tube", "bus"],
]

//first method
// function getTransport(arr, value) {
//   let result = [];
//   for (i=0 ; i<arr.length ; i++) {
//     let matchArr = arr[i].find(elem => elem === value);   // if it finds the search value it returns an array
//     if(matchArr){   // if there is a matchArr 
//        result.push(arr[i][0]);
//    };
//   }
//   return result;
// }


//second Method
// function getTransport(arr, value) {
//   let result = [];
//   for (i = 0; i < arr.length; i++) {
//     //if (arr[i].filter(element => element.indexOf(value) > -1).join('') === value) {
//     if (arr[i].filter(element => element.indexOf(value) > -1).includes(value)) {
//       result.push(arr[i][0]);
//     };
//   }
//   return result;
// }

//third Method with ternary
function getTransport(arr, value) {
  let result = [];
  arr.forEach(element => {
    element.some(item => item === value) ? result.push(element[0]) : "" ; //some method returns array
    }
  ) 
return result;
}

// last method
function getTransport2(arr, value) {
  let result = [];
  arr.forEach(element => {
    let found = element.includes(value) ? element[0] : ""; //includes returns true
    result.push(found);  
  }
  ) 
return result;
}

// extra last method
function getTransport3(arr, value) {
  return arr.map(element => {                 //map method returns array
    return element.includes(value) ? element[0] : ""; 
  }
  ) 
}
// super extra last method
const getTransport4 = (arr, value) => arr.map(element => element.includes(value) ? element[0] : "") 



console.log(getTransport(londonLocations, "river boat"));
console.log(getTransport(londonLocations, "bus"));
console.log(getTransport(londonLocations, "bus"));
console.log(getTransport2(londonLocations, "bus"));
console.log(getTransport3(londonLocations, "bus"));
console.log(getTransport4(londonLocations, "bus"));


//STEP-2
function giveMessage (arr, value) {
  getTransport(arr, value).forEach( item => (
    console.log(`You can use "${value}" to go to the ${item}!`)
  ))
}

function giveMessage2(arr, value) {
    console.log(`You can use "${value}" to go to the ${getTransport(arr, value)}!`)
}

giveMessage(londonLocations, "river boat");
giveMessage2(londonLocations, "river boat");
