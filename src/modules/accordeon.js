const accordeon = () => {
	const accordeonDiv = document.querySelector('.accordeon');
	const elementsAccor = document.querySelectorAll('.accordeon > .element');
	const titles = accordeonDiv.querySelectorAll('.title');

	titles.forEach((title, index) => {
		title.addEventListener('click', () => {
			const isActive = elementsAccor[index].classList.contains('active');

			elementsAccor.forEach(el => el.classList.remove('active'));

			if (!isActive) {
				elementsAccor[index].classList.add('active');
			}
		});
	});
};

export default accordeon;
