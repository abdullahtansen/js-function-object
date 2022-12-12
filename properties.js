var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse : 1,
    pen: 25
}

// when you know the specific property name, use dot notation to get the property value
var penCount = shoppingCart.pen;
// alternative system 
var penCount2 = shoppingCart['pen'];
var properties = Object.keys(shoppingCart);
var propertiesValue = Object.values(shoppingCart);
console.log(properties);
console.log(propertiesValue);
console.log(shoppingCart);