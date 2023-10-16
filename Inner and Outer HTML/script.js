console.log(document.getElementsByTagName('span'))[0] // This is show the tag.
console.dir(document.getElementsByTagName('span'))[0] // This will show span tag as an object and will display all it's properties.
// ** These are valid for element nodes only.
console.log(first.innerHTML) // i
console.log(first.outerHTML) // span+i
// first.innerHTML="<i> Hey! </i>"
// ** innerHTML is valid for elements node only. For other type of nodes we can use nodeValue or data.
console.log(document.body.textContent) // Will give the text of all the webpage.
