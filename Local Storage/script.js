//* Local Storage is a web storage object which are not sent to to the server with each request. This data survives a full page refresh and even a full browser restart. Both key and value should be string here and if any other is entered it will be converted to a string.
localStorage.setItem('NAME','Vedant')

let key=prompt("Enter the value of Key")
let value=prompt("Enter the value")
localStorage.setItem(key, value)
console.log(`The value of the Key ${key} is ${localStorage.getItem(key)}`)
localStorage.removeItem(key)

console.log(localStorage.length)
console.log(localStorage.length(1)) // Second Key will be printed.

//! Session Storage:Used less often than local storage with properties and methods exactly same. The session storage exists only within the current tab, New tab with same page have different session storage.
// To listen the changes in other tabs
window.onstorage=(e)=>{
    alert("Changed")
    console.log(e)
}
