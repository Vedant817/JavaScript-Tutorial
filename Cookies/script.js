//* Cookies are small strings of data that are stored directly into the browser.
// To get the cookies we can do document.cookie separated by semi-colons.
document.cookie = "Vedant" // It only adds the cookies instead of updating them.

// Updating the cookie
document.cookie="Name= Vanshay"
document.cookie="Name= XYZ" // This will update the cookie of name.

//! While adding a cookie we can't write the special characters in key and value. But to avoid this problem we can use encodeURIComponent
let key = prompt('Enter the key')
let value = prompt('Enter the value')
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}` // To decode use decodeURIComponent
//* We can set only one cookie at a time and other entities will be ignored. And in place of that we can use the path f we want.
