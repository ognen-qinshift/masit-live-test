// Function to populate cards
async function populateCards(dataVarName, containerSelector, loadCount = dataVarName.length) {
    const cardsContainer = document.querySelector(containerSelector);

    // Fetch the card template
    const response = await fetch('./src/html-templates/card-template.html');
    const cardTemplate = await response.text();

    let currentIndex = 0; // Track the current index of loaded cards

    // Function to load cards
    const loadCards = () => {
        const endIndex = Math.min(currentIndex + loadCount, dataVarName.length); // Calculate the end index

        for (let i = currentIndex; i < endIndex; i++) {
            const project = dataVarName[i];

            // Create a new card element
            const card = document.createElement('div');
            card.classList.add('card-wrap');
            card.setAttribute("data-aos", "fade-up");
            card.innerHTML = cardTemplate;

            // Populate the card with project data
            const cardImage = card.querySelector('.card-image');
            const cardTitle = card.querySelector('.card-title');
            const cardDescription = card.querySelector('.card-description');
            const cardDate = card.querySelector('.card-date');
            const cardLink = card.querySelector('.card-btn a');

            cardImage.src = project.thumbnail;
            cardImage.alt = project.naslov;
            cardTitle.textContent = project.naslov;
            cardDescription.textContent = project.opis;
            cardDate.textContent = project.datum;
            cardLink.href = project.link;

            // Append the card to the container
            cardsContainer.appendChild(card);
        }

        currentIndex = endIndex; // Update the current index

        // Target "Load More" button
        const loadMoreButton = document.querySelector('.load-more-btn');

        // Show/hide the "Load More" button
        if (loadMoreButton) {
            if (currentIndex < dataVarName.length) {
                loadMoreButton.style.display = 'block'; // Show the button if there are more cards
            } else {
                loadMoreButton.style.display = 'none'; // Hide the button if all cards are loaded
            }
        }
    };

    // Load the initial set of cards
    loadCards();

    // Add a click event listener to the "Load More" button
    const loadMoreButton = document.querySelector('.load-more-btn');
    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', loadCards);
    }
}



// Define waitForElement first
function waitForElement(selector, callback) {
    const observer = new MutationObserver((mutations, obs) => {
        const elements = document.querySelectorAll(selector);
        if (elements.length > 0) {
            // Elements found, stop observing and run the callback
            obs.disconnect(); // Stop observing
            callback(elements); // Pass all elements to the callback
        }
    });

    // Start observing the document for changes
    observer.observe(document, {
        childList: true, // Observe direct children
        subtree: true, // Observe all descendants
    });
}

// Now you can safely call waitForElement
waitForElement('.card', function (cards) {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const card3 = entry.target.querySelector('.card');

            if (entry.isIntersecting) {
                card3.classList.add('card-animation');
                return; // if we added the class, exit the function
            } else {

                // We're not intersecting, so remove the class!
                card3.classList.remove('card-animation');
            };
        });
    });

    // Get multiple elements instead of a single one using "querySelectorAll"
    const cards2 = document.querySelectorAll('.card-wrap');

    // Loop over the elements and add each one to the observer
    cards2.forEach((element) => observer.observe(element));
});


