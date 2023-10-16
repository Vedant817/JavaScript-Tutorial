let arr=[45,23,21]
// Maps: It makes a new array where as in place of loop it is not true.
let arr2=arr.map((value,index)=>{
    console.log(value,index);
    return value+1;
})
console.log("New Array is ",arr2)

// Filter
let arr3=[0,5,65,88,20,30]
let arr4=arr3.filter((value)=>{
    return value<50;
})
console.log(arr4)

// Reduce
let arr5=arr3.reduce((value, num)=>{
    return value+num;
})
console.log(arr5)
