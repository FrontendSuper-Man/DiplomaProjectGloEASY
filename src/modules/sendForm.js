import callback from "./callback"

const sendForm = () => {
	const form = document.getElementById('form-callback')

	const statusBlock = document.createElement('div')
	statusBlock.classList.add('add-div')

	const loadText = 'идет отправка...'
	const successText = 'отправлено'

	const sendData = (data) => {
		return fetch('http://localhost:3000/server.php', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json"
			}
		}).then(res => res.json());
	}

	const submitForm = () => {
		const formElements = form.querySelectorAll('input')
		const formData = new FormData(form);
		const formBody = {}

		statusBlock.textContent = loadText
		form.append(statusBlock)

		formData.forEach((val, key) => {
			formBody[key] = val
		})

		sendData(formBody)
			.then(() => {
				statusBlock.textContent = successText
				formElements[0].value = '';
				formElements[1].value = '';
			})
	}

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		submitForm()
	});

	return sendData()
}

export default sendForm 