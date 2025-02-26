//функция calculate
function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            throw new Error('Неизвестный оператор');
    }
}
//объект с параметрами
const params = {
    a: 2,
    b: 3,
    operator: '+'
};
//метод apply для вызова функции calculate
const result = calculate.apply(null, [params.a, params.b, params.operator]);
console.log(result);