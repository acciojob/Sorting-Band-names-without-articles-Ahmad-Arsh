let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function stripArticles(name) {
    return name.replace(/^(a |an |the )/i, '');
}

touristSpots.sort((a, b) => stripArticles(a).localeCompare(stripArticles(b)));

let list = document.querySelector('#band');
touristSpots.forEach(spot => {
    let li = document.createElement('li');
    li.textContent = spot;
    list.appendChild(li);
});