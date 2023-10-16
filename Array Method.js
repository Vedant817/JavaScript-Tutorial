let num=[1,2,3,4]

// Converting array to string
let b=num.toString()
console.log(b)

// Join Function: Will join all the elements of the array using a separator
let c = num.join("_")
console.log(c)
console.log(typeof c)

// ** Push function returns the new length of the array where as pop function returns the popped element.

// Shift Function: Removes the first element of the array.
num.shift()
console.log(num)

// Adding element to the array
num.unshift(1)
console.log(num)

// ** delete function: It will not change the length of the array and will print empty item in place of delete element
delete num[0]
console.log(num)
console.log(num.length)

// Concatenation of array
let d=["a","b"]
console.log(num.concat(d))  // Can concatenate more than one array.

// Sorting of an array
num.sort() // ** This function will sort the array alphabetically,which means that it considers elements to be string.
console.log(num)

let compare =(a,b)=>{
    return a-b;
}
num.sort(compare)
console.log(num)

// Splice: Used for adding the elements to the array
num.splice(2,3,21,56,98) // Index: No. of Elements to be replaced: Items added
console.log(num)

// Slicing: It will create a new array
let newNum=num.slice(1,3)
console.log(newNum)

// Loops on array
num.forEach((element)=>{
    console.log(element)
})