let p1 = new Promise((resolve,reject)=>{
    console.log("Promise is Pending")
    setTimeout(()=>{
        alert("I'm a Promise and Fulfilled")
        resolve(true)
    },2000)
})

let p2 = new Promise((resolve,reject)=>{
    console.log("Promise is Pending")
    setTimeout(()=>{
        alert("I'm a Promise and Rejected")
        reject(new Error("This is an error")) // This is an syntax to generate an error.
    },2000)
})

// ** The advantage of promises over callback function is that they all are executed parallel.

p1.then((value)=>{ // When p is executed
    console.log(value) //! Then can actually have two arguments one result and second error.
})
p2.catch((error)=>{
    console.log(error)
})
