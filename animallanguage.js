//Convert any text to whale language! 

let input = 'Turtpentine and turtles';
let Arr = input.toUpperCase().split("");//degiskenler buyuk harfle baslamasa iyi olur. Arr olmasa iyi olurdu yani

let emptyArr = [];

for (let i = 0; i < Arr.length; i++) {
    
    if (Arr[i]=== "I" ||Arr[i]=== "A" ||Arr[i]=== "E" ||Arr[i]=== "O" || Arr[i]=== "U" || Arr[i]=== "Y" ) {
        emptyArr.push(Arr[i])

        if (Arr[i]=== "E" || Arr[i]=== "U") {
            emptyArr.push(Arr[i])
        }
    }
    
}

console.log(emptyArr.join(""));

