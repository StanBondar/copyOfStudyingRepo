const japanMen = [{name: "Акэти Мицихура", height: 180, salary: 20000}, {name: "Санада Юкимура", height: 169, salary: 11000}, {name: "Ода Нобунага", height: 165, salary: 200000}, {name: "Уэсуги Кэнсин", height: 160, salary: 25000}, {name: "Такэда Сингэн", height: 165, salary: 80000}, {name: "Мори Мотонари", height: 185, salary: 75000}, {name: "Датэ Масамунэ", height: 180, salary: 750000}];

/*В результате у вас должен повится новый массив japanBestMen с такими значениями:

const japanBestMen = [{name: "Акэти Мицихура", height: 180, salary: 20000}, {name: "Ода Нобунага", height: 165, salary: 200000},
 {name: "Мори Мотонари", height: 185, salary: 75000}, {name: "Датэ Масамунэ", height: 180, salary: 750000}];
*/

const japanBestMen = japanMen.filter(element => {
    return(+element['height']>=170||+element['salary']>=100000);
});

console.log(japanBestMen);