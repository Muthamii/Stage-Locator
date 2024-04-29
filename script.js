document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Muthami' && password === 'admin') {
        window.location.href = 'map.html'; 
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

function drawPath(stationTop, stationLeft) {
    const userTop = 10;
    const userLeft = 50;

    const existingPath = document.querySelector('.path');
    if (existingPath) existingPath.remove();

    const path = document.createElement('div');
    path.className = 'path';
    path.style.top = `${userTop}%`;
    path.style.left = `${userLeft}%`;
    path.style.width = `0px`;
    path.style.height = `2px`;
    path.style.background = 'green';
    path.style.position = 'absolute';
    path.style.transformOrigin = '0 0';

    const deltaX = stationLeft - userLeft;
    const deltaY = stationTop - userTop;
    const length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;

    path.style.width = `${length}%`;
    path.style.transform = `rotate(${angle}deg)`;
    document.getElementById('map').appendChild(path);
}
