function calculator() {
    var counter = 0;

    function division(x, y) {
        counter++;
        return x / y;
    }
    function multiplication(x, y) {
        counter++;
        return x * y;
    }
    function substraction(x, y) {
        counter++;
        return x - y;
    }
    
    function addition(x, y) {
        counter++;
        return x + y;
    }

    function getUsage() {
        return counter;
    }

    return {
        division: division,
        multiplication: multiplication,
        substraction: substraction,
        addition: addition,
        getUsage: getUsage
    }
}

var myCalculator = calculator();
myCalculator.addition(10, 10);
myCalculator.addition(10, 10);
myCalculator.addition(10, 10);
myCalculator.addition(10, 10);
myCalculator.addition(10, 10);
myCalculator.getUsage();
