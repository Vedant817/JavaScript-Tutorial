//* JavaScript objects have special property called prototype that is either null or reference to another object. When we try to read a property of object and it is missing then JS automatically takes it from the prototype. This is Prototypal Inheritance.
let a={
    name:"Vedant",
    age:19
}
console.log(a)

let p={
    run:()=>{
        alert('Run')
    }
}

a.__proto__= p
a.run()
//! We can make as many prototypes. First Access will be object itself and then it will shift toward the prototypes.
