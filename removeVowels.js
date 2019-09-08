
const removeVowels = function(str) {

	const map = {
		a: a,
		e: e,
		i: i,
		o: o,
		u: u
	}

	let result = ""

	for(let i = 0; i < str.length; i++){
		if(!map.hasOwnProperty(str[i])){
			result += str[i]
		}
	}

	return result;
}