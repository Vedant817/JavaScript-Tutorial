const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
const wrapper = document.createElement("div");
wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
].join("");

alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
    alertTrigger.addEventListener("click", () => {
    appendAlert("Nice, you triggered this alert message!", "success");
    });
}

// ** Changing the card title to red
// let cTitle=document.getElementsByClassName("card-title")[0]
// cTitle.style.color="red"

// ** Using by getId
let cTitle=document.getElementById("firstcardtitle");
cTitle.style.color="blue";

// ** Using Query Selector
let cTitles=document.querySelectorAll(".card-title")
console.log(cTitles)
cTitles[0].style.color="red"
cTitles[1].style.color="blue"
cTitles[2].style.color="yellow"
// document.querySelector is more afficiant: Returns the first element of the given CSS Selector
console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))
