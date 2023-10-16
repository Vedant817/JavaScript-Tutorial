//Loops
//Three types:for,while,do while

//For in Loop
let obj = {
    Vedant:98,
    Vanshay:99,
    XYZ:50,
    ABC:52,
}

for(let a=0;a<4;a++){
    console.log(a + " " + obj[a]);
}

for(let a in obj){
    console.log("Marks of "+ a + " are " + obj[a])
}

//For of Loop:Mainly used for Arrays and Strings
for(let a of "Vedant"){
    console.log(a);
}

// While Loop
let i=0;
let n = 7;
while(i<n){
    console.log(i);
    i++;
}

// Do While Loop
let x=15;
do{
    console.log(x);
    x++;
}while(x>5)