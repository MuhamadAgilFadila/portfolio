document.addEventListener("DOMContentLoaded", () => {

    const primaryNav = document.querySelector('.primary__navigation');
    const menuToggleBtn = document.querySelector('.menu__toggle');


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

})