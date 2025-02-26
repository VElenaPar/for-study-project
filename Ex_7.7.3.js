const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 15 },
    { name: 'Eve', age: 20 }
];
const adults = users.filter(user => user.age >= 18);
const names = adults.map(user => user.name);
console.log(adults); // Массив пользователей старше или равных 18 лет
console.log(names);  // Массив имен пользователей