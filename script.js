window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollY = window.scrollY;

    // Change background color when scrolled
    if (scrollY > 50) {
        navbar.style.backgroundColor = '#333'; // Change to your desired color
    } else {
        navbar.style.backgroundColor = 'transparent'; // Change to your initial color
    }
});