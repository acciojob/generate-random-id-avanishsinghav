function makeid(l) {
  // write your code here
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = " ";
	const characterlength = parse(l);
	for(let  = 0; i<characterlen; i++){
		result += characters.charAt(Math.floor(Math.random()*characterlength));
	}
	return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
