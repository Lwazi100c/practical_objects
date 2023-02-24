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

//The most profitable day

var mostProfitableDay = function(arrayOfSales){
    //creating an object of each day's totals
    var totalForEachDay = {};
    for(let k = 0; k < arrayOfSales.length; k++){
       if(totalForEachDay[arrayOfSales[k].day] === undefined){
            totalForEachDay[arrayOfSales[k].day] = arrayOfSales[k].sales;
        } 
        totalForEachDay[arrayOfSales[k].day] += arrayOfSales[k].sales;
    }
    //getting the most profitable day
    var curTotal = 0;
    var dayName = ``;
    for(let day in totalForEachDay){
        if(curTotal <= totalForEachDay[day]){
            curTotal = totalForEachDay[day];
            dayName = day;

        }
    }

    console.log(totalForEachDay)
    console.log(`Now, the most profitable day with R${curTotal} total price is ${dayName}.`);
}

mostProfitableDay(salesData)

console.log(`\nsome more space\n\n`)
 
//The wordCrush(mostWordsEndWith).

/*This function should:
take one parameter, the string sentence
split string by space
create an empty object to track end letters and increment them
loop through an array and increment existing and add new
loop through this object to get hightest letter
create an array for adding words ending with above letter(letter)
create an empty object for adding letter and word array(words)
add highest letter

*/

var mostWordsEndWith = function(stringSentence){
    var stringArray = stringSentence.split(` `);
    //stripping a period at the end of the last wor first.
    var lastWord = ``;
    for(let i = 0; i < stringArray[stringArray.length - 1].length - 1; i++){
        lastWord += stringArray[stringArray.length - 1][i];
    }
    stringArray[stringArray.length - 1] = lastWord;// replacing with word without period.
    //console.log(stringArray)
    //tracking the end letter and getting their totals
    var totalEndLetters = {};
    for(let m = 0; m < stringArray.length; m++){
        //accessing
        var lastLetter = ``;
        for(let l = 0; l < stringArray[m].length; l++){
            if(l === stringArray[m].length - 1){
                //console.log(stringArray[m][l])
                if(stringArray[m][l] !== `,` && stringArray[m][l] !== ` `){
                    if(totalEndLetters[stringArray[m][l]] === undefined){
                        totalEndLetters[stringArray[m][l]] = 0;
                    }
                    totalEndLetters[stringArray[m][l]] += 1;
                }
            }
        }
        //console.log(lastLetter)
    }
    console.log(totalEndLetters)

    //getting highest occuring letter
    var highLetter = 0;
    var currentHighLetter = ``;
    for(let highestLetter in totalEndLetters){
        if(highLetter <= totalEndLetters[highestLetter]){
            highLetter = totalEndLetters[highestLetter];
            currentHighLetter = highestLetter;
        }
    }
    var highLetterWords = [];
    for(let w = 0; w < stringArray.length; w++){
        if(stringArray[w].endsWith(currentHighLetter)){
            highLetterWords.push(stringArray[w]);
        }
    }
    //console.log(highLetterWords)
    // console.log(`${currentHighLetter} is the most occuring letter with occurance of ${highLetter}`);

    //creating an object to return as final results
    var finalObject = {};
    finalObject.letter = currentHighLetter;
    finalObject.words = highLetterWords;
    console.log(finalObject)
}

var sentence = 'Down by the river there is a man that quiver and shiver, but he needs to deliver a packet that he think is a big racket and a packet of of gum.'

mostWordsEndWith(sentence)
























