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