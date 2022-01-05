const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);

// }
// for (const key in companies) {
//   console.log(companies[key])
// }

// for (const iterator of companies) {
//   console.log(iterator)
// }

companies.forEach(element => {
  console.log(element.name)
});

// companies[companies.length]={name: "Company Ten", category: "Retail", start: 1981, end: 1989}
companies.push({ name: "Company Ten", category: "Retail", start: 1981, end: 1989 })

console.log(companies)

let filter = companies.filter(item => item.category == "Retail")
console.log(filter)
let age = companies.filter(item =>
  item.start >= 1980 && item.end < 1990)
console.log(age);

let maxAge = companies.filter(item => item.end - item.start > 10)
console.log(maxAge)

let newArray = companies.map(item => item.name);
console.log(newArray)

let tekDize = companies.map(item=>{return [item.name,item.start,item.end]})
console.log(tekDize)

companies.sort((a,b) => a.start-b.start ) // artan siralama yaptik b-a olsaydi azalan
console.log(companies)

let sonuc = companies.reduce((total,item)=>total+item.end-item.start,0)
console.log(sonuc)

