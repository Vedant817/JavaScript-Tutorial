//* Destructuring:
let arr=[3,5,9,65,31]
let [b,c,...rest]=arr
console.log(b,c,rest)

let [x,,y,...rest2]=arr // Will start rest from 65 and other as mentioned will be handled.
console.log(x,y,rest2)

//* Spread Operator:
let arr1=[3,5,9,65,31]
let obj={...arr1}
console.log(obj)

//* Special Case of Object:
let obj2={
    name:"Vedant",
    age:19,
    language:"Javascript"
}
console.log({...obj2,name:"Vanshay"})
