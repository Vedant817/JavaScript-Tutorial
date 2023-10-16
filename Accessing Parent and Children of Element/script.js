// ** Children:
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(document.body.childNodes) // This is a node list.
// console.log(Array.from(document.body.childNodes))

// ** Parent:
/*
    1. DOM Collections are read-only and can't be changed.
    2. DOM Collections are live.
    3. They are iterable using for of loop.
*/
console.log(document.body.firstChild)
a=console.log(document.body.firstChild)
console.log(a.parentNode) // Will return if it is a node like comments etc.
console.log(a.parentElement) // Will return only if there is an element.
console.log(a.firstChild.nextSibling) // Will return second div.
