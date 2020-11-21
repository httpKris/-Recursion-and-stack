// function sum(n) {
// 	if (n === 1) {
// 		return 1
// 	}
// 	return n + sum(n - 1)


// }

// console.log(sum(10000))

// function sumfor(n) {
// 	let result = 0
// 	for (let i = 0; i <= n; i++) {
// 		result += i;
// 	}
// 	return result
// }

// console.log(sumfor(300000000))


// function sumMath(n) {
// 	return (n * (n + 1)) / 2
// }

// console.log(sumMath(300000000))

function factorial(n) {
	if (n === 1) {
		return 1
	}
	return n * factorial(n - 1)
}

console.log(factorial(5))

// короткая запись
function factorial(n) {
	// (n != 1)
	return n ? n * factorial(n - 1) : 1
}

console.log(factorial(5))

// Фибаначи 

function fib(n) {

	return n <= 1 ? n : fib(n - 1) + fib(n - 2);

}

console.log(fib(7))

//динамическое  программирование снизу-вверх

function fibDin(n) {
	let a = 1
	let b = 1
	for (let i = 3; i <= n; i++) {
		let c = a + b
		a = b
		b = c
	}
	return b
}

console.log(fibDin(7))

let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null
			}
		}
	}
};


function printList(list) {
	console.log(list.value); // выводим текущий элемент
	if (list.next) {
		printList(list.next); // делаем то же самое для остальной части списка
	}
}

printList(list);

function printList(list) {
	while (list) {
		console.log(list.value)
		list = list.next
	}
}

console.log(printList(list))


let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null
			}
		}
	}
};

function printReverseList(list) {
	if (list.next) {
		printReverseList(list.next)
	}
	console.log(list.value);
}

printReverseList(list);



let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null
			}
		}
	}
};

function printReverseList(list) {
	let arr = [];
	let tmp = list;

	while (tmp) {
		arr.push(tmp.value);
		tmp = tmp.next;
	}

	for (let i = arr.length - 1; i >= 0; i--) {
		alert(arr[i]);
	}
}

printReverseList(list);