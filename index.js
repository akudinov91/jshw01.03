//Задача 1. Найти сумму положительных элементов в массиве.

// const numArray = [7, -6, 5, -2, 12];
// const result = sumPositive(numArray);

// function sumPositive(array) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > 0) {
//       sum += array[i];
//     }
//   }

//   return sum;
// }

// console.log("Сумма положительных элементов массива:", result);

//Задача 2. Найти количество отрицательных элементов в массиве.

// const numArray = [7, -6, 5, -2, 12];
// const result = numNegative(numArray);

// function numNegative(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < 0) {
//       sum++;
//     }
//   }

//   return sum;
// }
// console.log("Количество отрицательных элементов в массиве:", result);

//Задача 3. Отфильтровать массив, оставив только уникальные значения.

// let array = [1, 2, 3, 4, 2, 3, 5];
// let uniqueArray = [...new Set(array)];
// console.log(uniqueArray);

//Задача 4. Найти сумму элементов на четных позициях в массиве (индексы начинаются с 0).

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;

// for (let i = 0; i < array.length; i += 2) {
//   sum += array[i];
// }

// console.log(sum);

//Задача 5. Проверить, является ли каждый элемент массива целым числом.

// function areAllIntegers(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (!Number.isInteger(arr[i])) {
//       return false;
//     }
//   }
//   return true;
// }
// const myArray = [1, 2, 3.5, 4, 5];
// const result = areAllIntegers(myArray);
// if (result) {
//   console.log("Все элементы являются целыми числами.");
// } else {
//   console.log("Есть элементы, которые не являются целыми числами.");
// }

//Задача 6. Найти индекс первого отрицательного элемента в массиве.

// function findIndexOfFirstNegative(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       return i;
//     }
//   }
//   return -1;
// }
// const myArray = [1, 2, -3, 4, -5, 6];
// const indexOfFirstNegative = findIndexOfFirstNegative(myArray);
// if (indexOfFirstNegative !== -1) {
//   console.log(
//     `Индекс первого отрицательного элемента: ${indexOfFirstNegative}`
//   );
// } else {
//   console.log("Отрицательный элемент не найден в массиве.");
// }

//Задача 7. Создать новый массив, содержащий элементы, преобразованные в верхний регистр (если они строкового типа).

// let originalArray = [1, "hello", "world"];
// let newArray = originalArray.map((element) => {
//   if (typeof element === "string") {
//     return element.toUpperCase();
//   } else {
//     return element;
//   }
// });

// console.log(newArray);

//Задача 8. Проверить, содержит ли массив только уникальные значения (без дубликатов).

// function hasUniqueValues(arr) {
//   const uniqueSet = new Set(arr);

//   return arr.length === uniqueSet.size;
// }

// const myArray = [1, 2, 3, 4, 5];
// const isUnique = hasUniqueValues(myArray);

// if (isUnique) {
//   console.log("Массив содержит только уникальные значения.");
// } else {
//   console.log("Массив содержит дубликаты.");
// }

//Задача 9. Проверить, содержит ли массив хотя бы одно отрицательное значение.

// const array = [1, 2, -3, 4, 5];
// const negative = array.some((element) => element < 0);
// if (negative) {
//   console.log("Массив содержит одно отрицательное значение.");
// } else {
//   console.log("Массив не содержит отрицательных значений.");
// }

//Задача 10. Найти сумму элементов, расположенных до определенного индекса в массиве.

// function sumIndex(array, index) {
//   let sum = 0;
//   for (let i = 0; i <= index && i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }

// const numArray = [1, 2, 3, 4, 5];
// const targetIndex = 2;
// const result = sumIndex(numArray, targetIndex);
// console.log(result);

// Задача 11. Проверить, содержит ли массив только числовые значения.

// function isArrayNumeric(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== "number") {
//       return false;
//     }
//   }
//   return true;
// }

// const numArray = [1, 2, "hello", 4, 5];
// const isNumeric = isArrayNumeric(numArray);

// if (isNumeric) {
//   console.log("Массив содержит только числовые значения.");
// } else {
//   console.log("Массив содержит нечисловые значения.");
// }

// Задача 12. Создать новый массив, содержащий элементы, удовлетворяющие определенному условию (например, больше 10).

// const originalArray = [5, 12, 8, 15, 3, 20, 7];

// const newArray = originalArray.filter(function (element) {
//   return element > 10;
// });

// console.log(newArray);

// Задача 13. Найти индекс последнего элемента в массиве, равного определенному значению.

// function lastIndex(arr, value) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] === value) {
//       return i;
//     }
//   }
//   return -1;
// }

// let newArray = [1, 2, 3, 4, 2, 5];
// let newValue = 2;
// let newIndex = lastIndex(newArray, newValue);
// console.log("Индекс последнего элемента равного ", newValue, ": ", newIndex);

// Задача 14. Проверить, содержит ли массив хотя бы одно положительное значение.

// function positivieValue(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       return true;
//     }
//   }
//   return false;
// }

// let arr1 = [-2, 0, 4, -5, 8];
// let arr2 = [-1, -3, -7, 0];

// console.log(positivieValue(arr1));
// console.log(positivieValue(arr2));

// Задача 15. Преобразовать массив в объект, где индексы массива станут ключами объекта.

// function arrayObj(arr) {
//   let resultObj = {};
//   for (let i = 0; i < arr.length; i++) {
//     resultObj[i] = arr[i];
//   }
//   return resultObj;
// }

// let newArray = ["Nvidia", "MSI", "GIGABITE"];
// let newObject = arrayObj(newArray);

// console.log(newObject);

// Задача 16. Проверить, содержат ли все элементы массива одинаковые значения.

// function areAllElementsEqual(array) {
//   const uniqueValues = new Set(array);

//   return uniqueValues.size === 1;
// }

// const array1 = [1, 1, 1, 1];
// const array2 = [1, 2, 3, 4];

// console.log(areAllElementsEqual(array1));
// console.log(areAllElementsEqual(array2));

//Задача 17. Удалить все элементы массива, кроме тех, которые кратны 3.

// let numArray = [21, 2, 32, 43, 54, 60];
// for (let i = numArray.length - 1; i >= 0; i--) {
//   if (numArray[i] % 3 !== 0) {
//     numArray.splice(i, 1);
//   }
// }
// console.log(numArray);
