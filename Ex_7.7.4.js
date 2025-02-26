const person = {
    name: 'Alice',
    age: 25
};
// Функция для установки fullName
function setFullName(fullName) {
    this.fullName = fullName;
}
// Создаем новую функцию, привязанную к объекту person
const setPersonFullName = setFullName.bind(person);
// Устанавливаем fullName для объекта person
setPersonFullName('John Smith');
console.log(person);