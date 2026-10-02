// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (event) {
        const targetId = this.getAttribute('href');

        if (targetId !== "#") {
            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});


// Explore Templates button

const exploreButton = document.querySelector('a[href="#categories"]');

if (exploreButton) {
    exploreButton.addEventListener('click', function () {
        alert("Explore our UI Template Collection!");
    });
}