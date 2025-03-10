// MK-EN toggle 

document.querySelector(".jazik").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    this.classList.toggle("active"); // Toggle active state

    const mkSpan = this.querySelector(".span-mk");
    const enSpan = this.querySelector(".span-en");

    // Swap the "hover-color" class between the spans
    mkSpan.classList.toggle("hover-color");
    enSpan.classList.toggle("hover-color");
});



///////////////// navbar open close ///////////////////////////


let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");
const navOpen = document.querySelector(".nav0-open-cl");
const triagolnikico = document.querySelector("#triagolnik-ico");
let autoCloseTimeout; // Variable to store timeout

// Function to close dropdown
function closeDropdown() {
    navOpen.style.height = "0px"; // Collapse
    triagolnikico.style.transform = 'scaleY(100%)'; // Reset icon
}

// Navbar show/hide on scroll
window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        // Scrolling down - hide navbar and close dropdown
        navbar.style.transform = "translateY(-100%)";
        closeDropdown();
    } else {
        // Scrolling up - show navbar
        navbar.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
});

// Open/close dropdown on click
document.querySelector(".za-nas").addEventListener("click", function () {
    if (navOpen.style.height === "0px" || navOpen.style.height === "") {
        navOpen.style.height = navOpen.scrollHeight + "px"; // Expand
        triagolnikico.style.transform = 'scaleY(-100%)';

        // Clear any existing timeout and start a new one
        clearTimeout(autoCloseTimeout);
        autoCloseTimeout = setTimeout(() => {
            closeDropdown();
        }, 3000); // Auto-close after 3 seconds
    } else {
        closeDropdown(); // Collapse if already open
    }    
});

// Cancel auto-close if the user hovers over the dropdown
navOpen.addEventListener("mouseenter", function () {
    clearTimeout(autoCloseTimeout);
});

// Restart auto-close when the mouse leaves
navOpen.addEventListener("mouseleave", function () {
    autoCloseTimeout = setTimeout(() => {
        closeDropdown();
    }, 2000);
});

///////////////// navbar open close END ///////////////////////////