const toggleCircle = document.querySelector('.toggle__circle');

toggleCircle.addEventListener('click', () => {
    document.querySelector('main').classList.toggle('dark');
    toggleCircle.classList.toggle('toggle__cicle-active');
});

AOS.init();