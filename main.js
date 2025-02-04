document.getElementById('navbar-toggle').addEventListener('click', function() {
    var menu = document.getElementById('navbar-menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
});