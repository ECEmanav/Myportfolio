document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const ham = document.querySelector('.ham');
    const cross = document.querySelector('.cross');

    // Check if the page is being reloaded
    if (performance.navigation.type === 1) {
        // Page is being reloaded, close the sidebar
        toggleSidebar();
    }

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
});

