// var users = {
//     'person1': {'name': 'Vadim',
//               'age': 33},
//     'person2': {'name': 'Anna',
//               'age': 30},
//     'person3': {'name': 'Vika',
//               'age': [32, 25, 10]}
// };
// console.log(typeof users);

// count = 0
// while (true) {
//     if (count > 10){
//         break
//     } else if (count < 10) {
//         console.log('iteration НЕ РАВНО 10');
//         console.log('iteration - ', count); 
//     } else {
//         console.log('iteration РАВНО ', count, "!!!");

//     };

//     count++
// };

// let num = 0
// while (num < 5){
//     console.log(num);
//     num++;
// };

// let codes = [100, 200, 300, 400, 500];
// for (let yolochka in codes){
//     console.log('I --=--', codes[3])
// }

let codes = [100, 200, 300, 400, 500];
console.log('array--=--', codes);
for (let yolochka in codes){
    console.log('I --=--', codes[yolochka])
    if (codes[yolochka] == 300){
        codes[yolochka] = 700;
}; 
}
console.log('new array -', codes);

// let codes2 = [100, 200, 300, 400, 500];
// console.log('array--=--', codes);
// for (let yolochka in codes2) {
//     console.log('I --=--', codes2[yolochka])
//     if(codes2[yolochka] == 300){
//         codes2[yolochka] = 999
// }
// };
// console.log('new array -', codes); 