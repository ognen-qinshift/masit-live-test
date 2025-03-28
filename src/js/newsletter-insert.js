function loadNewsletter() {
    var xfr = new XMLHttpRequest();
    xfr.open('GET', './src/html-templates/newsletter.html', true);

    xfr.onload = function() {
        if (xfr.status >= 200 && xfr.status < 300) {
            var locationVar = document.querySelector('.newsletter-insert');
            if (locationVar) {
                locationVar.innerHTML = xfr.responseText;

                // Execute the callback after the navbar is loaded
                if (typeof callback === 'function') {
                    callback();
                }
            } else {
                console.error('Footer element not found');
            }
        } else {
            console.error('Network response was not ok');
        }
    };

    xfr.onerror = function() {
        console.error('Error loading the footer');
    };

    xfr.send();
}

loadNewsletter();