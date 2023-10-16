//! Finally Clause is something which will always execute whether there is error in try catch or not.
try {
    let a=9
    console.log(b)
} catch (error) {
    console.log("The error is there")
    console.log(hello)
}
finally{ //* This is use full if there is an error in catch block but something needs to be executed then this block is useful otherwise the execution will stop.
    console.log("Done Executing")
}

try {
    let a=9
    console.log(b)
    return // Will take the execution to finally by ignoring the catch.
} catch (error) {
    console.log("The error is there")
    console.log(hello)
}
finally{ //* This is use full if there is an error in catch block but something needs to be executed then this block is useful otherwise the execution will stop.
    console.log("Done Executing")
}
