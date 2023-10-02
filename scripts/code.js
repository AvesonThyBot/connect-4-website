const buttons = document.querySelectorAll(".game-buttons");

let turn = 1;

function colourButton(button) {
	checkActive(button);
	// Colour depending on turn, and swap turn
	if (turn === 1) {
		button.classList.add("red-buttons");
		turn = 2;
	} else {
		button.classList.add("yellow-buttons");
		turn = 1;
	}
}

function checkActive(button) {
	// check if buttons under are coloured or not
	console.log(button.parentElement);
	let column = button.parentElement;
	let buttonID = button.id;
	buttonID = buttonID.substring(3);
	console.log(buttonID);
	let buttonPosition = button.id;
	for (let index = 0; index < column.length; index++) {
		const element = array[index];
	}
	if (button.classList.contains("active")) {
	}
}
