// Function to populate data
async function populateData(dataVarName) {

    
    // Get the project ID from the query parameter (e.g., ?id=pateka-za-digitalizacija)
    const urlParams = new URLSearchParams(window.location.search);
    const dataId = urlParams.get('id');

    // Get the project data
    const innerData = dataVarName.find(data => data.id === dataId);

    if (innerData) {
        // Populate the page with project data
        document.querySelector('.heading-inside').textContent = innerData.naslov;
        document.querySelector('.project-date').textContent = innerData.datum;
        document.querySelector('.project-image').src = innerData.thumbnail;
        document.querySelector('.data-container').innerHTML = innerData.content;
    } else {
        // Handle case where project is not found
        document.querySelector('.data-container').innerHTML = `<p>Project not found.</p>`;
    }
}

/////////////


// Fetch HTML content
async function fetchHTML(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.text();
    } catch (error) {
        console.error('Error fetching HTML:', error);
        return ''; // Return an empty string if there's an error
    }
}

// Main function to load content and populate data
async function initializePage(dataVarName) {
    // Wait for project content to load

    if (dataVarName) {
        await loadProjectContent(dataVarName);
        // Now populate the data
        populateData(dataVarName);
    }

}

// Call the main function to initialize the page
// initializePage();


