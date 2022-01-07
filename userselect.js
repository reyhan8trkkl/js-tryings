console.log(users);
console.log(Object.values(users).length);
max=0;
for (const key in users) {
   
    if(users[key].skills.length > max){
            max = users[key].skills.length
            obj = users[key]
        }
    }
sayac = 0;
for (const key in users) {
    if(users[key].points >= 50){
        sayac++
    }
}
let mern =[]
for (const key in users) {
    
    if (users[key].skills.includes('MongoDB' && 'Express' && 'React' && 'Node')) {
        console.log(users[key])
        mern.push(key)
    }
}
console.log(mern);
console.log(mern.length);

users.rrr= {email: 'daniel@alex.com',
skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
age: 20,
isLoggedIn: false,
points: 40
}
for (const key in users) {
    console.log(`${key} is ${users[key].age} years old. He knows ${users[key].skills}`)
    
}