// Fitness
document.getElementById('readMoreBtn1')?.addEventListener('click', function() {
    window.location.href = '5manolahraga.html';
});

document.getElementById('readMoreBtn3')?.addEventListener('click', function() {
    window.location.href = 'olahmental.html';
});

document.getElementById('readMoreBtn99')?.addEventListener('click', function() {
    window.location.href = 'jenisoalhraga.html';
});

// Resep
document.getElementById('readMoreBtn2')?.addEventListener('click', function() {
    window.location.href = 'resepatlit.html';
});

document.getElementById('readMoreBtn4')?.addEventListener('click', function() {
    window.location.href = 'diet.html'; 
});

document.getElementById('readMoreBtn5')?.addEventListener('click', function() {
    window.location.href = 'sehatseharihari.html'; 
});

// Select the navbar
const navbar = document.getElementById('navbar');

// Add a scroll event listener
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // Adjust scroll distance as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelector('.cta-button').addEventListener('click', function (e) {
    e.preventDefault(); 
    document.querySelector('#content').scrollIntoView({
        behavior: 'smooth'
    });
});