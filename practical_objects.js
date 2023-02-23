var printShoppingList = function(list){
    for(let k = 0; k < list.length; k++){
        var currentItem = list[k].itemName;
        var currentPrice = list[k].price;
        console.log(`* ${currentItem} @ R${currentPrice}`)
    }
}

var shoppingList = [
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 19.50 }
];
printShoppingList(shoppingList)



var shoppingList = function(shoppingArray){
    var totalPrice = 0;
    for(let m = 0; m < shoppingArray.length; m++){
        var currentPrice = shoppingArray[m].price;
        totalPrice += currentPrice;
    }
    console.log(totalPrice);
}
//checking the function using the first data

var shoppingList1 = [
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 19.50 }
];
shoppingList(shoppingList1)//37.5

//checking the function using the second data

var shoppingList2 = [
    { itemName : 'Apples', price : 7.50 },
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 23.00 },
    { itemName : 'Bread', price : 9.50 }
];
shoppingList(shoppingList2);

