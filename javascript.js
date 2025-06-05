/*
 javascript.js,
 rob's rental code
 may 19th 2025
*/
console.log("Running javascript.js");

//functions
function getUserName() {
    userName = prompt("please input name:");
}
function getUserSeatN() {
    userSeatN = prompt("Hi "+userName+" please input amount of seats you need in your rental vehicle (max of 8):");
}
function getUserTime() {
    userTime = prompt("Hi "+userName+ " Please input amount of days you wish to rent the vehicle (max of 30):");
}
function pickCar() {
        if (userSeatN == 1){
        alert("You will be renting " + classArray[0] + " for " + userTime + " Day(s). \nYour total price will be $" + 30 * userTime);

    } else if(userSeatN == 2){
        alert("You will be renting " + classArray[1] + " for " + userTime + " Day(s). \nYour total price will be $" + 50 * userTime);

    } else if(userSeatN == 3 || userSeatN == 4){
        alert("You will be renting " + classArray[2] + " for " + userTime + " Day(s). \nYour total price will be $" + 70 * userTime);

    } else if(userSeatN == 5){
        alert("You will be renting " + classArray[3] + " for " + userTime + " Day(s). \nYour total price will be $" + 90 * userTime);

    } else if(userSeatN == 6 || userSeatN == 7){
        alert("You will be renting " + classArray[4] + " for " + userTime + " Day(s). \nYour total price will be $" + 110 * userTime);

    } else if(userSeatN == 8){
        alert("You will be renting " + classArray[5] + " for " + userTime + " Day(s). \nYour total price will be $" + 130 * userTime);

    } else {
        alert("We were unable to proccess your request, please try again.")
    }
}

/*
Main code
*/

// constants
const classArray = ["BAC Mono", "MX5", "Mini", "Falcon", "Outlander", "Estima"];
const MIN_USER_SEAT_N = 1;
const MAX_USER_SEAT_N = 8;
const MIN_USER_TIME = 1;
const MAX_USER_TIME = 30;

// button function
function start() {

    getUserName();
    while (!isNaN(userName)|| userName == null || userName == "" || userName == " "){
        userName = prompt("Name must be a valid name, please enter a valid name");
    } 
    getUserSeatN();
    while (isNaN(userSeatN)|| userSeatN == null || userSeatN == "" || userSeatN == " " || userSeatN < MIN_USER_SEAT_N || userSeatN > MAX_USER_SEAT_N){
        userSeatN = prompt("amount of seats must be a valid amount of seats, plese enter a valid amount of seats");
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