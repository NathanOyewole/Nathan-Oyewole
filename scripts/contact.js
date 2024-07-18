document.addEventListener("DOMContentLoaded", function() {
    fetch('contact.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        });
});

