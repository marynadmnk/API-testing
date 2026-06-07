let numbers = [4, 4, 8, 3, 3, 3, 2, 4, 4];


console.log(`array length is ${numbers.length}`); 
// 1. Вивести кожен елемент масиву
console.log("Кожен елемент масиву:");
numbers.forEach(element => console.log(element));

// 2. Вивести перші 3 елементи масиву
console.log("Перші три елементи");
console.log(numbers.slice(0, 3));

// 3. Вивести суму всіх елементів
const totalSum = numbers.reduce((sum, element) => sum + element, 0);
console.log("Сума всіх елементів:", totalSum);

// 4. Вивести суму всіх елементів окрім тих, що дорівнюють 4
const sumWithoutFours = numbers
    .filter(element => element !== 4)
    .reduce((sum, element) => sum + element, 0);
console.log("Сума всіх елементів окрім 4:", sumWithoutFours);

