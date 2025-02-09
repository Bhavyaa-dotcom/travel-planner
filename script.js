
const form=document.getElementById("tripform")
console.log(form)
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let place = document.getElementById("Place").value;
    let budget = document.getElementById("Budget").value;
    let days = document.getElementById("Days").value;
    
    document.getElementById("destination").textContent = place;
    document.getElementById("tripDays").textContent = days;

    let dailyBudget = budget / days;
    let itinerary = "<h4>Your Suggested Plan:</h4>";

    if (dailyBudget > 100) {
        itinerary += "- Luxury dining & guided tours<br>";
    } else if (dailyBudget > 50) {
        itinerary += "- Mid-range restaurants & local attractions<br>";
    } else {
        itinerary += "- Budget travel & free sightseeing<br>";
    }

    document.getElementById("itinerary").innerHTML = itinerary;
});
