//? Generators are used to when we want to generate data on the spot and not save it.
// function* generateNumbers(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
// }
// let gen=generateNumbers();
// console.log(gen.next()); //*Returns an object
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// Generate Function generates an
// infinite series of Natural Numbers
function* nextNatural() {
    let naturalNumber = 1;

    // Infinite Generation
    while (true) {
        yield naturalNumber++;
    }
}

// Calling the Generate Function
let gen = nextNatural();

// Loop to print the first
// 10 Generated number
for (let i = 0; i < 10; i++) {
    // Generating Next Number
    console.log(gen.next().value);
}
