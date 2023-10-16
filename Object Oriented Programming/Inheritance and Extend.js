class Animal{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    run(){
        console.log(this.name +" is running")
    }
    shout(){
        console.log(this.name +" is shouting")
    }
}
class Monkey extends Animal{
    eat(){
        console.log(this.name +" is eating banana")
    }
}
let m = new Monkey("Bruno","Brown")
m.eat()
m.run()
m.shout()
