const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        // Toggle Navigation Panel
        nav.classList.toggle('nav-active');
        // Burger Animation cross
        burger.classList.toggle('toggle');
    });
}

navSlide();