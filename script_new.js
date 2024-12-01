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
        margin: 2,     //gap between the items/cards
        nav: true,      //nav buttons to be displayed
        // navText: ["←", "→"],
        dots: false,    //the pagination at the bottom
        center: false,   // causes carousel to center the first item
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });


    // in case you're separating modals from index.html
    // document.getElementById("openModalButton").addEventListener("click", function() {
    //     // Check if the modal already exists
    //     if (!document.getElementById('myModal')) {
    //         fetch('modal.html')
    //             .then(response => response.text())
    //             .then(data => {
    //                 // Insert the fetched modal content into the body
    //                 document.body.insertAdjacentHTML('beforeend', data);
    
    //                 // Initialize the modal
    //                 var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    //                 myModal.show();
    //             })
    //             .catch(error => {
    //                 console.error('Error loading modal:', error);
    //             });
    //     } else {
    //         // If modal exists, just show it
    //         var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    //         myModal.show();
    //     }
    // });

    // JavaScript to load and display the correct modal
    document.querySelectorAll('[id^="openModalButton"]').forEach(button => {
        button.addEventListener("click", function() {
            // Get the modal id from the button's data attribute
            var modalId = this.getAttribute("data-modal-id");

            // Fetch the modal HTML content
            fetch('modal.html')
                .then(response => response.text())
                .then(data => {
                    // Insert the fetched modal content into the body
                    document.body.insertAdjacentHTML('beforeend', data);

                    // Get the specific modal to be shown
                    var modalToShow = new bootstrap.Modal(document.getElementById(modalId));

                    // Show the modal
                    modalToShow.show();
                })
                .catch(error => {
                    console.error('Error loading modal:', error);
                });
        });
    });
    

// JavaScript for scroll to top button functionality

let mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block"; // Show the button
    } else {
        mybutton.style.display = "none"; // Hide the button
    }
};

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling
    });
};
