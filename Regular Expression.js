const regex=/(very)/g
const text="Vedant is a very very very good."
console.log(text.replace("very","")) // Only one changed
console.log(text.replace(regex,""))
/*
    If we want to replace few alphabet of the word from the end then it can be done by /.very/g .
*/