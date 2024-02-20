// const persons = new XMLHttpRequest()
// persons.open("GET", "persons.json")
// persons.setRequestHeader("Content-type", "application/json")
// persons.send()
// persons.addEventListener('load', () => {
//     console.log(persons.response)
// })
//
// const personsBlock = document.querySelector('.persons_block')
//
// persons.forEach((person, personIndex) => {
//     const personCard = document.createElement('div')
//     personCard.setAttribute('class', 'person_card')
//
//     personCard.innerHTML = persons.name
//
//     personsBlock.appendChild(personCard)
// })


// const createPersonCard = (person) => {
//     const card = document.createElement('div');
//     card.classList.add('person-card');
//     card.innerHTML = `
//       <h2>${person.name}</h2>
//       <img src="${person.photo}" alt="${person.name}" class="person-photo">
//       <p>Age: ${person.age}</p>
//     `;
//     return card;
// }

const persons = new XMLHttpRequest();
persons.onreadystatechange = () => {
    const data = JSON.parse(persons.responseText);
    const people = document.getElementById('people');
    data.forEach(person => {
        const card = document.createElement('div');
        card.classList.add('person_card');
        card.innerHTML = `
         <h2>${person.name}</h2>
         <img src="${person.photo}" alt="${person.name}" class="person_photo">
         <p>Age: ${person.age}</p>
       `;
        people.appendChild(card);
    });
};
persons.open("GET", "persons.json");
persons.setRequestHeader("Content-type", "application/json");
persons.send();
