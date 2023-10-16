let message="Good Global"
function hello1(){
    message="Good Morning"
    {
        console.log("hello1 "+message)
    }
    {
        let message="Inside" //! Let has block scope if it was not used then in next inside will be printed.
        console.log("hello1 "+message)
    }
    console.log("hello1 "+message)
    let c = function(){
        console.log("I'm c "+ message)
    }
    return c
}
hello1()
let c1= hello1()
c1()

function hello2(){
    message="Gm"
    let c = function(){
        console.log(message)
    }
    message="Gn"
    return c
}
let c2= hello2()
c2() // Always references are returned so Gn will be printed. 
