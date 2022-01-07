let animal = {

    species: "dog",
    name: "karabas",
    legs: 4,
    color: "white",
    age: 5,
    bark: function () {
        return "woof woof";
    },
    getAnimalInfo: function () {
        return `Hayvanin turu = ${this.breed}  hayvanin ismi = ${this.name}  hayvanin yasi = ${this.age}`;
    },

    calcAge: function () {
        if (this.age >= 2) {
            return (2*10.5) + (age-2) * 4;
        }
        else{
            return 10.5;
        }
    }
}

animal.breed = "kangal"
console.log(animal.getAnimalInfo());
console.log(animal.calcAge());