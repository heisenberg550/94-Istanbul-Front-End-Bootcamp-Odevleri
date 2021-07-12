// DOM
let linkedinUrl = document.getElementById('linkedinUrl');
let githubUrl = document.getElementById('githubUrl');
let nameSurname = document.getElementById('nameSurname');
let age = document.getElementById('age');

// MY INFORMATION //
let myLinkedin = 'https://www.linkedin.com/in/rayan-alrouh/';
let myGithub = 'https://github.com/heisenberg550';
let myAge = '26';
let myName = 'Rayan Alrouh';


function getNameAndAge(){
    nameSurname.innerHTML = myName;
    age.innerHTML = `${myAge} Yaşında`;
    linkedinUrl.setAttribute('href', myLinkedin);
    githubUrl.setAttribute('href', myGithub);
}

// ON CLICK EVENT //
document.querySelector('button').addEventListener('click', getNameAndAge);





 
