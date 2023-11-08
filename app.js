const primaryNav = document.querySelector('.primary__navigation');
const menuToggleBtn = document.querySelector('.menu__toggle');


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
}, {
    threshold: 0.5,
})


observer.observe(document.querySelector('.second-article'));



menuToggleBtn.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', true);
        menuToggleBtn.setAttribute('aria-expanded', true);
    } else if (visibility === 'true') {
        primaryNav.setAttribute('data-visible', false);
        menuToggleBtn.setAttribute('aria-expanded', false);
    }

})