
const fs = require('fs');

// Зчитуємо файл
const data = fs.readFileSync('list.json', 'utf8');

// Перетворюємо JSON у об'єкт
const jsonData = JSON.parse(data);

// Проходимо по всіх lists
jsonData.lists.forEach(list => {
    console.log(`ID: ${list.id}, Name: ${list.name}`);
});