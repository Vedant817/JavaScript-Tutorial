const hello = require('./module1.js') //* const {hello,nhello} = require('./module1.js')
//! import hello from "./module1" ===> use export in module1.js
console.log(hello.hello())
console.log(hello.nhello("Vedant")) // Instead of this we can use destructuring.
