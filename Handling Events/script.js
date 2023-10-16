btn.addEventListener('click',function(e){ // The e here is an event object.
    console.log(e.target)
    console.log(e,e.type/*Pointer*/,e.clientX,e.clientY /*Shows the co-ordinates of pointer*/)
    alert("Hello World!!");
})
// ** If we want to remove a particular eventListener then we first need to define the function in a variable.
// ** To open any site use window.location or window.open function .

// Fetching the content using JavaScript:
/*
 *  let url=....
 *  console.log(await fetchContent(url))
*/
