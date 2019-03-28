function find(array, value) {
	console.log(array.indexOf(value));
}

let products = [ "Хлеб", "Вода", "Молоко", "Соль", "Макароны" ];
find(products, "Соль");
find(products, "Мука");