const streetNames = [
    "Carnaby Street",
    "Abchurch Lane",
    "Adam's Court",
    "Piccadilly Street",
    "Addle Hill",
    "Addle Lane",
    "Alban Highwalk",
    "Brick Lane"
]

// main solution
function filterStreet(getLanes) {
  return getLanes.filter(item => item.includes("Lane"));
}

console.log(filterStreet(streetNames));

