const form1 = document.getElementById('form1');
const userName = document.getElementById('userName');
const password = document.getElementById('password');
const email = document.getElementById('email');

form1.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const usernameValue = userName.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value;
	const checkbox = document.getElementById('checkbox');
	
	if(usernameValue === '') {
		ErrorMes(userName, 'Kullancı adı');
	} else {
		errorDelete(userName);
	}

    if(passwordValue.length < 8 ) {
		ErrorMes(password, 'Parola Giriniz En Az 8 Karakter');
	} else {
		errorDelete(password);
	}

    if(emailValue === '') {
		ErrorMes(email, 'Mail Giriniz');
	} else if (!isEmail(emailValue)) {
		ErrorMes(email, 'Yanlış Mail Girdiniz.');
	} else {
		errorDelete(email);
	}

	if(!checkbox.checked) {
		ErrorMes(checkbox, "Lütfen Bu Alanı İşaretleyin'");
	} else {
		errorDelete(checkbox);
	}
}

function ErrorMes(input, message) {
	const mainclass = input.parentElement;
	const small = mainclass.querySelector('small');
	small.className = 'error';
	small.innerText = message;
}

function errorDelete(input) {
	const mainclass = input.parentElement;
    const small = mainclass.querySelector('small');
	small.className = '';
    small.innerText = "";
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}