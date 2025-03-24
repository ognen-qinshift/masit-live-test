// // MutationObserver to wait for .card elements to load
// function waitForElement(selector, callback) {
//     const observer = new MutationObserver((mutations, obs) => {
//         const element = document.querySelector(selector);
//         if (element) {
//             // Element found, stop observing and run the callback
//             obs.disconnect(); // Stop observing
//             callback(element); // Pass the element to the callback
//         }
//     });

//     // Start observing the document for changes
//     observer.observe(document, {
//         childList: true, // Observe direct children
//         subtree: true, // Observe all descendants
//     });
// }

// // Usage of waitForElement
// waitForElement('.card', function() {
//     // IntersectionObserver to animate .card elements

//     const cards = document.querySelectorAll('.card-wrap');
//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('card-animation');
//             } else {
//                 entry.target.classList.remove('card-animation');
//             }
//         });
//     });

//     // Observe each .card element
//     cards.forEach(card => {
//         observer.observe(card);
//     });
// });


