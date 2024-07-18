document.addEventListener("DOMContentLoaded", function() {
    fetch('about.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        });
});

