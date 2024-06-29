//console.log('Hello World');
// const a=5
// const b=10
// console.log("type of a", typeof a);
// console.log(a+b)

const a = 12;
if (a % 2 == 0) {
    console.log("print number is even")
}
else {
    console.log("print the number is odd")
}

for (let i = 0; i < 10; i++) {
    console.log(i)
}
let d = 4
let prime = true
for (let i = 2; i < d; i++) {
    if (d % i == 0) {
        prime = false
        console.log("Not prime number")
        break
    }

}
if (prime == true) {
    console.log("it is a prime number")
}

const number = 5;
const remainder = number % 2;
switch (remainder) {
    case 0:
        console.log("it is an even number")
        break;
    case 1:
        console.log("it is an odd number")
        break;
    default:
        console.log("invalid number")
        break;

}

//100 - 90 marks - A
// 90 - 80 marks - B
// 80- 70 marks - C
// 60 - 70 marks - D
//less than 70 - E
const marks = Math.floor(79 / 10)
console.log(marks)
switch (marks) {
    case 10:
        console.log("Grade is A+")
        break;
    case 9:
        console.log("Grade is A")
        break;
    case 8:
        console.log("Grade is B")
        break;
    case 7:
        console.log("Grade is C")
        break;
    case 6:
        console.log("Grade is D")
        break;
    default:
        console.log("Grade is E")
        break;
}

const arr = [23, 45, "Cutiepie", "False", true]
console.log(arr)

const numbers = [5, 7, 9, 11, 90, 87, 65, 65, 88]
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
    const element = numbers[i]
    sum = sum + element
}
console.log(sum);

const num = [5, 78, 87, 98]
let sums = 0
for (let i = 0; i < num.length; i++) {

    const elements = num[i]
    sums = sums + elements
    console.log(sums);

}

//function
function numbs(a, b) {
    console.log(a + b);

}
numbs(65, 87)

function multi(a, b) {
    console.log(a * b)
}
multi(3, 7);

// 0 -1000 -> 100 ruppes coupon
// 1000 - 2000 -> 200 ruppes coupon
// 2000 - 3000 -> 300 ruppes coupon
// 3000 - 4000 -> 400 ruppes coupon
// >4000 -> 500 ruppes coupon
const userFirstMonthBalance = 0, userSeconMonthBalance = 0;
function totalBalance(a, b) {
    const sum1 = a + b;
    return sum1;
}
const userTotalBalance = totalBalance(userFirstMonthBalance, userSeconMonthBalance);
console.log(userTotalBalance);

//console.log("couponworth", couponprice);

function getCouponPrice(userTotalBalance) {
    let couponprice = 0;
    if (userTotalBalance >= 0 && userTotalBalance <= 1000) {
        couponprice = 100;
    }
    else if (userTotalBalance > 1000 && userTotalBalance <= 2000) {
        couponprice = 200;

    }
    else if (userTotalBalance > 2000 && userTotalBalance <= 3000) {
        couponprice = 300;
    }
    else if (userTotalBalance > 3000 && userTotalBalance <= 4000) {
        couponprice = 400;
    }
    else {
        couponprice = 500;
    }
    return couponprice;

}
const result =getCouponPrice(userTotalBalance);
console.log("Lucky People",result);

function squareOfTwoNumber(tre){
    //return square
    return  tre * tre;
}
let tre =5;
let square = squareOfTwoNumber(tre);
console.log("the square of "+ tre + " is " + square);


const lotteryNumber=6;
lotteryNumber===6 ? console.log("won the lottery "): console.log("lost the lottery");

const lottery = 7;
let isLotteryWon = lottery==8 ? true : false
console.log("Status of lottery",isLotteryWon);

const age=50;
let isSeniorCitizen = age>=60? "Senior":"Not Senior"
console.log("Status of Citizen",isSeniorCitizen);

/// This is dumy file



