// let p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Promise is resolved")
//         resolve(56)
//     },2000)
// })
// p.then((value)=>{
//     console.log(value)
//     let p2= new Promise((resolve,reject)=>{
//         console.log("Promise 2")
//     })
//     return p2
// }).then(()=>{
//     console.log('We are done.')
// }) // ! Here, we can also make chain by returning any value by then function.

// ** LoadScript with promises:
const loadScript=(src)=>{
    return new Promise((resolve,reject)=>{
        let script=document.createElement("script")
        script.type="text/javascript"
        script.src=src
        document.body.appendChild(script)
        script.onLoads=()=>{
            resolve(1)
        }
        script.onerror=()=>{
            reject(0)
        }
    })
}
let p1=loadScript("https://xyz.com")
p1.then((value)=>{ // We can attach multiple then/catch i.e. eventHandlers to same promise.
    console.log(value)
}).catch(()=>{
    console.log("Sorry We are having Problem in Loading this script.")
})
