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

weekday = date.getDay();

if (weekday === 1 || weekday === 4){
    article.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m!";
    article.setAttribute('class', 'banner-message');
}

let joint=document.querySelectorAll('.join-us');
