
const form = document.getElementById("tripform")
console.log(form)
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let place = document.getElementById("Place").value;
    let budget = document.getElementById("Budget").value;
    let days = document.getElementById("Days").value;

    document.getElementById("destination").textContent = place;
    document.getElementById("tripDays").textContent = days;

    fetch(`http://127.0.0.1:8080/itinerary?place=${place}&budget=${budget}&days=${days}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data)

            const itinerary = data.itinerary[0]

            const itineraryDiv = document.getElementById('itinerary');

            // Create the elements and append them to the div
            const h2 = document.createElement('h2');
            h2.textContent = `${itinerary.name} - ${itinerary.place}`;
            itineraryDiv.appendChild(h2);

            const pBudget = document.createElement('p');
            pBudget.innerHTML = `<strong>Budget:</strong> ${itinerary.budget}`;
            itineraryDiv.appendChild(pBudget);

            const pDays = document.createElement('p');
            pDays.innerHTML = `<strong>Days:</strong> ${itinerary.days}`;
            itineraryDiv.appendChild(pDays);

            const pDescription = document.createElement('p');
            pDescription.classList.add('description');
            pDescription.innerHTML = `<strong>Description:</strong> ${itinerary.description}`;
            itineraryDiv.appendChild(pDescription);

            const pActivitiesTitle = document.createElement('p');
            pActivitiesTitle.classList.add('activities-title');
            pActivitiesTitle.textContent = 'Activities:';
            itineraryDiv.appendChild(pActivitiesTitle);

            const ul = document.createElement('ul');

            // Loop through the activities and add them to the list
            itinerary.activities.forEach(activity => {
                const li = document.createElement('li');
                li.textContent = activity.place;
                ul.appendChild(li);
            });

            itineraryDiv.appendChild(ul);

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });




});
