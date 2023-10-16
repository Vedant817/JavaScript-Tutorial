const Num=()=>{
    return Math.floor(Math.random()*(3-1)+1)
}
console.log("1-> Snake  2-> Water  3-> Gun")
let userPoints=0
let compPoints=0
let i=1
while(i<=10){
    let user=prompt("Enter the Code")
    user=Number.parseInt(user)
    let comp=Num()
    
    if(user==1 && comp==2){
        console.log("User Wins");
        userPoints+=1;
    }
    else if(user==1 && comp==3){
        console.log("Comp Wins");
        compPoints+=1;
    }
    else if(user==2 && comp==1){
        console.log("Comp Wins");
        compPoints+=1;
    }
    else if(user==2 && comp==3){
        console.log("User Wins");
        userPoints+=1;
    }
    else if(user==3 && comp==1){
        console.log("User Wins");
        userPoints+=1;
    }
    else if(user==3 && comp==2){
        console.log("Comp Wins");
        compPoints+=1;
    }
    else{
        console.log("Tie")
    }
}

console.log("User's Point",userPoints)
console.log("Computer's Points",compPoints)
if(userPoints>compPoints){
    console.log("You Win")
}
else{
    console.log("You Lose")
}
