/*
1. Создайте массив из следующих значений

'455'
87.15
true
undefined
7
null
'false'
[]
{}

Выведите информацию о типе каждого элемента в консоли.

Если элемент это число, прибавте к нему 3

*/

const array = [
    '455',
    87.15,
    true,
    undefined,
    7,
    null,
    'false',
    [],
    {},
];

array.forEach((el)=>{
    if (typeof el === 'number') {
        console.log(typeof el, el + 3);
    } else {
        console.log(typeof el);
    }
});


/*
2. Напишите программу, которая спрашивает у пользователя целое число. Создайте массив из случайных элементов, длинной в это число. Случайные чила долны быть в диапазоне 0 до 10. Используйте методы Math.random() и Math.floor() для реализации.
Выведите содержимое массива консоль.
Скопируйте массив в новый массив. Каждый третий элемент нового массива умножте на 3.
Выведите содержимое нового массива в консоли. Подсказака. ПОМНИТЕ ПРО ССЫЛКИ НА МАССИВ ПРИ КОПИРОВАНИИ;)
*/

let numberInput = parseInt( prompt('Введите целое число'));

while (!Number.isInteger(numberInput)) {
    numberInput = parseInt( prompt('Ошибка! Введите целое число'));
};

const arrayRandom = [];

for (let i = 0; i < numberInput; i++) {
    const randomNumber = Math.floor(Math.random() * (10 - 0 + 1));
    arrayRandom.push(randomNumber);
}

const secondArray = arrayRandom.slice();

for (let i = 1; i <= secondArray.lenght; i++) {
    if (i % 3 === 0){
        secondArray[i] += 3;
        continue;
    }
}

console.log(secondArray);


/*
3. Создайте объект student1 со свойствами firstName, lastName и mark;
Скопируйте объект student1 в новый объект student2 с помощью spread оператора ( ... ) и измените значение mark;
Скопируйте объект student1 в новый объект student3 с помощью Object.assign() и измените значение mark;
Посчитайте среднюю оценку по группе (тоесть между 3я новыми объектами)

Просто получить значения свойства mark у каждого студента через точку или []

Выведите полученные результаты в консоль.

Отобразите все ключи и значения объекта student1 в виде:

ключ - значение

ключ - значение

Используя цыкл
*/

const student1 = {
    firstName: 'Vasya',
    lastName: 'Pupkin',
    mark: 5,
};

const student2 = {
    ...student1,
    mark: 4,
};

const student3 = Object.assign({}, student1, {mark: 3});

const averageMark = (student1.mark + student2['mark'] + student3.mark) / 3;

console.log(averageMark);


for (key in student1) {
    console.log(`${key} - ${student1[key]}`);
}
