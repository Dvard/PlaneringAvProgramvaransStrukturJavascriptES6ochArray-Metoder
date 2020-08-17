function generateUlListFromArray(array) {
	const ul = document.createElement('UL');

	for (let i = 0; i < array.length; i++) {
		let tmp = document.createElement('LI');
		let tmpLabel = document.createTextNode(array[i]);

		tmp.appendChild(tmpLabel);
		ul.appendChild(tmp);
	}

	document.body.appendChild(ul)
}

// 1

let wholeName =  (firstName, lastName) => 'Hello' + firstName + ' ' + lastName;


// 2
const array = [3, 4, 5, 6 ,7];
let doubled = array.map(x => x * 2);

// 3
doubled.push(16)


generateUlListFromArray(doubled)

// 4

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = arr1.concat(arr2)

generateUlListFromArray(arr3)

// 5
let datanoms = [
	{ name: 'Paul', occupation: 'teacher', age: 42 },
	{ name: 'Alex', occupation: 'teacher', age: 44 },
	{ name: 'Tom', occupation: 'teacher', age: 42 },
	{ name: 'Andreas', occupation: 'student', age: 33 },
	{ name: 'Kevin', occupation: 'student', age: 17 },
	{ name: 'Linus', occupation: 'student', age: 17},
	{ name: 'Mikael', occupation: 'student', age: 17 },
	{ name: 'Eddie', occupation: 'student', age: 19 },
	{ name: 'Kristoffer', occupation: 'student', age: 17 },
	{ name: 'Rasmus', occupation: 'student', age: 18 },
	{ name: 'Max', occupation: 'student', age: 17 },
	{ name: 'Isak', occupation: 'student', age: 17 }
];

let table = document.createElement('TABLE');
let totalAge = document.createTextNode('0')

for (let i = 0; i < datanoms.length; i++) {
	let row = document.createElement('TR');
	let headerRow = document.createElement('TR');

	totalAge.textContent = String(Number(totalAge.textContent) + Number(datanoms[i].age));

	for (let i_key = 0; i_key < Object.keys(datanoms[i_key]).length; i_key++) {
		if (i === 0) {
			let th = document.createElement('TH');
			let th_text = document.createTextNode(Object.keys(datanoms[i])[i_key]);

			th.appendChild(th_text);

			headerRow.appendChild(th);
		}
		let td = document.createElement('TD');
		let td_text = document.createTextNode(datanoms[i][Object.keys(datanoms[i])[i_key]])

		td.appendChild(td_text);
		row.appendChild(td);
	}

	if (i === 0) {
		table.appendChild(headerRow);
	}

	table.appendChild(row);
}

document.body.appendChild(table);

// 6
document.body.appendChild(totalAge)

// Reduce 1
const code = [
	{name: 'john', langs: ['HTML','CSS', 'PHP']},
	{name: 'kalle', langs: ['HTML','JavaScript','Python','TypeScript']},
	{name: 'jonas', langs: ['Javascript','PHP']}
];

const flat = code.reduce((total, amount) => {
  return total.concat(amount);
}, []);

const langs = [].concat(code[0].langs, code[1].langs, code[2].langs)
console.log(langs)

