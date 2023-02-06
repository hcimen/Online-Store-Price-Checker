let itemName = prompt("Enter name of item");
let basePrice = Number(prompt("What is base price for item?"));
let blackFriday = prompt("Black Friday? Answer yes or no");
let bFmessageYes = "Since it's Black Friday, we will reduce the price by 25%.";
let bFmessageNo = "It's not Black Friday, so the price didn't change for that. "
let sEngine = prompt("Did the purchaser find the product through a search engine? Answer yes or no.")
let sEngineYes = "We will increase the price by 1% to pay the search engine. ";
let sEngineNo = "The customer didn't use a search engine, so the price didn't change for that. "
let pComparison = prompt("Did the purchaser visit a comparison-shopping site? Answer yes or no.")
let pComparisonYes = "Since the customer visited a comparison-shopping site, we will reduce the price by 10%. "
let pComparisonNo = "The customer didn't visit a comparison-shopping site, so the price didn't change for that. "
let message = ""

if(blackFriday == "yes" || blackFriday =="Yes" || blackFriday ==1 || blackFriday == "y" && "Y" ) {
    console.log(message += "\n" + bFmessageYes);
    console.log(basePrice *= 0.75);
    }  
    else if(blackFriday == "no" || blackFriday =="No" || blackFriday ==0 || blackFriday == "N" && "n"  ) {
        console.log(message += "\n" + bFmessageNo);
    }

    else {
        alert("check your 'Black Friday' answer")
    }

if(sEngine == "yes" || sEngine =="Yes" || sEngine ==1 || sEngine == "Y" && "y"  ){
    console.log(message += "\n" + sEngineYes);
    console.log(basePrice *= 1.10);
}
    else if(sEngine == "no" || sEngine =="No" || sEngine == 0 || sEngine == "n" && "N") {
        console.log(message += "\n" + sEngineNo);
}
    else {
        alert("check your 'Search Engine' answers")
}

if(pComparison == "yes" || pComparison =="Yes" || pComparison ==1|| pComparison == "Y" && "y" ){
    console.log(message += "\n" + pComparisonYes);
    console.log(basePrice *= 0.90);
}
    else if(pComparison == "no" || pComparison =="No" || pComparison == 0 || pComparison == "N" && "n" ) {
        console.log(message += "\n" + pComparisonNo);
}
    else {
        alert("check your 'Price Comparison' answers")
}   
        
   document.getElementById("name").innerText = itemName;

   document.getElementById("price").innerText = basePrice.toFixed(2);

   document.getElementById("message").innerText = message;

   console.log("Order summary" + "\n" + "Item name is: " + itemName + "\n" + "Price of item is: " + basePrice.toFixed(2) + "\n" + "Reason for price change is: " + message )

   alert("Item name is: " + itemName + "\n" + "Price of item is: " + basePrice.toFixed(2) + "\n" + "Reason for price change is: " + message )