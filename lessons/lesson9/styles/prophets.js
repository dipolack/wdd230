const requestURL = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });


  function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let portrait = document.createElement('img');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    // Change the textContent property of the p elements to contain the prophet's birth date and birth place
    p1.textContent = `Birth Date: ${prophet.birthdate}`;
    p2.textContent = `Birth Place: ${prophet.birthplace}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and 
    //loading attribute values. (Fill in the blank with the appropriate variable).
    let sufix = "th";
    switch (prophet.order){
        case 1: sufix = 'st'; break;
        case 2: sufix = 'nd'; break;
        case 3: sufix = 'rd'; break;
    }

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${sufix} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(portrait);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }