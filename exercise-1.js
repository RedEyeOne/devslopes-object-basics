/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //
const tacoBell = {
    name: 'TacoBell',
    cuisines: ['mexican', 'american'],
    numberOfStars: 2,
    favorited: true
};


tacoBell.address = '123 sesame street';
tacoBell.zipcode = 21;
tacoBell.acceptsReservations = false;

tacoBell.numberOfStars++;
tacoBell.favorited = false;
tacoBell.cuisines.push('breakfast');

function retrieveProperty (obj, key) {
    if (obj[key] === undefined) {
        return "The information you requested does not exist."
    }
    return obj[key];
}



console.log(retrieveProperty(tacoBell, 'cuisines'));
console.log(retrieveProperty(tacoBell, 'favorited'));
console.log(retrieveProperty(tacoBell, 'name'));
console.log(retrieveProperty(tacoBell, 'nickname'));
console.log(retrieveProperty(tacoBell, 'state'));
