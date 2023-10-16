let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");
console.log(john);
console.log(weakMap);

john = null; // overwrite the reference
// john is removed from memory!
console.log(john);
console.log(weakMap);

// weakMap.set(john, "secret documents");
// console.log(john);