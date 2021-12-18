let markHeight = 1.70;
let markWeight = 88;
let johnHeight = 1.90;
let johnWeight = 69;

function calculateBMI(mass, height) {

    let bmi = Math.floor(mass / (height * height));
    switch (true) {
        case bmi < 18.5:
            return "zayiftir";
        case bmi < 24.9:
            return "normal kiloda";
        case bmi < 29.9:
            return "kilolu";
        case bmi >= 30:
            return "obez";
        default:
            break;
    }
}

markBMI = calculateBMI(markWeight, markHeight);
johnBMI = calculateBMI(johnWeight, johnHeight);
console.log(`${markBMI} Mark'in BMI'si ${johnBMI}' Johnun BMI'si`);
