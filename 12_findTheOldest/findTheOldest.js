const findTheOldest = function(persons) {
    for (let i = 0; i < persons.length; i++) {
        if (!persons[i].yearOfDeath) {
            persons[i].yearOfDeath = new Date().getFullYear();
        }
        persons[i].age = persons[i].yearOfDeath - persons[i].yearOfBirth;
    }
    persons.sort ((a, b)=> b.age - a.age);
    return persons[0];
};

// Do not edit below this line
module.exports = findTheOldest;
