try {
    vedant
} catch (error) {
    console.log(error)
    console.log(error.name)
    console.log(error.message)
}
// Custom Errors:
try {
    throw new ReferenceError("Vedant is Not Defined")
} catch (error) {
    console.log(error)
    console.log(error.name)
    console.log(error.message)
}
