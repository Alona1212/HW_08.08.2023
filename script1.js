// Найти максимальное число из 3 чисел
// 1 вариант 
// function getMax(a, b, c){
//     let max = a;
//     if(b > max ){
//         max = b;
//     }
//     else if(c > max){
//         max = c;
//     }
//     else if(a > max){
//         max = a;
//     }

//     return max;
// }


// console.log(getMax(12, 0, 50));
// console.log(getMax(12, 70, -7));
// console.log(getMax(20, 20, 20));

// 2 вариант
// function getMax(a, b, c){
//     if(a>=b && a>=c){
//         return a;
//     }
//     else if(b>=a && b>=c){
//         return b;
//     }
//     return c;
// }

// console.log(getMax(12, 0, 50));
// console.log(getMax(12, 70, -7));
// console.log(getMax(20, 20, 20));






// function getMax(a, b, c){
//     if(a>=b && a>=c){
//         return a;
//     }
//     else if(b>=a && b>=c){
//         return b;
//     }
//     return c;
// }



// Напишите функцию min(a, b), которая возвращает меньшее из чисел a и b.

// function getMin (a, b){

//         if(a > b ){
//             return b;
//         }
//        {return a;
//     }
// }


//     console.log(getMin(12, 0));
//     console.log(getMin(12, 70));
//     console.log(getMin(20, 10));




    // let users = [
    //     {
    //         firstname: 'John',
    //         lastname: 'Smith',
    //         age: 30
    //     }, 
    //     {
    //         firstname: 'Karen',
    //         lastname: 'Hardy',
    //         age: 27
    //     }, 
    //     {
    //         firstname: 'Laura',
    //         lastname: 'Ashley',
    //         age: 12
    //     }, 
    //     {
    //         firstname: 'Ann',
    //         lastname: 'Smith',
    // //         age: 31
    // //     }
    // // ]

    // // for (let i =0; i< users.length; i++) {
    // //     console.log (users [i]);
    // // }

    // let users = [
    //     {
    //         firstname: 'John',
    //         lastname: 'Smith',
    //         age: 30
    //     }, 
    //     {
    //         firstname: 'Karen',
    //         lastname: 'Hardy',
    //         age: 27
    //     }, 
    //     {
    //         firstname: 'Laura',
    //         lastname: 'Ashley',
    //         age: 12
    //     }, 
    //     {
    //         firstname: 'Ann',
    //         lastname: 'Smith',
    //         age: 31
    //     }
    // ]

    // for(let i = 0; i<users.length; i++){
    //     for(let key in users[i]){
    //         console.log(users[i][key]);
    //     }
    // }

    // 1. i = 0 , 
    // 1.1. i = 0, key = firstname , 
    // 1.2 i = 0, key = lastname, 
    // 1.3 i = 0, key = age
    // 2. i = 1
    // 2.1 i = 1, key = firstname
    // 2.2 i = 1, key = lastname
    // 2.3 i = 1, key = age




//     let array = 
//             [
//                 {
//                     id: 1,
//                     title: "bicycle",
//                     price: 45000,
//                     discount: 10
//                 },
//                 {
//                     id: 2,
//                     title: "roller-skates",
//                     price: 15000,
//                     discount: 5
//                 },
//                 {
//                     id: 3,
//                     title: "Kick scooter",
//                     price: 10000,
//                     discount: 30
//                 },
//                 {
//                     id: 4,
//                     title: "skis",
//                     price: 25000,
//                     discount: 20
//                 },
//                 {
//                     id: 5,
//                     title: "skate",
//                     price: 10000,
//                     discount: 0
//                 }
//             ]


// for(let i = 0; i<array.length; i++){
//     for(let key in array[i]){
//         console.log(array[i].title);
//     }
// }
// // Написать цикл, который выводит только названия товаров





// 1.	Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему.



//  function getarray(a, b)

// {let array = [];
// if(a>b){
//     for(let i = b; i<=a; i++)
//     {array.push(i)}
// }
// else if (a<b){
//     for(i = a; i <= b; i++){
//         array.push(i)
//     }

// }
// else {
//     return "Error"
// }
// return array;
// }
// console.log(getarray(10, 15));



// 1.	А теперь задача наоборот. Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от большего числа к меньшему.

//  function getarray(a, b)

// {let array = [];
// if(a>b){
//     for(let i = b; i<=a; i++)
//     {array.unshift(i)}
// }
// else if (a<b){
//     for(i = a; i <= b; i++){
//         array.unshift(i)
//     }

// }
// else {
//     return "Error"
// }
// return array;
// }
// console.log(getarray(10, 15));

// // Мы просто puch меняем на unshift
    





В программе объявлена переменная list, представляющая массив положительных и отрицательных численных значений.Используя цикл, выведите в консоль сумму положительных чисел.

let list = [13, -7, 0, 12, 40, -10, 23, -45, 0, 12, -2];
let sum = 0;

for (let i = 0; i < list.length; i++) {
    if (list[i] > 0) { sum = sum + list[i]; }
}
console.log(sum);
    



Используя цикл, выведите в консоль сумму чисел из диапазона значений от 0 до 50 кратные 5.
let sum = 0
for (let k = 0; k < 50; k++) {
    if (k % 5 == 0) {
        sum = sum + k
    }
}
console.log(sum);

function getMax


