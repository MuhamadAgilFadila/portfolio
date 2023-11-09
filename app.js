const primaryNav = document.querySelector('.primary__navigation');
const menuToggleBtn = document.querySelector('.menu__toggle');

const projectBoxes = document.querySelectorAll('.project-box');


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
}, { threshold: 1, })

observer.observe(document.querySelector('.second-article'));

projectBoxes.forEach(box => {
    observer.observe(box)
})


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