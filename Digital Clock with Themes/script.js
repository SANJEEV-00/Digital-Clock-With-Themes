let themes = [
    { background: '#f4f4f4', color: '#333' },
    { background: '#333', color: '#f4f4f4' },
    { background: '#007bff', color: '#fff' },
];

let themeIndex = 0;

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

function changeTheme() {
    themeIndex = (themeIndex + 1) % themes.length;
    const theme = themes[themeIndex];
    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.color;
}

setInterval(updateClock, 1000);
