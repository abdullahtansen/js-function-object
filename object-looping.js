var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse : 1,
    pen: 25
}

const keys = Object.keys(shoppingCart);
console.log(keys);
const values = Object.values(shoppingCart);
console.log(values);
// const entry = Object.entries(shoppingCart);
// console.log(entry);
// var keys = [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen' ];
for(var i =0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    // console.log(propertyName, propertyValue);
}

// for in loop
for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName]
    console.log(propertyName,value);
}