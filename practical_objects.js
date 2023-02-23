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


