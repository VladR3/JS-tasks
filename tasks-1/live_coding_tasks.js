// Задача: Перевірка, чи є масив збільшуваним

const isIncreasing = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            return false;
        }
    }

    return true;
};


// Задача: Підрахунок кількості входжень елемента в масив
const countOccurrences = (arr, element) => {
    let count = 0;

    arr.forEach((el) => {
        if (element === el){
            count++;
        }
    });

    return count;
}

// Задача: Перевірка на анаграми
const areAnagrams = ((a, b) => {
    const normalize = (str) =>
        str
            .toLowerCase()
            .split('')

    const aNorm = normalize(a);
    const bNorm = normalize(b);

    if (aNorm.length !== bNorm.length) {
        return false;
    }

    return aNorm.sort().join('') === bNorm.sort().join('');
});


// Задача: Створити рядок з перших літер слів
const getInitials = (str) => {
    const arr = str.split(' ');
    let result = '';

    arr.forEach((el) => {
       result += el[0];
    });

    return result;
}


// Задача: Підрахунок кількості літер у рядку

const countLetters = (str) => {
    let letters = {};

    const arr = str.toLowerCase().replace(/\s/g, '').split(' ');

    arr.forEach(letter => {
        if (letters[letter]) {
            letters[letter] += 1;
        } else {
            letters[letter] = 1;
        }
    });

    return letters;
}


// Знайти перший об'єкт за умовою
// Умова:
// Напишіть функцію, яка повертає першого користувача віком більше 18.
const findAdult = (users) => {
    for (let user of users){
        if(user.age >= 18){
            return user;
        }
    }

    return false;
};

// Порахувати кількість товарів у кожній категорії
const countByCategory = (products) => {
    let categories = {};

    products.forEach((product) => {
       if (categories[product.category]){
           categories[product.category] += 1;
       }
       else {
           categories[product.category] = 1;
       }
    });

    return categories;
}


// Задача: Фактори числа
const findFactors = (number) => {
    let factors = [];

    for (let i = 1; i <= number; i++){
        if(number % i === 0){
            factors.push(i);
        }
    }

    return factors;
}


// Задача: Число Фібоначчі

const fibonacci = (n) => {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;

    for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }

    return b;
};

// Задача: Пошук пари чисел, що дають суму
const findPair = (arr, sum) => {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (sum === arr[i] + arr[j]){
                resultArr.push(arr[i]);
                resultArr.push(arr[j]);
                return resultArr;
            }
        }
    }

    return false;
}