let id1=document.getElementById("id1")
let sp1=document.getElementById("sp1")
console.log(id1)
console.log(id1.matches(".box")) // If wrong class is given then it will show false.
// ** Closest-> Looks for the nearest CSS Ancestor that matches the given CSS Selector. The item itself is also checked.
console.log(sp1.closest(".box"))
console.log(id1.contains(sp1))
console.log(sp1.contains(sp1))
