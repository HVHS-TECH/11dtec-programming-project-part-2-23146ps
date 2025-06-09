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

/*
Main code
*/

// constants
const classArray = ["Basic", "Basic+", "Premium", "Premium+", "Suite", "Penthouse"];

const Price = ["",""]

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