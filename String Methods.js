// ** In JavaSCript strings are immutable i.e. they can't be changed always as new string is returned.

let name="Vedant"
console.log(name.toUpperCase())
console.log(name.toLowerCase())

// String Slicing:
console.log(name.slice(2,4))  // Rightmost Extreme character is not included

let name2=name.replace("Vedant","Vanshay")
console.log(name2)

console.log(name.concat(" is a friend of ",name2,"since long time"))

name3="Vedant                     "
console.log(name3.trim()) // Will remove extra spaces from starting and ending of the string.
