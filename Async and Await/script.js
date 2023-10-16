// ! Async function always returns a promise and other values are wrapped inside a promise automatically.
async function show(){
    let p1=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27 Deg")
        },1000)
    })

    let p2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("21 Deg")
        },2000)
    })

    let one= await p1 // Will wait till promise is fulfilled.
    let two= await p2
    return [one,two]
}
show().then((x)=>{ //* Will give error if async is removed.
    alert(x[0])
    alert(x[1])
})
