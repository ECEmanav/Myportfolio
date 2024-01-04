document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const ham = document.querySelector('.ham');
    const cross = document.querySelector('.cross');
    const nameElement = document.querySelector('.name'); // Select the element with the name class

    document.querySelector('.icons').addEventListener("click", () => {
        toggleSidebar();
    });

    // Close sidebar when a nav link is clicked
    const navLinks = document.querySelectorAll('.sidebar nav li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleSidebar();
        });
    });

    function toggleSidebar() {
        sidebar.classList.toggle('sidebargo');

        if (sidebar.classList.contains('sidebargo')) {
            ham.style.display = 'inline';
            cross.style.display = 'none';
        } else {
            ham.style.display = 'none';
            cross.style.display = 'inline';
        }
    }

    // Dynamic name changing
    const names = ['Manav Behl', 'Web Developer', 'IoT Enthusiast'];
    let currentIndex = 0;

    setInterval(() => {
        nameElement.textContent = names[currentIndex];
        currentIndex = (currentIndex + 1) % names.length;
    }, 2000); // Change name every 2 seconds
});

