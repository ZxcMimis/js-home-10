// завдання 1
const confirmResult = confirm();

let zitraks = () => {
    if (confirmResult) {
        alert("zitraks");
    }
};

zitraks();

// завдання 2

const random = Math.floor(Math.random() * 666);
const promptGap = prompt("Введіть число");

let randomNumber = () => {
    if (random === Number(promptGap)) {
        alert("Ви вгадали число");
        console.log(`Рандомне число: ${random}`);
        console.log(`Ваше число: ${promptGap}`)
    } else {
        alert("Ви не вгадали число");
        console.log(`Рандомне число: ${random}`);
        console.log(`Ваше число: ${promptGap}`)
    }
}

randomNumber();

// завдання 3

let clickCount = 0;

const clickCounter = () => {
    clickCount++;
    console.log(`Ви клікнули по сторінці ${clickCount} разів`);
};

document.addEventListener('click', clickCounter);

// завдання 4

const applyCallbackToEach
    = (arr, callback) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

const array = [1, 2, 3, 4, 5];
const squareCallback = (x) => x * x;

const result = applyCallbackToEach(array, squareCallback);
console.log(result);

// завдання 5

let discountPrice;

const calculateDiscountedPrice = (price, discount, callback) => {
    discountPrice = price - discount;
    callback(discountPrice);
};

const showDiscountedPrice = (discountedPrice) => {
    alert(`Ціна разом зі знижкою: ${discountedPrice}`);
};

calculateDiscountedPrice(100, 10, showDiscountedPrice);
