module.exports = function (){
  return {
    add: function(num1, num2) { 
        var sum = num1 + num2
        console.log("Sum = ", sum);
        return sum;
    },
    multiply: function(num1, num2) {
        var product = num1 * num2
        console.log("Product = ", product);
        return product;
    },
    square: function(num) {
        var square = num * num
        console.log("Square = ", square);
        return square;
    },
    random: function(num1, num2) {
        let randNum = Math.floor(Math.random() * (num2 - num1 + 1) + num1);
        console.log("Number = ", randNum);
        return randNum;
    }
  }
};