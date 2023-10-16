let x=Math.floor(Math.random*100+1)
let a=prompt("Enter the Number")
a=Number.parseInt()
while(true){
    if(a>x){
        console.log("The guessed number is big");
    }
    else if(a<x){
        console.log("Guessed number is less");
    }
    else{
        console.log("You guessed the correct number");
        break;
    }
}
