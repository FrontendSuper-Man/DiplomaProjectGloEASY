const valid = () => {
	const nameInput = document.getElementById('nameInput');
	const numInput = document.getElementById('numInput');

	nameInput.addEventListener('input', () => {
		nameInput.value = nameInput.value.replace(/[^А-ЯЁа-яё\s]/g, '');
		console.log(nameInput.value);
	});

	numInput.addEventListener('input', () => {
		numInput.value = numInput.value.replace(/[^\d+\s]/g, '');
		console.log(numInput.value);
	});
};


export default valid