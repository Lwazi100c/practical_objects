//Printing item and price function

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



//printing the total price function

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


//The "findItemOver" function.


var findItemOver = function(shopList, threshold){
    var filteredArray = [];
    for(let g = 0; g < shopList.length; g++){
        let currentItem = shopList[g];
       if(currentItem.qty > threshold){
            filteredArray.push(currentItem)
        } 
    }
    console.log(filteredArray)
}

//Testing the findItemOver function 

var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

findItemOver(itemList, 25)

console.log(`\n\nsome space\n\n`)

/* The function mostProfitableDepartment should:
 Create an empty object and call it "totalForEachDepartment".
 The key of each will be equal to the sale
 We increment the sale for an existing department
 and add a new department if it does not exist and set it key to 
 current sales.
 Then loop through these objects and print the highest department.
 */

var mostProfitableDepartment = function(dataOfSales){
    var totalForEachDepartment = {};
    for(let z = 0; z < dataOfSales.length; z++){
        if(totalForEachDepartment[dataOfSales[z].department] === undefined){
            totalForEachDepartment[dataOfSales[z].department] = dataOfSales[z].sales;
        }
        else if(totalForEachDepartment[dataOfSales[z].department] !== undefined){
            totalForEachDepartment[dataOfSales[z].department] += dataOfSales[z].sales;
        }
    }
    var highestProfitDepartment = 0;
    var currentDepartment = ``;
    for(let department in totalForEachDepartment){
        if(highestProfitDepartment <= totalForEachDepartment[department]){
            highestProfitDepartment = totalForEachDepartment[department]
            currentDepartment = department;
        }
    }
    console.log(`${currentDepartment} is the most profitable with price at ${highestProfitDepartment}`)
}

//The data

var salesData = [
    {department: 'hardware', sales: 4500, day: 'Monday'},
    {department: 'outdoor', sales: 1500, day: 'Monday'},
    {department: 'carpentry', sales: 5500, day: 'Monday'},
    {department: 'hardware', sales: 7500, day: 'Tuesday'},
    {department: 'outdoor', sales: 2505, day: 'Tuesday'},
    {department: 'carpentry', sales: 1540, day: 'Tuesday'},
    {department: 'hardware', sales: 1500, day: 'Wednesday'},
    {department: 'outdoor', sales: 8507, day: 'Wednesday'},
    {department: 'carpentry', sales: 8009, day: 'Wednesday'},
    {department: 'hardware', sales: 12000, day: 'Thursday'},
    {department: 'outdoor', sales: 18007, day: 'Thursday'},
    {department: 'carpentry', sales: 6109, day: 'Thursday'},
    {department: 'hardware', sales: 7005, day: 'Friday'},
    {department: 'outdoor', sales: 12006, day: 'Friday'},
    {department: 'carpentry', sales: 16109, day: 'Friday'}
];
 
mostProfitableDepartment(salesData)















