class Animal{
    constructor(name) {
        this._name=name
    }
    hello(){
        console.log("Hello!")
    }
    get name(){
        return this._name;
    }
}
let a = new Animal("XYZ")
a.hello()
console.log(a.name) //* We can't access the name without get in such way.
console.log(a instanceof Animal) //! Returns True if object belongs to the class or class is inheriting from it.
