// console.log('Hello');

// var yolochka1 = 100;
// var n2 = 50;
// var result = yolochka1 + n2;
// console.log(result);

// var n3 = 50
// console.log(n2 - n3 * yolochka1);
// console.log("----------------------------------разделитель------------------------------------");

// var salary = 1000;
// var month = 6;
// var salary_6_month = salary * month; 
// var u_name = "Pavel";
// var hi_message = 'Hello,'
// var salary_message = 'your 6 mounth salary is '
// var currency = ' USDT'

// console.log(hi_message, u_name, salary_message, salary_6_month);
// console.log("----------------------------------разделитель------------------------------------");
// console.log("Hello, Pavel your 6 mounth salary is", salary_6_month, currency);
// console.log("----------------------------------разделитель------------------------------------");
// console.log(hi_message + u_name + salary_message + salary_6_month + currency);
// console.log("----------------------------------разделитель------------------------------------");

// var b1 = true;
// var b2 = false;

// console.log (b1);
// console.log('значение переменной b1: ', b1, ' Тип переменной: ',typeof + b1);
// console.log('значение переменной u_name: ', u_name, ' Тип переменной: ', typeof u_name);
// console.log('значение переменной salary: ', salary, ' Тип переменной: ', typeof salary);
// console.log("----------------------------------разделитель------------------------------------");

// let num_33 = +'33';
// let num_3 = '33';

// console.log(typeof num_33)
// console.log(typeof num_3)
// console.log("----------------------------------разделитель------------------------------------");

// if (true){ 
//     console.log('булевое значение true: TRUUUUE')
// };

// if (false){ 
//     console.log('FALSEEE')
// }

// var a1 = true;
// var a2 = false;

// if (a1){
//     console.log('a1: TRUE')
// }

// if (a2){
//     console.log('a2: TRUE')
// } else {
//     console.log('a2: false')
// }

// function example1() {
//     let x = 10;
//     {
//       var y = 20;
//       console.log('10 вызывается из обьекта', x); // Выводит 10
//       console.log('20 создана в обьекте и вызывается из обьекта', y); // Выводит 20
//     }
//     console.log('вызывает 10 которая до обьекта', x); // Выводит 10
//     console.log('вызывает 20 которая создана в обьекте', y); // Ошибка: y не определена
//   }
//   example1();

// var n1 = 1000;
// var n2 = 500;
// var result1 = n1 > n2;
// var result2 = n2 > n1;
// var result3 = n1 >= n2;
// var result4 = n2 >= n1;

// console.log('1000 > 500:', result1);
// console.log('500 > 1000:', result2);
// console.log('1000 >= 500:', result3);
// console.log('500 >= 1000:', result4);
// console.log("----------------------------------разделитель------------------------------------");

// var n1 = 1000;
// var n2 = 1000;
// var result11 = n1 > n2;
// var result22 = n1 < n2;
// var result33 = n1 >= n2;
// var result44 = n1 <= n2;

// console.log('1000 > 1000:', result1);
// console.log('1000 < 1000:', result2);
// console.log('1000 >= 1000:', result3);
// console.log('1000 <= 1000:', result4);
// console.log("----------------------------------разделитель------------------------------------");
// var result5 = n1 == n2;
// // console.log('1000 = 1000:', result5);

// if (result1){
//     console.log('Hello TRUE', result1)
// } else {
//     console.log('bye-bye FALSE', result1)
// };

// if (result2){
//     console.log('Hello TRUE', result1)
// } else {
//     console.log('bye-bye FALSE', result1)
// };
// console.log("----------------------------------разделитель------------------------------------");

// var salary = 10000;

// if (salary > 10000 || salary == 10000){
//     console.log('GOOD')
// } else if (salary >=5000) {
//     console.log('Normal')
// } else if (salary < 5000 & salary >= 1000) {
//     console.log('nice')
// } else {
//     console.log('herovo')
// }

var users = {
    'person1': {'name': 'Vadim',
              'age': 33},
    'person2': {'name': 'Anna',
              'age': 30},
    'person3': {'name': 'Vika',
              'age': [32, 25, 10]}
};
console.log(typeof users);