function avg(x,y){
    return (x+y)/2;
}
let a=2;
let b=9;
let c=10;
console.log(avg(a,b));
console.log(avg(c,b));
console.log(avg(a,c));

// Way-2
const sum=(x,y)=>{
    console.log("sum of "+ x +" and " + y+" is "+ (x+y));
}
(sum(a,b));
(sum(c,b));
(sum(a,c));
