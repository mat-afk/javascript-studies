// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

let firstName = "Domingos" // string
let age = 21 // numeric
let student = true // boolean

console.log("Hello,", firstName)
console.log("You are", age, "years old")
console.log("Enrolled:", student)

document.getElementById("p1").innerHTML = "Hello, " + firstName
document.getElementById("p2").innerHTML = "You are " + age + " years old"
document.getElementById("p3").innerHTML = "Enrolled:" + student
