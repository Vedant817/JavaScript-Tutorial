//In Js there are 7 primitive Data types.
let a = null;
let b = 345;
let c = true;
let d = BigInt("567") + BigInt("3");
let e = "Vedant";
let f = Symbol("Hello World!!");
let g = undefined;
console.log(a, b, c, d, e, f, g);
console.log(typeof d);

const item = {
    Harry: true,
    Vedant: false,
    Lovish: 98,
    Rohan: undefined,
};
console.log(item["Vedant"])