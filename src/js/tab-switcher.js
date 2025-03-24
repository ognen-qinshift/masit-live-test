// Function to switch tabs
function switchTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const currentProjectsContainer = document.querySelector('.cards-wrapper-grid.current-pr');
    const finishedProjectsContainer = document.querySelector('.cards-wrapper-grid.finished-pr');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to the clicked button
            button.classList.add('active');

            // Show/hide containers based on the clicked button
            const target = button.getAttribute('data-target');
            if (target === "current-pr") {
                currentProjectsContainer.style.display = "grid";
                finishedProjectsContainer.style.display = "none";
            } else if (target === "finished-pr") {
                currentProjectsContainer.style.display = "none";
                finishedProjectsContainer.style.display = "grid";
            }
        });
    });
}

// Call the function to enable tab switching
switchTabs();