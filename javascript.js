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

const Price = ["150","175","250","300","500","2000"]

const MIN_USER_TIME = 1;
const MAX_USER_TIME = 30;

for (i = 0; i < classArray.length; i++){
    message = message + "\nfor $"+ Price[i] + " is "+classArray[i];
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
    while ( userPackage != "weeds" || userPackage != "mexican coke" || userPackage != "fenta" || userPackage != "sprite" || userPackage != "3g methamphetamine" || userPackage != null ){
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