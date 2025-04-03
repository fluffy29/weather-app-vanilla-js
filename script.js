const API_KEY = "a95f736795794e71a9b75850250304";
const cityLocation = "Paris";
const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityLocation}&aqi=yes`;

const fetchWeather = async () => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const data = await response.json();
    console.log(data);

    const {
      location: { name: city },
      current: {
        temp_c: temp,
        condition: { icon },
        wind_kph: wind,
        humidity,
        uv,
		
        feelslike_c: feelslike,
      },
    } = data;

    document.querySelector(".card-title").textContent = city;
    document.querySelector(".card-img").src = icon;
    const listItems = document.querySelectorAll(".list-group-item");
    listItems[0].textContent = `Temperature: ${temp}°C`;
    listItems[1].textContent = `Humidity: ${humidity}%`;
    listItems[2].textContent = `Feels like: ${feelslike}°C`;
    listItems[3].textContent = `Wind: ${wind} km/h`;
    listItems[4].textContent = `UV: ${uv}`;
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

window.onload = fetchWeather;
