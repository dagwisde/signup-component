/* Destructure form object */
const {
	signUp
} = document.forms;
const {
	firstName,
	lastName,
	email,
	password
} = signUp;

/* Display and hide errors */
const showError = (input) => {
	input.nextElementSibling.classList.remove('hide');
	input.classList.add('error');
	input.style.border = '2px solid $red';
};

const hideError = (input) => {
	input.nextElementSibling.classList.add('hide');
	input.classList.remove('error');
	input.classList.add('success');
};

/* Define Regex */
const patt = new RegExp(/\S+@\S+\.\S+/);

/* Validate input */
document.addEventListener('submit', (e) => {
	e.preventDefault();

	const formError = document.getElementsByClassName('error');

	if (formError.length == 0) {
		signUp.submit();
	}
});


/* Live validation on input */
document.addEventListener('input', (e) => {
	!firstName.value ? showError(firstName) : hideError(firstName);
	!lastName.value ? showError(lastName) : hideError(lastName);
	!password.value ? showError(password) : hideError(password);
	!patt.test(email.value) ? showError(email) : hideError(email);
})