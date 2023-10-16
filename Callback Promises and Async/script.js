// Asynchronous Programming:
console.log("Start");
setTimeout(function () {
    console.log("This is Asynchronous Function");
}, 3000);
console.log("End");

// ** Callback function is passed into another function as an argument,which is then invoked inside the outer function to complete one action.
function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onerror = function () {
    console.log("Check the Script wanted to be loaded.");
    };
    document.body.appendChild(script);
}
function hello() {
    console.log("Hello World!!");
}
loadScript(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
    hello
); // Script will be loaded and hello function will be called after that.
// Avoided bec can lead to problem and Pyramid of Doom

// ** Promises: It is promise for the code execution.The code either executes or fails,in both cases the user will be notified.
