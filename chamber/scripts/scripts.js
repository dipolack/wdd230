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

const day = new Date().getDay();
const header = document.querySelector("header");

const dayOfTheWeek = [
    "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
];

if (dayOfTheWeek[day] == "Monday" || dayOfTheWeek [day]== "Tuesday") {
    let banner = document.querySelector('.banner');
    banner.style.display = 'block';
} else {
    let banner = document.querySelector('.banner');
    banner.style.display = 'none';
}

