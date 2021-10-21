const navBar = document.querySelector('.navBar');
const navItem = document.querySelector('.naBar li');
const hamburger = document.querySelector('.hamburger');
const hamIcon = document.querySelector('.hamIcon');
const closeIcon = document.querySelector('.closeIcon');

function toggleNav() {
    if (navBar.classList.contains('showNavBar')) {
        navBar.classList.remove('showNavBar');
        hamIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    } else {
        navBar.classList.add('showNavBar');
        hamIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    }
}

hamburger.addEventListener('click', toggleNav);
