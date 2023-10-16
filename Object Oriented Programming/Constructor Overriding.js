class Employee{
    constructor(){
        console.log("Employee is Created")
    }
    login(){
        console.log("The employee has logged in")
    }
    logout(){
        console.log("The employee has logged out")
    }
    requestLeaves(leaves){
        console.log(`The employee has requested ${leaves} leaves`)
    }
}
class Programmer extends Employee{
    //*If we don't make any constructor here then that of the above class will be copied.
    constructor(){
        super() //! If we derived a class then we need to call the constructor of super.
        console.log("Programmer is created.")
    }
    requestCoffee(x){
        console.log(`The employee has requested ${x} coffees`)
    }
    requestLeaves(leaves){
        // console.log(`The employee has requested ${leaves +1} leaves(One Extra granted)`) Must be Avoided.
        super.requestLeaves(leaves)
        console.log("One extra has been granted.")
    }
}

let e = new Employee
e.login()
e.requestLeaves(2)

console.log("*************************************************************************************")

let p = new Programmer
p.requestLeaves(5)
