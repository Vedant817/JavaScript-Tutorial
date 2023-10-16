//! The Reflect namespace object contains static methods for invoking interceptable JavaScript object internal methods. 
const duck = {
    name: "Maurice",
    color: "white",
    greeting() {
        console.log(`Quaaaack! My name is ${this.name}`);
    },
};

Reflect.has(duck, "color");
// true
Reflect.has(duck, "haircut");
// false

//? The Reflect.ownKeys method returns an array containing the own properties of the target object. 
Reflect.ownKeys(duck);
// [ "name", "color", "greeting" ]

Reflect.get(duck,'name')

Reflect.getOwnPropertyDescriptor(duck,'name')

Reflect.set(duck, "eyes", "black");
// returns "true" if successful
// "duck" now contains the property "eyes: 'black'"

Reflect.deleteProperty(duck,'eyes')
