function calculateTax(amount) {
    const taxRate = 0.10; // 10% tax
    const tax = amount * taxRate;
    return tax;
}

function convertToUpperCase(str) {
    return text.toUpperCase();
}

function findMaximum(arr) {
    if (arr.length === 0) return null;
    return Math.max(...arr);
}
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}   
function calculateDiscountedPrice(price, discount) {
    if (discount < 0 || discount > 100) {
        throw new Error('Discount must be between 0 and 100');
    }
    const discountedPrice = price - (price * (discount / 100));
    return discountedPrice;
}



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };