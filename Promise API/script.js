let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Value 1")
    },1000)
})
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Value 2")
    },2000)
})
let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Value 3")
    },3000)
})
// p1.then((value)=>{
//     console.log(value)
// })
// p2.then((value)=>{
//     console.log(value)
// })
// p3.then((value)=>{
//     console.log(value)
// })

// * If we want to print somethings if all are executed:
let promise_all = Promise.all([p1,p2,p3])
promise_all.then((value)=>{
    console.log(value)
}) // Here if any promise fails to execute then promise.all will not be executed.

let promise_all2=Promise.allSettled([p1,p2,p3])
promise_all2.then((value)=>{
    console.log(value)
})

let promise_all3=Promise.race([p1,p2,p3]) // If we want result of which promise is executed faster.
promise_all3.then((value)=>{
    console.log(value)
})

let promise_all4=Promise.any([p1,p2,p3]) // If we want result of which promise is executed faster and is resolved also.
promise_all4.then((value)=>{
    console.log(value)
})

// ! Promise.resolve will return the resolved promise with value and Promise.reject will return the rejected promise with error printing.
