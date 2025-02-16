const scrollUp = () => {
	document.addEventListener("DOMContentLoaded", () => {
		const upButton = document.querySelector(".up");
		const servicesBlock = document.querySelector(".services-section");

		window.addEventListener("scroll", () => {
			const servicesPosition = servicesBlock.getBoundingClientRect().top + window.scrollY;
			const scrollPosition = window.scrollY;

			if (scrollPosition >= servicesPosition) {
				upButton.style.opacity = "1";
				upButton.style.pointerEvents = "auto";
			} else {
				upButton.style.opacity = "0";
				upButton.style.pointerEvents = "none";
			}
		});

		upButton.addEventListener("click", (e) => {
			e.preventDefault();
			window.scrollTo({ top: 0 });
		});
	});

}

export default scrollUp