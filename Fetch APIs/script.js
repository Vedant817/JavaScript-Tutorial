// Get Request URL
let p = fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((value1)=>{
    return value1 // Has only status(200-299).
}).then((value2)=>{
    console.log(value2.json) //! We can get only one type of format otherwise we will be getting errors.
})
//* Getting a response is a two step process that's why we are using two then functions.
//! Request Headers are somethings which we give while fetching the data like authentication, and response headers are what we get data from.

// Post Request
let option={
    method:"POST",
    header:{
        "Content-Type": "application/json",
    },
    body:JSON.stringify({
        title:"foo",
        body:"bar",
        userID:1,
    })
}
fetch('http://jsonplaceholder.typicode.com/posts', option).then((response)=>{
    return response.json
}).then((json)=>{
    console.log(json)
})
