document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById("theme-toggle");
    const body = document.body;
    const toggleIcon = document.querySelector(".toggle-icon");

    if (toggle) {
        toggle.addEventListener("change", function() {
            // Toggle light mode class on the body
            body.classList.toggle("light-mode");

            // Toggle between sun and moon icons
            if (body.classList.contains("light-mode")) {
                toggleIcon.textContent = "🌙"; // Moon for dark mode
                
            } else if (body.classList.contains("dark-mode")) {
                toggleIcon.textContent = "☀️"; // Sun for light mode
            }

            // Loop through elements to toggle class
            document.querySelectorAll(".main-title, .title, .btn-danger, .navbar, .nav-link, .about, .projects-section, .project-card, .intro, .skills-section, .contact, footer").forEach(el => {
                el.classList.toggle("light-mode");
            });
        });
    } else {
        console.error("Theme toggle checkbox not found!");
    }
});

    // Function to update time for a given timezone
    function updateTime(timezone) {
        const timeElement = document.getElementById('time');

        setInterval(() => {
            const date = new Date();

            // Use toLocaleString to convert to the specified timezone
            const options = { timeZone: timezone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
            const timeString = date.toLocaleString('en-US', options);

            timeElement.textContent = timeString + " (MYT)";  // Adjust text as per timezone
        }, 1000);
    }

    // Set the time
    updateTime('Asia/Kuala_Lumpur');  // Malaysia time zone


    $('.owl-3-slider').owlCarousel({
        loop: true,     //for the items/cards to go in a loop
        margin: 10,     //gap between the items/cards
        nav: true,      //nav buttons to be displayed
        navText: ["←", "→"],
        dots: false,    //the pagination at the bottom
        center: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });