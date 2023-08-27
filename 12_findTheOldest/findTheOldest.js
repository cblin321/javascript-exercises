const findTheOldest = function(people) {
    return people.reduce((acc, curr) => {
        const death1 = !("yearOfDeath" in acc) ? (new Date()).getFullYear() : acc.yearOfDeath;
        const death2 = !("yearOfDeath" in curr) ? (new Date()).getFullYear() : curr.yearOfDeath;
        const lifespan1 = (death1 - acc.yearOfBirth);
        const lifespan2 = (death2 - curr.yearOfBirth);
        return lifespan1 < lifespan2 ? curr : acc; 
    });
};

// Do not edit below this line
module.exports = findTheOldest;
