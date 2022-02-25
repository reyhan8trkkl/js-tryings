/*


Create a function called handleFilter which:
- takes an array of mixed data types as input
- removes any non-number data types without using the built-in javascript filter method
- returns an array of sorted ages in ascending order 
  - HARD MODE - without using the built-in javascript sort method 😎

You don't have to worry about making this algorithm work fast! The idea is to get you to
"think" like a computer and practice your knowledge of basic JavaScript.
*/ 

const arrCase1 = [false, 100, [24, 33], "💩", 55, "🥵", null, 45, "Sanyia", 66, "James", 23];
const arrCase2 = ["28", 100, 60, "Elamin", 55, ,"75"];

// STEP-1
function typeArr (item) {
    return `Type of  <${item}> is ${typeof item}!`
}
console.log(typeArr(arrCase1[0]));
console.log(typeArr(arrCase1[2]));
console.log(typeArr(arrCase1[3]));
console.log(typeArr(arrCase1[6]));
console.log(typeArr(arrCase2[0]));
console.log(typeArr(arrCase2[1]));
console.log(typeArr(arrCase2[3]));
console.log(typeArr(arrCase2[5]));

//STEP-2
function handleFilter(arr) {
  let result = [];
  for(i=0; i<arr.length; i++) {          
    if (typeof arr[i] === 'number') {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(handleFilter(arrCase1));
console.log(handleFilter(arrCase2));

//STEP-3
/**version-1 */
function typeNumber (item) {
  if (typeof item === 'number') {
    return item;
  }
}
let justNumbers1 = arrCase1.filter(typeNumber)
let justNumbers2 = arrCase2.filter(typeNumber)
console.log(justNumbers1)
console.log(justNumbers2)

/**version-2 */

function typeNumber2(arr) {
  return arr.filter(element => typeof element === 'number')
}
console.log(typeNumber2(arrCase1));
console.log(typeNumber2(arrCase2));

// arrow function
const typeNumber3 = arr => arr.filter(element => typeof element === 'number') 

// STEP-4
/**version-1 */
function handleSort(arr) {
  let result = handleFilter(arr)
  console.log(result.sort((a,b) => a-b));
  console.log(result.sort((a,b) => b-a));
}
handleSort(arrCase1);
handleSort(arrCase2);

/**version-2 with arrow function filter*/
function handleSort2(arr) {
  let result = arr.filter(element => typeof element === 'number' )
  console.log(result.sort((a,b) => a-b));
  console.log(result.sort((a,b) => b-a));
}
handleSort2(arrCase1);
handleSort2(arrCase2);

/**version-3 with ternary and forEach*/
function handleSort3(arr) {
  let result= [];
  arr.forEach(element => {
      typeof element === 'number' ? result.push(element) : ""
    }
  )
  return result.sort((a,b) => a-b);
}
console.log(handleSort3(arrCase1));


/**without function */
console.log(justNumbers1.sort((a, b) => a - b));
console.log(justNumbers2.sort((a, b) => a - b));




document.addEventListener('DOMContentLoaded', (event) => {

  function handleDragStart(e) {
    this.style.opacity = '0.4';

    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }

  function handleDragEnd(e) {
    this.style.opacity = '1';

    items.forEach(function (item) {
      item.classList.remove('over');
    });
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    return false;
  }

  function handleDragEnter(e) {
    this.classList.add('over');
  }

  function handleDragLeave(e) {
    this.classList.remove('over');
  }

function handleDrop(e) {
  e.stopPropagation(); // Stops some browsers from redirecting.
  e.preventDefault();

  var files = e.dataTransfer.files;
  for (var i = 0, f; f = files[i]; i++) {
    // Read the File objects in this FileList.
  }
}
  let items = document.querySelectorAll('.container .box');
  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('dragenter', handleDragEnter, false);
    item.addEventListener('dragleave', handleDragLeave, false);
    item.addEventListener('dragend', handleDragEnd, false);
  });
});
  
  
//CHALLENGE PART
/* ======= TESTS ===== */
function testArrays(a, b) {
  // if (a === b) return true;
  // if (a == null || b == null) return false;
  if (a.length != b.length) return "FAILED";

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return "FAILED";
  }
  return "PASSED";
}

console.log("handleSort function works - case 1 : " + testArrays(handleSort3(arrCase1), [23, 45, 55, 66, 100]));

console.log( "handleSort function works - case 2 : " + testArrays(handleSort3(arrCase2), [55, 60, 100]));
