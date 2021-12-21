
let phonenum = prompt("telefon numarasi girin"); //1 234  568 9456
phonenum = phonenum.split("");
console.log(phonenum);
let birr = `+ ${phonenum[0]}`
let ikii = `( ${phonenum[1]+phonenum[2]+phonenum[3]} )`;
let uc = phonenum[4] + phonenum[5] + phonenum[6];
let dort = phonenum[7] + phonenum[8] + phonenum[9] + phonenum[10];
console.log(birr,ikii,uc,dort);








