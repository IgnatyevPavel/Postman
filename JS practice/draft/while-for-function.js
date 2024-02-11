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

// let codes = [100, 200, 300, 400, 500];
// console.log('array--=--', codes);
// for (let yolochka in codes){
//     console.log('I --=--', codes[yolochka])
//     if (codes[yolochka] == 300){
//         codes[yolochka] = 700;
// }; 
// }
// console.log('new array -', codes);

// let codes2 = [100, 200, 300, 400, 500];
// console.log('array--=--', codes);
// for (let yolochka in codes2) {
//     console.log('I --=--', codes2[yolochka])
//     if(codes2[yolochka] == 300){
//         codes2[yolochka] = 999
// }
// };
// console.log('new array -', codes); 
// let sto = 100;
// let n2 = 200;
// let sravnenie = sto > n2;

// // let chivo = 1
// // console.log(Boolean(chivo));

// if (chivo){
//     console.log('всё нормац, пример истиннный')
// } else {
//     console.log('всё плохо, переделывай')
// }

// let day = mon;
// let days = [mon,tue,wed,thu,fri,sat,sun];


// let hour = 2222

// if (hour >= 0 && hour <= 23){
//     if (hour >= 8 && hour < 18){
//     console.log('магазин открыт!');
//         if (hour >= 8 && hour <= 12){
//         console.log('Скидка 10 проц с 8 до 12 активна')
//     }
//     } else {
//         console.log('лавочка закрыта, приходи попозже')
//     }
// } else {
//     console.log('некоректное время ')
// }

// let hour = 2222;
// if (hour >= 0 && hour <= 23){ 
//     if (hour >= 8 && hour < 18){
//         console.log('магазин открыт!');
//             if (hour <= 12){
//                 console.log('Скидка 10 проц с 8 до 12 активна');
//             } 
//     } else { 
//         console.log('лавочка закрыта, приходи попозже');
//     }
// } else {
//     console.log('некорректное время'); 
// }

// function workDays(days, hours) {
//     console.log("This days = ", days);
//     console.log("This days = ", hours);
//     console.log(days + hours);
//  }
// workDays();

// function workDays(days, hours) {
//     if (typeof days == 'string' && typeof hours == 'number'){
//     console.log("This days = ", days);
//     console.log("This hours = ", hours);
//     }
// };
// workDays("monday",6);

// function workDays(days, hours) {
//     if (typeof days == 'string' && typeof hours == 'number'){
//     console.log("This days = ", days);
//     console.log("This hours = ", hours);
//     }
// };
// workDays("monday","monday");

function workDays(day){

    let h_days = ['Saturday', 'Sunday']
    let w_days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    
    if (typeof day === 'string'){
        if (w_days.includes(day)){
            console.log('рабочий день')
            return true
        } else if (h_days.includes(day)){
            console.log('выходной день')
            return false
        } else {
            console.log('День недели введён некорректно!')
            return false
        }
    } else {
        console.log('error! день недели введён не верно')
        return false
    }
};

function check_hours(hour){
    if (hour >= 8 && hour < 18){
        console.log('вы зашли в рабочие часы с 8 до 18')
        return true
    } else if (hour < 0 || hour <= 24){
        console.log('вы зашли в рабочие часы с 8 до 18')
        return false
    } else {
        console.log('некорректны показания времени! попробуйте ещё раз')
        return false
    }
};

let day = 'Monday';
let hour = 220;


if (workDays(day) && check_hours(hour)){
    console.log('Добро пожаловать')
} else {
    console.log('Магазин закрыт')
};
