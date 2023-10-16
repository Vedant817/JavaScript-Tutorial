// ** HTML Insertion Methods
let a=document.getElementsByTagName("div")
a.innerHTML=a.innerHTML+"<h1>Hii</h1>"

// Creating an element
let div =document.createElement("div");
div.innerHTML="<h1>Hello!</h1>";
a.append(div);
a.prepend(div);
a.before(div); // Outside the a container.
a.after(div); // Inside the a container.
// a.replaceWith(div)
