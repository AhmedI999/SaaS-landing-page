import './styles/main.scss';

// additional JavaScript here

// Navbar menu
document.querySelector('.navbar-btn').addEventListener('click', function () {
    const navbarMenu = document.querySelector('.navbar-menu')
    // const isCurrentlyOpen = navbarMenu.classList.contains('navbar-menu-show');
    navbarMenu.classList.toggle('navbar-menu-show');
});

// FAQ section
document.querySelectorAll('.faq-icon').forEach(faqIcon => {

    faqIcon.addEventListener('click', function () {
        const faqContent = faqIcon.parentElement.querySelector('.faq-icon ~ .faq-content');
        const isCurrentlyOpen = faqContent.classList.contains('show-content');

        document.querySelectorAll('.faq-content').forEach(content => {
            content.classList.remove('show-content');
            content.parentElement.querySelector('.faq-icon').classList.remove('fa-minus');
            content.parentElement.querySelector('.faq-icon').classList.add('fa-plus');
        });

        if (!isCurrentlyOpen) {
            faqContent.classList.add('show-content');
            faqIcon.classList.remove('fa-plus');
            faqIcon.classList.add('fa-minus');
        }
    });
});
