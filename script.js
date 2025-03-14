// Target cells within the container and the reset button
const divs = document.querySelectorAll('.container >div');
const button = document.querySelector('button');

//Set the initial value of the symbol to 'x'
let symbol = 'x';

// Function triggered when each cell is clicked
const myClick = (e) => {
	console.log('click');
	e.target.textContent = symbol;
	symbol = symbol === 'x' ? 'o' : 'x';
	e.target.removeEventListener('click', myClick);
};

// Add an event listener to each div
divs.forEach((div) => div.addEventListener('click', myClick));

// Resets board and add event listener to each cell
button.addEventListener('click', (e) => {
	divs.forEach((div) => {
		div.textContent = '';
		div.addEventListener('click', myClick);
		symbol = 'x';
	});
});
