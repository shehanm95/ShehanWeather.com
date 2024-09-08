

let input = document.getElementById("input");
let CardContainer = document.getElementById('cardContainer');
search();

function search() {
    CardContainer.innerHTML = "";
    let value = "";
    if (input.value == "") {
        value = "Colombo";
    } else {
        value = input.value;
    }
    fetch(`https://api.weatherapi.com/v1/forecast.json?key= e8989e9f407a4d2e96574923240309&q=${value}&days=7`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            icon.src = data.current.condition.icon
            temp.textContent = data.current.temp_c + "°C";
            town.textContent = data.location.country + " - " + data.location.name;
            date.textContent = data.current.last_updated;

            forecastArray = data.forecast.forecastday;
            console.log(forecastArray)
            forecastArray.forEach(element => {
                console.log(element)
                card = ` <div class="card">
                    <div class="cardTemp">${(element.hour[12].temp_c).toFixed(1)}°C</div>
                    <img  src="${element.day.condition.icon}" class="cardImg" alt="weather icon">
                    <div class="cardText">
                        <div class="weatherConditionText">${element.day.condition.text}</div>
                        <br>
                        <div class="dateText">${element.date}</div>
                    </div>
                </div>`

                CardContainer.innerHTML += (card);
            });
        })
        .catch((error) => alert(error));

}

