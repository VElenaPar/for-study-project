// функция printInfo
function printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}
// объект person
const person = {
    name: 'Alice',
    age: 25
};
// вызов функции printInfo с контекстом person
printInfo.call(person);
