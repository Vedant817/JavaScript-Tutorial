class Employee{
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

let p = new Programmer
p.requestLeaves(5)
