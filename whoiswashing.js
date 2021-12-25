 let ogrenciler = ["Ben", "Jenny", "Michael", "Chloe", "Timmy"]
 ogrenciler.push('Max');
 let komsular = ["Patrick", "AnnMarie", "Alisol", "Walton"]
 function whoIsWashing(param) {
     let arrLength = param.length;
     const random = param[ Math.floor(Math.random() * arrLength)];
     console.log(`('${random} is going to wash dishes today!')`);
 }
 whoIsWashing(ogrenciler);
 whoIsWashing(komsular);
