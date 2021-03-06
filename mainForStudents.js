// const students = [
// 	{
// 		name: 'Bob',
// 		age: 22,
// 		isMarried: true,
// 		scores: 85,
// 	},
// 	{
// 		name: 'Alex',
// 		age: 21,
// 		isMarried: true,
// 		scores: 90,
// 	},
// 	{
// 		name: 'Nick',
// 		age: 20,
// 		isMarried: false,
// 		scores: 120,
// 	},
// 	{
// 		name: 'John',
// 		age: 19,
// 		isMarried: false,
// 		scores: 100,
// 	},
// 	{
// 		name: 'Helen',
// 		age: 20,
// 		isMarried: false,
// 		scores: 110,
// 	},
// 	{
// 		name: 'Ann',
// 		age: 20,
// 		isMarried: false,
// 		scores: 105,
// 	},
// ];

// const user = {
// 	name: 'Bob',
// 	age: 23,
// 	friends: ['Alex', 'Nick', 'John'],
// };

// //1. Создайте поверхностную копию объекта user
// let copyUser = { ...user };

// //Проверка:
// console.log(user === copyUser);
// console.log(user.friends === copyUser.friends);

// //2. Полная (глубокая) копия объекта user
// let deepCopyUser = {
// 	...user,
// 	friends: [...user.friends],
// };

// //Проверка:
// console.log(user === deepCopyUser);
// console.log(user.friends === deepCopyUser.friends);

// //3. Поверхностная копия массива students
// let copyStudents = [...students];

// //Проверка:
// console.log(copyStudents === students);
// console.log(copyStudents[1] === students[1]);

// //4*. Полная (глубокая) копия массива students (map)
// let deepCopyStudents = students.map((s) => {
// 	return { ...s };
// });
// //Проверка:
// console.log(deepCopyStudents === students);
// console.log(deepCopyStudents[1] === students[1]);

// // NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// // Вывод результатов - в консоль

// //5. Отсортируйте deepCopyStudents по алфавиту (sort)
// let sortByName = deepCopyStudents.sort((a, b) => (a.name > b.name ? 1 : -1));
// console.log(sortByName);

// //5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
// let sortByScores = deepCopyStudents.sort((a, b) =>
// 	a.scores < b.scores ? 1 : -1
// );
// console.log(sortByScores);

// //6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
// let bestStudents = deepCopyStudents.filter((f) => f.scores >= 100);
// console.log(bestStudents);

// //6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
// //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// let topStudents = deepCopyStudents.slice(0, 3);
// console.log(topStudents);
// console.log(deepCopyStudents);

// //6b. Объедините массивы deepCopyStudents и topStudents так,
// // чтоб сохранился порядок сортировки (spread-оператор )
// let newDeepCopyStudents = [...deepCopyStudents]
// 	.concat([...topStudents])
// 	.sort((a, b) => (a.scores < b.scores ? 1 : -1));
// console.log(newDeepCopyStudents);

// //7. Сформируйте массив холостых студентов (filter)
// let notMarriedStudents = deepCopyStudents.filter((f) => f.isMarried === false);
// console.log(notMarriedStudents);

// //8. Сформируйте массив имён студентов (map)
// let studentsNames = deepCopyStudents.map((n) => {
// 	return n.name;
// });
// console.log(studentsNames);

// //8a. Сформируйте строку из имён студентов, разделённых
// // - запятой (join)
// // - пробелом (join)
// let nameWithSpace = studentsNames.join(' ');
// console.log(nameWithSpace);
// let namesWithComma = studentsNames.join(', ');
// console.log(namesWithComma);
// console.log(deepCopyStudents);

// //9. Добавьте всем студентам свойство "isStudent" со значением true (map)
// let trueStudents = deepCopyStudents.map((s) => {
// 	return { ...s, isStudent: true };
// });
// console.log(trueStudents);

// //10. Nick женился. Выполните выполните соответствующие преобразование массива students (map)
// let studentsWithMarriedNick = deepCopyStudents.map((ni) => {
// 	if (ni.name === 'Nick') {
// 		return { ...ni, isMarried: true };
// 	} else {
// 		return ni;
// 	}
// });
// console.log(studentsWithMarriedNick);

// //11. Найдите студента по имени Ann (find)
// let ann = deepCopyStudents.find((n) => n.name === 'Ann');
// console.log(ann);

// //12. Найдите студента с самым высоким баллом (reduce)
// let bestStudent;
// console.log(bestStudent);

// //13. Найдите сумму баллов всех студентов (reduce)
// let scoresSum = deepCopyStudents.reduce((acc, inc) => acc + inc.scores, 0);
// console.log(scoresSum);

// // 14.Напишите функцию addFriends, которая принимает параметром массив students
// // и добавляет в каждому студенту свойство "friends",
// // значением которого является массив имён всех остальных студентов из массива,
// // за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
// const addFriends = (students) => {
// 	return students.map((f) => {
// 		return { ...f, friends: studentsNames.filter(n => f.name !== n) };
// 	});
// };
// console.log(addFriends(students));
//
const arr = [23, 45, 999, 1, 5, 99, 223, 6, -100];
for (let a = 0; a < arr.length - 1; a++) {
	for (let i = 0; i < arr.length - 1 - a; i++) {
		// -a не будет делать интерацию на доп проверки уже готовой сортировке в конце
		if (arr[i] > arr[i + 1]) {
			// let temp = arr[i + 1];
			// arr[i + 1] = arr[i];
			// arr[i] = temp;
			[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
		}
	}
}

// bubble sort
console.log(arr);
//
const names = ['Bob', 'Alex', 'Joe', 'Nick', 'Jon'];
names.sort();
console.log(names);
//
const sortFun = (a, b) => a - b;
const numbers = [23, 45, 3, 7, 66, 11];
numbers.sort(sortFun);
console.log(numbers);

// function sortFun(a,b) {
// 	if(a <= b) {
// 		return -1
// 	} else {
// 		return 1
// 	}
// }
const students = [
	{
		name: 'Bob',
		age: 22,
		isMarried: true,
		scores: 95,
	},
	{
		name: 'Alex',
		age: 23,
		isMarried: true,
		scores: 89,
	},
	{
		name: 'Helge',
		age: 21,
		isMarried: true,
		scores: 89,
	},
	{
		name: 'Nick',
		age: 20,
		isMarried: false,
		scores: 120,
	},
	{
		name: 'John',
		age: 19,
		isMarried: false,
		scores: 121,
	},
];


console.log(students.sort((a,b) => {
	if(a.age > b.age) {
		return 1
	} else {
		return -1
	}
}));