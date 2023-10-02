const buttons = document.querySelectorAll(".game-buttons");

let turn = 1;

function colourButton(button) {
	selectedRow = checkActive(button);
	console.log("lowest number is ", selectedRow);
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
	for (let index = 6; index >= 1; index--) {
		console.log(index);
		let indexButton = document.getElementById(`c${columnNum}r${index}`);
		// Find lowest free row
		lowestRow = index;

		if ((index - 1 || index == 1) && indexButton.classList.contains("active")) {
			// assigns lowest free row
			lowestRow = index + 1;
			if (lowestRow == 7) {
				lowestRow = 6;
			}
			return lowestRow;
		}
	}
	return lowestRow;
}
