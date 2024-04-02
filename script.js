const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const regsiterLink = document.querySelector('.register-link')

regsiterLink.addEventListener('click', () => {
    logregBox.classList.add('active');
})

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
})
