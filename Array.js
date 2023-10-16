// ** In JavaScript, array can store data of different types.
let a = [1,2,3,4,false,null,"None"]
console.log(a)
console.log(`The length of array is ${a.length}`)

for(let x of a){
    console.log(x)
}

a[2]=31 // Updating the value of array.
console.log(a)
