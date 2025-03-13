const divs = document.querySelectorAll('.container >div');
const button = document.querySelector('button');
let symbol = 'x';
const myClick = (e) => {
	console.log('click');
	e.target.textContent = symbol;
	symbol = symbol === 'x' ? 'o' : 'x';
	e.target.removeEventListener('click', myClick);
};
divs.forEach((div) => div.addEventListener('click', myClick));

button.addEventListener('click', (e) => {
	divs.forEach((div) => {
		div.textContent = '';
		div.addEventListener('click', myClick);
		symbol = 'x';
	});
});
