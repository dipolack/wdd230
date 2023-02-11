let currentDate = document.lastModified;
document.querySelector('#dateMod').textContent = currentDate;

let date = new Date();
let year = date.getFullYear();
document.querySelector('#datetime').innerHTML = year;
const dateField = document.querySelector("#datetime");
const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);
dateField.innerHTML = fullDate;

function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburguerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburguerBtn');

x.onclick = toggleMenu;

let day = date.getDay();

if (day == 1 || day == 2) {
    let banner = document.querySelector('.banner');
    banner.style.display = 'block';
} else {
    let banner = document.querySelector('.banner');
    banner.style.display = 'none';
}