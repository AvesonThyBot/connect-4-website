const buttons = document.querySelectorAll(".game-buttons");

let turn = 1;

function colourButton(button) {
	selectedRow = checkActive(button);
	console.log("lowest number is ", selectedRow);

	// assigns button to the correct row
	button = document.getElementById(`c${button.id.charAt(1)}r${selectedRow}`);

	if (turn === 1) {
		// Colour depending on turn, and swap turn
		button.classList.add("red-buttons");
		button.classList.add("active");
		turn = 2;
	} else {
		button.classList.add("yellow-buttons");
		button.classList.add("active");
		turn = 1;
	}
}

function checkActive(button) {
	// variables for column number and row number
	let columnNum = button.id.charAt(1);

	// checks button under
	let lowestRow = 6;
	for (let index = 6; index >= 1; index--) {
		let indexButton = document.getElementById(`c${columnNum}r${index}`);
		// Find lowest free row
		lowestRow = index;

		if ((index - 1 || index == 1) && indexButton.classList.contains("active")) {
			// assigns lowest free row
			lowestRow = index + 1;
			return lowestRow;
		}
	}
	return lowestRow;
}
