let a = first.getAttribute("class") // Here first is we are accessing the element by id.
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))
// first.setAttribute("hidden",true)
first.setAttribute("class","xyz")
// first.removeAttribute("class")
console.log(first.attributes)
console.log(first.dataset) // This is done to keep our custom attributes unique from defined keywords.
console.log(first.dataset.game)
console.log(first.dataset.player)
