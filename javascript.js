/*
 javascript.js,
 rob's rental code
 may 19th 2025
*/
console.log("Running javascript.js");


/*
Main code
*/

// constants
const classArray = ["Basic", "Basic+", "Premium", "Premium+", "Suite", "Penthouse"];
const moons = ["Europa","Io","Callisto","Ganymede"]
const moonMulti = ["2","2.5","1.5","3"]
const price = ["150","175","250","300","500","2000"]

const MIN_USER_TIME = 1;
const MAX_USER_TIME = 30;

for (i = 0; i < classArray.length; i++){
    message = message + "\nfor $"+ price[i] + " is "+classArray[i];
}


//functions
function getUserName() {
    userName = prompt("please input name:");
}
function getUserPackage() {
    userPackage = prompt("Hi "+userName+" please selact your package:" +message);
}
function getUserTime() {
    userTime = prompt("Hi "+userName+ " Please input amount of days you wish to rent the vehicle (max of 30):");
}

// button function
function start() {

    getUserName();
    while (!isNaN(userName)|| userName == null || userName == "" || userName == " "){
        userName = prompt("Name must be a valid name, please enter a valid name");
    } 
    getUserPackage();
    while ( userPackage != "Basic" || userPackage != "Basic+" || userPackage != "Premium" || userPackage != "Premium+" || userPackage != "Suite" || userPackage != "Penthouse"){
        userPackage = prompt("amount of seats must be a valid amount of seats, plese enter a valid amount of seats");
    }
    getUserTime();
    while (isNaN(userTime)|| userTime == null || userTime == "" || userTime == " " || userTime < MIN_USER_TIME || userTime > MAX_USER_TIME){
        userTime = prompt("Amount of days must be a valid amount of days, please enter a valid amount of days");
    }
    pickCar();
}
/*
| ||
|| |_
*/

//Memes, the DNA of the soul