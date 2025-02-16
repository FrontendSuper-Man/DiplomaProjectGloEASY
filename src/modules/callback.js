const callback = () => {
	const btnCallback = document.getElementById('header-btn-modal')
	const callback = document.getElementById('callback')
	const modalOverlay = document.querySelector('.modal-overlay')
	const modalClose = document.querySelector('.modal-close')
	const elemRelativeDiv = document.querySelectorAll('div.element.relative')
	const callHelp = document.getElementById('callHelp')


	function block() {
		callback.style.display = 'block'
		modalOverlay.style.display = 'block'
	}

	function none() {
		callback.style.display = 'none'
		modalOverlay.style.display = 'none'
	}
	
	callHelp.addEventListener('click', () => block())
	elemRelativeDiv.forEach(elem => elem.addEventListener('click', () => block()))
	btnCallback.addEventListener('click', () => block())
	modalClose.addEventListener('click', () => none())
	modalOverlay.addEventListener('click', () => none())
}

export default callback