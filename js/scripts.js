function cipher1(){
	let ciphInput = window.prompt("Enter a sentence! (Sans punctuation, please)");
	return ciphInput;
}

function cipher2(){
	let ciphInput = globalCiphInput1.slice(0,1) + globalCiphInput1.slice(-1);
	return ciphInput;
}

function cipher3(){
	let ciphSplit = globalCiphInput2.split("");
	let ciphReverse = ciphSplit.reverse();
	let ciphJoin = ciphSplit.join("");
	let ciphConcat = globalCiphInput1.concat(ciphJoin);
	return ciphConcat;
}

function cipher4(){
	let halfLetter1 = (globalCiphInput1.length / 2).parseInt();
	let halfLetter2 = globalCiphInput1.charAt(halfLetter1)
	return halfLetter2
}

function cipher5(){
	let ciphResult1 = globalCiphInput4 + globalCiphInput1 + globalCiphInput3
	let ciphResult2 = ciphResult1.split("");
	let ciphResult3 = ciphResult2.reverse();
	let ciphResult4 = ciphResult3.join("");
	return ciphResult4
}
let globalCiphInput1 = cipher1();
window.confirm('You input "' + globalCiphInput1 +'".  Is that correct?');
let globalCiphInput2 = cipher2();
let globalCiphInput3 = cipher3();
let globalCiphInput4 = cipher4();
let globalCiphInput5 = cipher5();
window.alert(globalCiphInput5)