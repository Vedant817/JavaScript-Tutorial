console.log("Hello") // Prints the data
console.error("This is an error") // Displays an error in the webpage in red color highlight.
console.assert(55>52) // This is give an error if condition inside is false.
console.clear() // This will clear the console.

let obj={a:1,b:5,c:9}
console.table(obj)
console.warn("This will show the warning") // This shows the warning in the console.
console.info("This is an info.") // This is same as console.log().

// Following code is used to calculate the time by time function.
console.time("Loop")
let a=0
for(a=0;a<100;a++){
}
console.timeEnd("Loop")  // Will display the time to run the loop.
