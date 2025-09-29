/*
Things to improve:
    1. Alert user for non binary number input. (completed)
    2. Handle edgecase: negative binary number input. (completed)
*/


function convertToDecimal() {
    // get user input (binary number)
    // convert the binary number to decimal
    // update ui with the result
    var binaryNumber = document.getElementById("binary-number-input").value;
    var decimalNumber = toDecimal(binaryNumber);
    document.getElementById("decimal-number-output").innerText = decimalNumber;
}

function toDecimal(binaryNumber) {
    // check for empty binary Number edgecase
    // check for negative binary number edgecase
    // Convert each column in the number into its decimal representation
    // Get the accumulative sum of the column (decimal number)
    // return the decimal number
    var decimalNumber = "";
    if (binaryNumber === "") return decimalNumber;
    if (isNegativeDecimalNumber(binaryNumber)) {
        alert("Negative binary numbers are not yet supported.");
        return decimalNumber;
    }
    var columns = [];
    for (var i=binaryNumber.length - 1; i>=0; i--) {
        var column = binaryNumber[binaryNumber.length - 1 - i];
        number = Number(column);
        if (number >= 2) {
            msg = `The number ${binaryNumber} is not a binary number.`;
            alert(msg);
            return decimalNumber;
        }
        column = number * 2**(i);
        columns.push(column);
    }
    var decimalNumber = columns.reduce((acc, val) => acc + val, 0);
    decimalNumber = decimalNumber.toString();
    return decimalNumber;
}

function isNegativeDecimalNumber(binaryNumber) {
    return Number(binaryNumber) < 0;
}