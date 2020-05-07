const userInput = prompt("How much money do you have?");

const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
};

let allPrice = 0;

const mango = new Cashier('Mango', products, allPrice, userInput);
if (mango.countChange >= 0) {
    mango.onSuccess();
} else {
    mango.onError();
};

function Cashier(name, productDatabase, allPrice, userInput) {
    this.name = name;
    this.productDatabase = Object.values(productDatabase);
    this.customerMoney = Number(userInput);
    this.countTotalPrice = function(){
        for(let item of this.productDatabase) {
        allPrice += Number(item);
        }
        return Number(allPrice);
    };

    this.countChange =  Number(userInput) - Number(this.countTotalPrice());

    this.onSuccess = function() {
            alert("Thank you for your purchase.Your surrender ${this.countChange}")
    };
    this.onError = function(){
            alert("Unfortunately you need more money.")
        }
    this.reset = function()
    {this.countTotalPrice() = 0};
};