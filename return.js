function add(number1, number2){
    console.log(number1,number2);
    var sum = number1 + number2;
    return sum;
}
var total = add(100,200);
// console.log(total);
function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
var myTaka = 200;
var singaras = bringSingara(myTaka);
console.log('ami ato gulo singara khayte parbo ai taka diye', singaras);