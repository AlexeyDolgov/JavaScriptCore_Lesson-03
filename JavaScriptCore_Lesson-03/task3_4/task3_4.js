function filterRange(array, a, b) {
	let newArray = [];

	if ((a < 0) || (a > array.length) || (b < 0) || (b > array.length)) {
		console.log("Введено число за пределами индексов массива!");
	} else {
		for (let i = a; i < b; i++) {
			if (!isNaN(array[i])) {
				newArray.push(array[i]);
			}
		}
	}
	
	return newArray;
}

let numbers = [ 0, 1, 2, "Вася", 3, 4, "Четверг", 5, 6, "Мокрый куст" ];
console.log(filterRange(numbers, 2, 8));