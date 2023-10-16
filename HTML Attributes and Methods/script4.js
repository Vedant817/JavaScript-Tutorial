// ** setTimeout: runs only ones after the given interval
alert("Hello")
let a =setTimeout(function(){
    alert("I'm inside the timeout function.")
},2000)
console.log(a) // This will display the timer ID.
// ** setInterval: run again and again after defining the delay.
setInterval(function(){
    alert("This is setInterval")
},5000)
