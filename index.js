
let listOfItems=[["Milk",1.2],["Cocoa",2],["Salad",2],["Carrots",2],["Tomatoes",2.5],["Ready meals",5]];
let item;
let price;
let sum = 0;
while(true){
    item = prompt("Add an item to your shopping list. (Press Cancel to terminate): ");
    if(item === null){
        break;
    }else{
        price = Number(prompt("Enter the price of the item: "));
        if(isNaN(price)){
            alert("Wrong price input! Try again. ");
        }
        else{
            listOfItems.push([item,price]);
        }
        
    }
    
}

for(let i = 0;i < listOfItems.length; i++){
    console.log(listOfItems[i][0]+ " costs: "+listOfItems[i][1]+ "£");
    sum += listOfItems[i][1];
}
console.log("Your items' cost in total is: "+sum+ "£");