/* Destructure form object */
const { signUp } = document.forms;
const { firstName, lastName, email, password } = signUp;

/* Display and hide errors */
const showError = (input) => {
	input.nextElementSibling.classList.remove('hide');
	input.classList.add('error');
	input.style.border = '2px solid $red';
};

const hideError = (input) => {
	input.nextElementSibling.classList.add('hide');
	input.classList.remove('error');
};

/* Define Regex */
const patt = new RegExp(/\S+@\S+\.\S+/);

/* Validate input */
document.addEventListener('submit', (e) => {
	e.preventDefault();

	const formElement = document.querySelector('.form__input');

	!firstName.value ? showError(firstName) : hideError(firstName);
	!lastName.value ? showError(lastName) : hideError(lastName);
	!password.value ? showError(password) : hideError(password);
	!patt.test(email.value) ? showError(email) : hideError(email);

	if (!formElement.classList.contains('error')) {
		signUp.submit();
	}
});
