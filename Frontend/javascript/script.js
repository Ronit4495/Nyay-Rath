document.querySelectorAll('.top ul li').forEach(item => {
    item.addEventListener('click', function() {
        this.querySelector('img').classList.toggle('rotate');
    });
});
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Interactive buttons
    const buttons = document.querySelectorAll('.btn button');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = '#0056b3'; // Change color on hover
        });

        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = '#007bff'; // Revert to original color
        });
    });

    // Toggle navigation menu for smaller screens
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
    });



