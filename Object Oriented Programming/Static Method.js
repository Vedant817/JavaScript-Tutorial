class Animal{
    constructor(name){
        this.name=name;
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1,name.length)
    }
    walk(){
        console.log("Animal: ", +Animal.capitalize(this.name)+" is walking");
    }
}
let a = new Animal("dog")
a.walk()
