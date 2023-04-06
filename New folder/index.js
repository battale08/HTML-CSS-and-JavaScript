/*for(let i=0; i<10; i++){
    if(i%2!==0){
        console.log(i);
    }
}
//objects
let animal = {
    name: "Cow",
    legs: 4
}
// Dot notation
console.log(animal.name);

let legsProp = "legs"
//Bracket Notation
console.log(animal[legsProp]);  

var email = true;
var facebook = false;
var google = false;

if(email|| facebook||google){
   console.log("Login success");
}

var user = "subadmin";

switch(user){
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("get access to create/delete courses");
        break;
    case "testprep":
        console.log("gets access to create/delete tests");
        break;
    case "user":
        console.log("gets access to consume content");
        break;
    default:
        console.log("Trial user");
        break;
}
 
var uid ="abc123";
var fullName="Anmol Dixit";
var email = "anmol@345gmail.com"

// old method
console.log("full Name is:" + fullName)    

// New method
console.log (`                        
  with unique ID: ${uid}
  user is: ${fullName}
  and his email is: ${email}
`);

// Global execution context scans my entire code and make functions available to me if they are declared
// but in C or C++ it will throw error

tipper(15);

function tipper(a){
    var bill= parseInt(a);
    console.log(bill + 5);
}                                  */

// INHERITENCE 

// parent class
class Person { 
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

// inheriting parent class
class Student extends Person {

}
let student1 = new Student('Jack');
student1.greet();

class teacher extends Person{

}
let teacher1 = new teacher ('Adam');
teacher1.greet();