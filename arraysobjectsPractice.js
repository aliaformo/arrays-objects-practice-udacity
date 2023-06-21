// Arrays

// 1. Random Restaurant Generator

let restaurants = ["Popeye", "Chick Fill-A", "KFC", "Taco Bell", "Mc Donald's"];

function getRandomRestaurant(restArray) {
    let restIndex = Math.floor(Math.random() * restArray.length)
    return restArray[restIndex]
}

let restaurant = getRandomRestaurant(restaurants);
console.log(restaurant); // Popeye, Mc Donald's...



// 2. Random Restaurant Generator - Advanced

const bbqRestaurants = [
    ["Joe's KS", 5],
    ["LC's BBQ", 10],
    ["Jack Stack", 3],
    ["Slaps", 25],
    ["Q39", 9],
];

function getRandomRestaurantDistance(restDistArray, distance) {
    let restIndex = Math.floor(Math.random() * restDistArray.length)

    restaurantX = restDistArray[restIndex]

    if (restaurantX[1] <= distance) {
        return `${restaurantX[0]} restaurant within the distance: ${distance}, with ${restaurantX[1]} miles`
    } else {
        return "Try again"
    }
}

let chosenRestaurant = getRandomRestaurantDistance(bbqRestaurants, 10)
console.log(chosenRestaurant)

/* 'Q39 restaurant within the distance: 10, with 9 miles'
"LC's BBQ restaurant within the distance: 10, with 10 miles"
Joe's KS restaurant within the distance: 10, with 5 miles
Try again
 */


// Objects

// 1. Profile Lookup

let userProfile = {
    firstName: "John",
    lastName: "Doe",
    numberOfSiblings: 2,
}

function getNumberOfSiblings(profObj) {
    return profObj.numberOfSiblings;
}

let siblings = getNumberOfSiblings(userProfile)

console.log(siblings) // 2


// Profile Lookup - Advanced

const players = [{
        name: 'Mahomes',
        number: 15,
        position: 'Quarterback',
    },
    {
        name: 'Kelce',
        number: 87,
        position: 'Tight End',
    },
    {
        name: 'Edward-Helaire',
        number: 25,
        position: 'Running back',
    },
];

function getPosition(names, numbers) {

    let foundPlayer = null;

    players.forEach(player => {
        if (player.name == names && player.number == numbers) {
            foundPlayer = player.position
        }
    });

    if (!foundPlayer) {
        return 'Player not found'
    }
    return foundPlayer

}

let mahomes = getPosition('Mahomes', 15)
let kelce = getPosition('Kelce', 87)
let playerX = getPosition('Player X', 39)

console.log(mahomes) // Quarterback
console.log(kelce) // Tight End
console.log(playerX) // Player not found