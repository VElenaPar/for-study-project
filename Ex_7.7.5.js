function getUniqueSortedNumbers(numbers) {
    const uniqueNumbers = [...new Set(numbers)];
    uniqueNumbers.sort((a, b) => a - b);
    return uniqueNumbers;
}
const numbers = [5, 3, 8, 3, 1, 5, 9, 8, 2];
const result = getUniqueSortedNumbers(numbers);
console.log(result);