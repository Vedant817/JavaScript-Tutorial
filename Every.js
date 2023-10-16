const items=[
    {name: 'Bike',price:100},
    {name: 'TV',price:200},
    {name: 'Album',price:10},
    {name: 'Book',price:5},
    {name: 'Phone',price:500},
    {name: 'Computer',price:1000},
    {name: 'Keyboard',price:25},
]

const hasExpensiveItems=items.every((items) =>{ //? Checks every item of the array.
    return items.price >=100
})
console.log(hasExpensiveItems);