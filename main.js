// Переменшгные 
var message; // a-z, A-Z, 0-9, $,
message = "сообщение";

var myNumber = 30;
var myString = "а я текст "; // "10" - это текст как строка тип стринг 
var myBoolean = true; // false
var myNull = null; // равна пустоте нал, значение есть но равно пустоте
var myUndefunded = undefined; // вообще значение отсутсвует 


                                    // работа тута 
// арифметика 
// var result = myNumber + 10;
//console.log(myNumber + 10);
//console.log(myNumber - 10);
//console.log(myNumber / 10);
//myNumber += 1;
//console.log(myNumber);
//округление
//	console.log(Math.round(5.45)); // округление обычная математика 
//	console.log(Math.ceil(5.45)); // округление всегда в большую сторону 
//	console.log(Math.floor(5.45)); // округление всегда в меньшую сторону

//var newNumber = 2.447;
// newNumber.toFixed(1) // отделение одного знак после точки + матимотическое округление 
//console.log(newNumber.toFixed(1)); 

// СТРОКИ
// console.log(myNumber + "666");
// console.log(myString + "как дела?");
// console.log(myString.toLowerCase()); // новоя опущенная строка маленькими буквами 
// toUpperCase тоже самое но заглавными буквами
// МАССИВЫ
// var names = ["Вася", "Макс", "Женя"];
// console.log(names[0].toUpperCase());

//names[0] = "Маша";
//console.log(names[0]);

//names.push("Света"); // добовление к имени 3 имя добавится
//console.log(names[3]);
//console.log(names[3]);
//УСЛОВИЯ!!
// if (10 == "10") { // <   <=   =>   == равенства  === строго ровно и значение и тип 
// 	console.log("+");
// }
// if ("Вася" != "Петя" && myNumber < 20) { // != не равно , первое значение не равняется второму ,
// 				//   && условия "и"
// 	console.log("условия выполнина");
// }
// if ("Вася" != "Петя" || myNumber > 20) { // != не равно , первое значение не равняется второму ,
// 				//   || условия "или" выполнение одного из условий 
// 	console.log("условия выполнина2");
// }

// if (myNumber< 20) {
// 	console.log("Число меньше 20"); 
// } 	
// else { 
// 	console.log("Число больше 20")
// };
//ЦИКЛЫ 
// for (var i = 0; // i меньше 10 true
//  i < 10; // до куда идет цикл
//   i++ // что делать с вырожением i до конца цикла <=10
//   ) {
// console.log(i);
// }
// for (var i = 0; i < 10; i++) {
// 	if (i == 5) {
// 		break; // выход из цикла
// 				// continue; получится пропуск пятерки 
// 	}
// console.log(i);
// }

// for (var j = 0; j < names.length; j++) { // сколько элементов в масиве  .length
// console.log(names[j]); // j шас оно ноль, после проверки добавится едиица и станет однеркой и так до конца 
// }
// var i = 0; // обявление зарание 
// while (i < 10) {
// 	console.log(i);
// 	i++;
// }

//ФУНКЦИИ
// function sum(x, y) {
// 	return x + y; // return возращение значение 
// }

// console.log(sum(10, 59));
// console.log(sum(101, 591));
// console.log(sum(1430, 5923));

// ОБЪЕКТЫ
var myObject = {
  name: "Макс",
  surname: "Васин",
  age: 16,
  getFullName: function() {
    return this.name + " " + this.surname; // this туту в этом коде
  }
};
myObject.name = "Петя"
console.log(myObject.getFullName());