const buttons = document.querySelectorAll(".game-buttons");

let turn = 1;

function colourButton(button) {
	selectedRow = checkActive(button);
	console.log(selectedRow);
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
	// variables for column number and row number
	let columnNum = button.id.charAt(1);
	let rowNum = button.id.substring(3);

	// checks button under
	let lowestRow = 6;
	for (let index = 1; index < rowNum; index++) {
		let indexButton = document.getElementById(`c${columnNum}r${index}`);
		if (rowNum > index && !indexButton.classList.contains("active")) {
			// assigns lowest free row
			if (lowestRow > index && !indexButton.classList.contains("active")) {
				lowestRow = index;
			}
		}
	}
	return lowestRow;
}
