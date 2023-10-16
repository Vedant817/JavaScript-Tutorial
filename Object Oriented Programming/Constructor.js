class Form{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    show(){
        console.log("Name is ",this.name)
        console.log("Age is ",this.age)
    }
}
let Vedant = new Form("Vedant",19)
Vedant.show()
