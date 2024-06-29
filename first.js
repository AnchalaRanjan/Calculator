console.log("My name is Anchala", 23, true)
// checking type
a = "Anchala Ranjan"
b = 23
c = false
d = 89.98
console.log("type of a is", typeof a)
console.log("type of b is", typeof b)
console.log("type of c is", typeof c)
console.log("type of d is", typeof d)

// print even and odd
const q = 14;
if (q % 2 == 0) {
    console.log("this number is even");
}
else {
    console.log("this number is odd");
}

// using for loop print prime number
let k= 7
let prime = true
for(let j=2;j<k;j++){
    if(k%j==0){
        prime = false
        console.log("Not prime number")
        break
    }
   }
if (prime == true)
{
    console.log("it is a prime number")
}

//switch case
const Numbers = 78;
switch(Numbers%2){
     case 0:
        console.log ("it is an even number")
        break;
    case 1:
        console.log ("it is an odd number")
        break;
    default:
        console.log ("invalid number")
        break;
} 
//100 marks - A+
// 90-99 marks - A
// 80-89 marks - B
// 70-79 marks - C
// 60-69 marks - D
//less than 60 - E

const marks = Math.floor(100/10)
console.log(marks)
    switch(marks){
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

    // Array
    const num =[67,78,98,56,76,56,76]
    let sum = 0
    for(let i=0;i<num.length;i++){
        const element = num[i]
        sum=sum+element
    }
    console.log(sum);

    //multiplication
    const nums =[54,87,76,45,76]
    let multi = 1
    for(let l=1;l<nums.length;l++){
        const elements = nums[l]
        multi=multi * elements
    }
    console.log(multi);

    //ascending order
    const numb=[56,89,87,1,6,3,4,7]
    numb.sort(function(a,b){return a-b});
    console.log(numb)

    const arr=[45,76,7,8,9,56]
    for(i=1;i<arr.length;i++)
      for(j=0;j<i;j++)
if (arr[i]< arr[j]){
    x=(arr[i]);
    arr[i]=arr[j];
    arr[j]=x;
}
console.log(arr);

//Decending order
const number=[45,98,76,34,74,65,43]
number.sort(function(a,b){return b-a});
console.log(number)

//
let mark=90;
switch(true) {
    case (mark == 100):
    console.log('A+');
    break;
    case (mark >=90 && mark<=99):
    console.log('A');
    break;
    case (mark >=80 && mark<=89):
    console.log('B');
    break;
    case (mark >=70 && mark<=79):
    console.log('C');
    break;
    case (mark >=60 && mark<=69):
    console.log('D');
    break;
    default:
        console.log('E');
        break;
}

//for each loop
const myCountry =["India", "China","Canada",1947,true];
myCountry.forEach((c) => (console.log(c)));

//object
const mySym = Symbol("key1")
const user=
{
    name:"Anchala",
    "full name":"Anchala Ranjan",
    age:23,
    Location:"patna",
    email:"anchalaranjan9@gmail.com",
    [mySym] : "mykey1",
}
    
console.log(user.email)
console.log(user["email"])
console.log(user.age)
console.log(user["full name"])
console.log(user[mySym])

user.email ="anchalaranjan89@gmail.com"

//Object.freeze(user)
console.log(user);



//how we can declare Symbol

//const mySym = Symbol("key1")
//const newUser={

//[mySym] : "mykey1",
//}

//console.log(typeof newUser[mySym])

user.greeting = function(){
    console.log("Hello Anchala");

}
user.greetingTwo = function(){
    console.log(`Hello Anchala,${this.name}`);
}
console.log(user.greeting());
console.log(user.greetingTwo());





    
    

    





