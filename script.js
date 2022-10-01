function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}

const titles = document.querySelectorAll('.title');
const intervalId = setInterval(function () {
    for (let title of titles) {
        title.style.color = randomRGB();
    }
}, 1000);