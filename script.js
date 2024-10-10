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

//Style
document.getElementById('readMoreBtn8')?.addEventListener('click', function() {
    window.location.href = 'trend2024.html';
});

document.getElementById('readMoreBtn9')?.addEventListener('click', function() {
    window.location.href = 'stylekampus.html'; 
});

document.getElementById('readMoreBtn10')?.addEventListener('click', function() {
    window.location.href = 'trendjp.html'; 
});


const navbar = document.getElementById('navbar');


window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { 
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

window.addEventListener('scroll', function () {
    var navbar = document.querySelector('nav'); 
    var scrollPosition = window.scrollY; 

   
    if (scrollPosition > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});