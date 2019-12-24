const englishBreakfast = ["поджареный бекон", "колбаски", "яичница", "жареные грибы", "жареные помидоры", "фасоль", "хлеб с джемом", "кофе"];

/* в результате массив englishBreakfast должен быть равен:
englishBreakfast = ["поджареный бекон", "колбаски", "яичница", "жареные грибы"];

и должен появится еще массив dinner, со значениями:
dinner = ["жареные помидоры", "фасоль", "хлеб с джемом", "кофе"];
*/

const dinner = englishBreakfast.splice(4);
console.log(englishBreakfast);
console.log(dinner);