let promise=new Promise(function(resolve,reject){
    console.log("I'm in Promise")
    resolve(56) // ** This is printed at the last of the program if there in  no error in the program.
})

console.log("Hello")
setTimeout(function(){
    console.log("Hello of Timeout")
},2000)
console.log("My Name is Vanshay")
console.log(promise)
