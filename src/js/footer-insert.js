function loadFooter() {
    var xfr = new XMLHttpRequest();
    xfr.open('GET', '/src/html-templates/header-footer/footer.html', true);

    xfr.onload = function() {
        if (xfr.status >= 200 && xfr.status < 300) {
            var footer = document.querySelector('footer');
            if (footer) {
                footer.innerHTML = xfr.responseText;

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

loadFooter();