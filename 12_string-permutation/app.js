

function factorial (string) { 
	if (string.length === 1){ 
		return 1; 
	}
	return string.length * factorial (string.slice(1)); 
};

console.log(factorial('hola'));