document.addEventListener("DOMContentLoaded", function() {
    fetch('projects.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        });
});

