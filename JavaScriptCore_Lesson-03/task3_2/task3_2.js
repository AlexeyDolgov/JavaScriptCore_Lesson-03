let styles = [ "Джаз", "Блюз" ];

styles.push("Рок-н-ролл");
console.log(styles);

styles.splice(-2, 1, "Классика");
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift("Рэп", "Регги");
console.log(styles);