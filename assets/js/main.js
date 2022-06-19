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
