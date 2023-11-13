document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove the 'active' class from all links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.classList.remove('active');
        });

        // Add the 'active' class to the clicked link
        this.classList.add('active');

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

