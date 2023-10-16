const alphabets=['A','B','C','D','E','F']
const numbers=['1','2','3','4','5','6']

const [a,,c,...rest]=alphabets
console.log(a,c,rest);

function sumAndMultiply(a,b){
    return [a+b,a*b];
}

const [sum,product]=sumAndMultiply(2,3)
console.log(sum,product);
//! We can set a default vale to parameter not present in the object.