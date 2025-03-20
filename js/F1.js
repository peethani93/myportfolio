function sumNumbers() {
    let num1 = parseInt(document.getElementById("first_number").value);
    let num2 = parseInt(document.getElementById("second_number").value);

    if (num2 >= num1) {
        let n = num2 - num1 + 1;
        let sum = (n * (num1 + num2)) / 2;

        document.getElementById("result").innerHTML = "SUM " + num1 + " and " + num2 + " is: " + sum;
    } else {
        document.getElementById("result").innerHTML = "The second number should be greater than or equal to the first number.";
    }
}
