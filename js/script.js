/*let numb = Number(prompt("Введите целое число"));

if (numb % 2 == 0  ) {
    alert("You are entered valid number");
}
else{
    alert("You are entered not valid number");
    
}

/*let urname = prompt("Введите ваше имя");
let birthDay = +prompt("Введите ваш год рождения");
let currentYear = new Date().getFullYear();
let age = currentYear - birthDay;
const adultAge = 18;
if(age >= adultAge) {
    alert("Welcome " + urname);
}
else {
    alert("You are not adult enough");
}*/



/*document.querySelector("#tempToC").onclick = function () {
    let tempF = Number(document.querySelector("#temp").value);
    let tempC = 5 / 9 * (tempF - 32);
    showResult(tempC);
}
document.querySelector("#tempToF").onclick = function () {
    let tempC = Number(document.querySelector("#temp").value);
    let tempF = 9 / 5 * tempC + 32;
    showResult(tempF);
}
function showResult(result) {
    document.querySelector("#output");
    output.innerHTML = result;
}
*/

/*const date = new Date();
const week = date.getDay();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
if (week == 0) {
    alert("Today is " + days[0]);
}
else if (week == 1) {
    alert("Today is " + days[1]);
}
else if (week == 2) {
    alert("Today is " + days[2]);
}
else if (week == 3) {
    alert("Today is " + days[3]);
}
else if (week == 4) {
    alert("Today is " + days[4]);
}
else if (week == 5) {
    alert("Today is " + days[5]);
}
else if (week == 6) {
    alert("Today is " + days[6]);
}
else {
    alert("U dont have date");
}*/



// let year = prompt("Введіть рік:");

// Перетворення в число та перевірка на коректність
// year = parseInt(year);
// if (isNaN(year) || year <= 0) {
//   alert("Будь ласка, введіть коректний рік (ціле додатне число).");
// } else {
//   Перевірка на високосний рік
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     alert(year + " рік є високосним.");
//   } else {
//     alert(year + " рік не є високосним.");
//   }
// } 





// let rnd = Math.floor((Math.random() * 100) + 1);

// let win = false;
// let count = 1;
// while (!win) {


//     alert("Round: " + count);
//     let value = Number(prompt("Enter the value"));

//     if (value == rnd) {
//         alert("You WON");
//         alert("Your result is: " + count);
//         win = true;
//     }
//     else if (value < rnd) {
//         alert("Try a bit higher");
//         count++;
//     }
//     else if (value > rnd) {
//         alert("Try a bit lower");
//         count++;
//     }
// }



// // Програма генерує випадкові математичні вирази (додавання, віднімання, множення, ділення) та запитує у користувача правильну відповідь
// function gRndExp() {
//     const operators = ['+', '-', '*', '/'];
//     const num1 = Math.floor(Math.random() * 100);
//     let num2 = Math.floor(Math.random() * 100);


//     // Уникаємо ділення на нуль
//     while (num2 === 0) {
//         num2 = Math.floor(Math.random() * 100);
//     }

//     const operator = operators[Math.floor(Math.random() * operators.length)];
//     const expression = `${num1} ${operator} ${num2}`;

//     return expression;
// }

// // Задаємо кількість прикладів
// const rounds = 6;
// const wrong = 2;
// let wrn = 1;

// for (let i = 1; i < rounds; i++) {
//     let exp = gRndExp();

//     const userAnswer = Number(prompt(`What is result ${exp}?`));
//     const correctAnswer = eval(exp);
//     console.log(correctAnswer);
//     if (correctAnswer === userAnswer) {
//         alert(`Right! Round: ${i}`);
//         if (i == 5) {
//             alert("U won! Congratulation!");
//         }
//     }
//     else {
//         alert("Wrong! Right answer is: " + correctAnswer + ` Round: ${i} ` + `Attemps ${wrn}/2`);

//         if (wrn < wrong) {
//             wrn++;
//         }
//         else {
//             alert("U lose")
//             break;
//         }
//     }
// }





// function getMessage(name){
//     if(name === "Bogdan"){
//         name = "hohoho";
//     }
//     else if(name === "Artem"){
//         name = "Cool "
//     }
//     alert(`Welcome ${name}`);
// }
// getMessage(prompt("Enter your name"));






// let enter;

// do {
//   enter = prompt("Please enter a number:");
// } while (isNaN(enter));

// console.log("You entered a number:", enter);





// let cars = [5, 20, 12, 50, 12, 43];

// function min (array){
//     let min = Math.min(...array);
//     let max = Math.max(...array);
//     let res = max - min;
//     return res;
// }

// console.log(min(cars));







// const ntEnght = 18.5;
// const Over = 30;
// const maxOver = 29.9;
// const minOver = 25;
// const maxNorm = 24.9


// const weight = Number(prompt("Enter your current weight"));
// const height = Number(prompt("Enter your current height. Example: 1.70cm = 1.7"));

// let res = weight / (height * height);
// alert("Your avg coficient is: " + res);

// // Створити функцію для визначення категорії ІМТ:
// //    - Використайте стандартні категорії ВООЗ:
// //      - Недостатня вага: ІМТ < 18.5
// //      - Нормальна вага: 18.5 ≤ ІМТ < 24.9
// //      - Надмірна вага: 25 ≤ ІМТ < 29.9
// //      - Ожиріння: ІМТ ≥ 30

// function checker(fin){
//     if(fin < ntEnght){
//         alert("You have not enought weight");
//     }
//     else if((ntEnght <= fin) && (fin < maxNorm)){
//         alert("You have enought weight");
//     }
//     else if((minOver <= fin) && (fin < maxOver)){
//         alert("You have more than enought weight");
//     }
//     else if(fin >= Over){
//         alert("YOU ARE FAT");
//     }
// }

// checker(res);




// Завдання 1
// Написати програму, яка аналізує список оцінок студентів і знаходить середній бал, найвищу та найнижчу оцінки.

// Кроки для виконання завдання:

// 1. Створити масив для зберігання оцінок студентів:
//    - Оцінки можуть бути представлені як цілі числа від 0 до 100.

// 2. Створити функцію для обчислення середнього балу:
//    - Функція повинна приймати масив оцінок як аргумент і повертати середнє значення.

// 3. Створити функцію для знаходження найвищої оцінки:
//    - Функція повинна приймати масив оцінок як аргумент і повертати найвищу оцінку.

// 4. Створити функцію для знаходження найнижчої оцінки:
//    - Функція повинна приймати масив оцінок як аргумент і повертати найнижчу оцінку.

// 5. Запросити користувача ввести кілька оцінок і зберегти їх у масив:
//    - Використайте `prompt` для запиту оцінок, можна також згенерувати їх автоматично.

// 6. Обчислити середній бал, найвищу і найнижчу оцінки:
//    - Викликати відповідні функції для обчислень.

// 7. Вивести результати:
//    - Використайте `alert` для виведення середнього балу, найвищої та найнижчої оцінок.







// let notes = [];
// let count;
//     do {
//         count = +prompt(`Введіть кількість оцінок:`);
//     } while (isNaN(count) || count < 0);


// for (let i = 0; i < count; i++) {
//     let number;
//     do {
//         number = +prompt(`Введіть ${i + 1} оцінку (від 0 до 100):`);
//     } while (isNaN(number) || number < 0 || number > 100){
//     notes.push(number);
// }
// }

// // Функція для обчислення середнього арифметичного
// function calculateAverage(enter) {
//     const sumWithInitial = enter.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     return sumWithInitial / enter.length;
// }

// // Функція для знаходження максимальної оцінки
// function findMaxGrade(grades) {
//     return Math.max(...grades);
// }

// // Функція для знаходження мінімальної оцінки
// function findMinGrade(grades) {
//     return Math.min(...grades);
// }

// // Обчислення результатів
// const averageGrade = calculateAverage(notes);
// const maxGrade = findMaxGrade(notes);
// const minGrade = findMinGrade(notes);

// // ... (решта коду)


// // Виведення результатів
// alert(`Середній бал: ${averageGrade}\nНайвища оцінка: ${maxGrade}\nНайнижча оцінка: ${minGrade}`);



// Написати програму, яка працює зі списком покупок: додає нові товари, видаляє наявні та виводить список товарів на екран.

// Кроки для виконання завдання:

// 1. Створити масив для зберігання списку покупок:
//    - Початково масив може бути порожнім або містити кілька базових товарів.

// 2. Створити функцію для додавання товару до списку:
//    - Функція приймає назву товару як аргумент і додає його до масиву.

// 3. Створити функцію для видалення товару зі списку:
//    - Функція приймає назву товару як аргумент, знаходить його у масиві та видаляє.

// 4. Створити функцію для виведення поточного списку покупок:
//    - Функція виводить всі елементи масиву у зручному для читання форматі.

// 5. Запропонувати користувачу вибрати дію:
//    - Використати `prompt` для вибору дії: додавання товару, видалення товару або виведення списку.

// 6. Реалізувати вибір користувача:
//    - Викликати відповідні функції на основі вибраної дії.

// 7. Повторити процес, поки користувач не завершить роботу:
//    - Дати можливість користувачу виконувати дії у циклі.


// let corbList = [];
// function add(enter){
//     corbList.push(enter);
// }

// const result = arr.map(item => item);

// console.log(...result);




let con = [];

function addProduct(product) {
    con.push(product);
    console.log(`${product} aded to cart`);
}

function printList() {
    if (con.length === 0) {
        console.log("Your list is clear");
    } else {
        console.log("Your order list:");
        con.forEach((product, index) => {
            console.log(`${index + 1}. ${product}`);
        });
    }
}

function removeProduct(product) {
    const index = con.indexOf(product);
    console.log(index);
    if (index !== -1) {
        con.splice(index, 1);
        console.log(`${product} Deleted from order list.`);

    }
    else if (con.length === 0){
        console.log("Your list is clear");
    }
    else {
        console.log(`Product ${product} not found.`);
    }
}

let shouldContinue = true;
while (shouldContinue) {
    const ask = prompt("Add \nList\nExit");
    switch (ask) {
        case "mk":
            const deal = prompt("Add what u want");
            addProduct(deal);
            break;
        case "ls":
            printList();
            break;
        case "rm":
            const remove = prompt("What u wanna remove");
            removeProduct(remove);
            break;

        case "x":
            console.log("Thank you");
            shouldContinue = false;
            break;
        default:
            console.log("Wrong value.Try again");
    }
}