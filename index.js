// 1) Создать функцию которая выводит в консоль число и строку содержащую в себе информацию о четности этого числа
const checkEvenNumbers = (number) => number % 2 ? console.log(number + ' - нечётное число') : console.log(number + ' - чётное число');

/*2) Создать функцию принимающую 2 числа, выбрать из двух чисел меньшее.
Запустить цикл от 1 до n(где n меньше число из аргументов функции) и вывести поочередно все числа до N в консоль.
Написать три экземпляра функции, используя поочередно все циклы. Функцию вызвать в конце скрипта. */
const getSmallestNumber1 = (a, b) => {
    let currentNumber = 1;
    if (a < b) {
        while (currentNumber <= a) {
            console.log(currentNumber);
            currentNumber += 1;
        }
    } else {
        while (currentNumber <= b) {
            console.log(currentNumber);
            currentNumber += 1;
        }
    }
}

const getSmallestNumber2 = (a, b) => {
    let currentNumber = 1;
    if (a < b)
        do {
            console.log(currentNumber);
            currentNumber++;
        } while (currentNumber <= a);
    else do {
        console.log(currentNumber);
        currentNumber++;
    } while (currentNumber <= b);
}

const getSmallestNumber3 = (a, b) => {
    if (a < b)
        for (let currentNumber = 1; currentNumber <= a; currentNumber++) {
            console.log(currentNumber);
        } else {
        for (let currentNumber = 1; currentNumber <= b; currentNumber++) {
            console.log(currentNumber);
        }
    }
}

getSmallestNumber1(4, 6);
getSmallestNumber2(6, 3);
getSmallestNumber3(3, 7);

/*3) Создать функцию принимающую 2 числа, выбрать из двух чисел большее.
Запустить цикл от 1 до n(где n большое число из аргументов функции) и вывести поочередно все четные числа до N в консоль.
Написать три экземпляра функции, используя поочередно все циклы. Функцию вызвать в конце скрипта. */

const getBiggestNumber1 = (a, b) => {
    let biggestNumber;
    let currentNumber = 1;

    if (a > b) {
        biggestNumber = a;
    } else {
        biggestNumber = b;
    }

    for (currentNumber; currentNumber <= biggestNumber; currentNumber++) {
        if (!(currentNumber % 2)) {
            console.log(currentNumber);
        }
    }
}

const getBiggestNumber2 = (a, b) => {
    let biggestNumber;
    let currentNumber = 1;

    if (a > b) {
        biggestNumber = a;
    } else {
        biggestNumber = b;
    }

    while (currentNumber <= biggestNumber) {
        if (!(currentNumber % 2)) {
            console.log(currentNumber);
        }
        currentNumber++;
    }
}

const getBiggestNumber3 = (a, b) => {
    let biggestNumber;
    let currentNumber = 1;

    if (a > b) {
        biggestNumber = a;
    } else {
        biggestNumber = b;
    }


    do {
        if (!(currentNumber % 2)) {
            console.log(currentNumber);
        }
        currentNumber++;
    } while (currentNumber <= biggestNumber);

}


getBiggestNumber1(2, 1);
getBiggestNumber2(3, 4);
getBiggestNumber3(3, 7);

/*4) Создать функцию принимающую 2 числа(N и M). Запустить цикл от 1 до N.
Вывести поочередно числа и их произведение с числом M, если произведение с чиcлом M - нечетное.
Написать три экземпляра функции, используя поочередно все циклы. Функцию вызвать в конце скрипта. */

const getNumbersProduct1 = (n, m) => {
    for (let currentNumber = 1; currentNumber <= n; currentNumber++) {
        let numbersProduct = currentNumber * m;

        if (numbersProduct % 2) {
            console.log('Current number: ' + currentNumber + ',', 'Current number multiple M: ' + (numbersProduct));
        }
    }
}

const getNumbersProduct2 = (n, m) => {
    let currentNumber = 1;

    while (currentNumber <= n) {
        let numbersProduct = currentNumber * m;
        if (numbersProduct % 2) {
            console.log('Current number: ' + currentNumber + ',', 'Current number * M:: ' + (numbersProduct));
        }
        currentNumber++;
    }
}

const getNumbersProduct3 = (n, m) => {
    let currentNumber = 1;

    do {
        let numbersProduct = currentNumber * m;
        if (numbersProduct % 2) {
            console.log('Current number: ' + currentNumber + ',', 'Current number multiple M: ' + (numbersProduct));
        }
        currentNumber++;
    } while (currentNumber <= n)
}


getNumbersProduct1(5, 3);
getNumbersProduct2(3, 7);
getNumbersProduct3(3, 3);
