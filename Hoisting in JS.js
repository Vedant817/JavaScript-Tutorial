//* Hoisting refers to the process whereby the interpreter appears to move the declaration to the top of the code before execution.
greet()
function greet(){
    console.log("Hello!")
}
// Wrong Practice:
// let x=function(){
//     console.log("Hello!")
// }
//* Here before running the interpreter will move all the declarations to the top of the code.

console.log(a) // Undefined because it only declares not initializes. 
var a=9 //! Not possible in let statements.
console.log(a)
