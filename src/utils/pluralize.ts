const pluralize = (i: any, str0 : any, str1, str2, str3) => {
	if (!i) {
		// @ts-ignore
		return parse(str0, i)
	}

	let number = plural(i);
	if (number === 0) {
		// @ts-ignore
		return parse(str1, i)
	} else if (number === 1) {
		// @ts-ignore
		return parse(str2, i)
	} else {
		// @ts-ignore
		return parse(str3, i)
	}
}

function parse(str: string) {
	let args = [].slice.call(arguments, 1)
	let i = 0

	return str.replace(/%d/g, function () {
		return args[i++]
	})
}

function plural(a) {
	if (a % 10 === 1 && a % 100 !== 11) {
		return 0
	} else if (a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20)) {
		return 1
	} else {
		return 2
	}
}

export default pluralize
