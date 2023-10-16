// ** Inserting adjacent element.
first.insertAdjacentHTML('beforebegin','<div class="test">Beforebegin</div>')
first.insertAdjacentHTML('afterbegin','<div class="test">Afterbegin</div>')
first.insertAdjacentHTML('beforeend','<div class="test">Beforeend</div>')
first.insertAdjacentHTML('afterend','<div class="test">Afterend</div>')

// ** ClassName and CLassList
second.className="red text-dark"
second.classList
second.classList.remove("text-dark") // For removing we can use class list.
second.classList.add("text-dark") // For adding the class
// second.classList.toggle("text-dark")  -> Will add if doesn't exist and removes if exists.
