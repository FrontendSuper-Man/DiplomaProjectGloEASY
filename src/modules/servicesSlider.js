const servicesSlider = () => {
	const col1 = document.querySelector(".col-1");
	const col2 = document.querySelector(".col-2");
	const arrowLeft = document.querySelector(".arrow-left");
	const arrowRight = document.querySelector(".arrow-right");

	arrowLeft.addEventListener("click", () => {
		col2.classList.remove('active')
		col1.classList.add('active')
	});

	arrowRight.addEventListener("click", () => {
		col2.classList.add('active')
		col1.classList.remove('active')
	});
}
export default servicesSlider