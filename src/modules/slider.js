const slider = () => {
	const tables = document.querySelectorAll('.slide-item')

	let interval
	let currentSlide = 0

	const nextSlide = (elems, index, strClass) => { elems[index].classList.add(strClass) }
	const prevSlide = (elems, index, strClass) => { elems[index].classList.remove(strClass) }

	const autoSlide = () => {
		prevSlide(tables, currentSlide, 'active')
		currentSlide++
		currentSlide >= tables.length ? currentSlide = 0 : null
		nextSlide(tables, currentSlide, 'active')
	}

	const startSlide = () => { interval = setInterval(autoSlide, 3000) }

	startSlide()
}

export default slider