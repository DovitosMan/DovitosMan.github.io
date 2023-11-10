const locations = [
    {
      "id": 1,
      "name": "Biarritz",
      "country": "FR",
      "days": [
        {
          "id": 1,
          "date": "Thu Nov 09 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "sunny",
          "temperature": 29,
          "precipitation": 0,
          "humidity": 42,
          "wind": 3
        },
        {
          "id": 2,
          "date": "Thu Nov 10 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "cloudy",
          "temperature": 24,
          "precipitation": 5,
          "humidity": 64,
          "wind": 4
        },
        {
          "id": 3,
          "date": "Thu Nov 11 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "rainy",
          "temperature": 18,
          "precipitation": 10,
          "humidity": 80,
          "wind": 5
        },
        {
          "id": 4,
          "date": "Thu Nov 12 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "sunny",
          "temperature": 29,
          "precipitation": 4,
          "humidity": 60,
          "wind": 4
        }
      ]
    },
    {
      "id": 2,
      "name": "Moscow",
      "country": "RU",
      "days": [
        {
          "id": 1,
          "date": "Thu Nov 09 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "sunny",
          "temperature": 29,
          "precipitation": 0,
          "humidity": 42,
          "wind": 3
        },
        {
          "id": 2,
          "date": "Thu Nov 10 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "cloudy",
          "temperature": 24,
          "precipitation": 5,
          "humidity": 64,
          "wind": 4
        },
        {
          "id": 3,
          "date": "Thu Nov 11 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "rainy",
          "temperature": 18,
          "precipitation": 10,
          "humidity": 80,
          "wind": 5
        },
        {
          "id": 4,
          "date": "Thu Nov 12 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "sunny",
          "temperature": 29,
          "precipitation": 4,
          "humidity": 60,
          "wind": 4
        }
      ]
    },
    {
      "id": 3,
      "name": "London",
      "country": "UK",
      "days": [
        {
          "id": 1,
          "date": "Thu Nov 09 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "sunny",
          "temperature": 29,
          "precipitation": 0,
          "humidity": 42,
          "wind": 3
        },
        {
          "id": 2,
          "date": "Thu Nov 10 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "cloudy",
          "temperature": 24,
          "precipitation": 5,
          "humidity": 64,
          "wind": 4
        },
        {
          "id": 3,
          "date": "Thu Nov 11 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "rainy",
          "temperature": 18,
          "precipitation": 10,
          "humidity": 80,
          "wind": 5
        },
        {
          "id": 4,
          "date": "Thu Nov 12 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "sunny",
          "temperature": 29,
          "precipitation": 4,
          "humidity": 60,
          "wind": 4
        }
      ]
    }
  ];

window.addEventListener("load", function(){
    const daysNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const [currentLocation] = locations;
    const { name, country, days } = currentLocation;

    // const dateElement = document.getElementById('date');
    const cityElement = document.getElementById('city');
    const countryElement = document.getElementById('country');
    const percipitationElement = document.getElementById('percipitation-percent');
    const humidityElement = document.getElementById('humidity-percent');
    const windElement = document.getElementById('wind-percent');
    const weekDay = document.getElementById('widget-day1');
    const weekTemperature = document.getElementById('widget-temperature1');
    // const weekDaysContainer = document.querySelector('.card-right__week-day');

    days.forEach((day) => {
      const [day] = days;
      const {temperature, date} = day;
      console.log (day.date);
      if (weekDay) {
      const dateFormat = new Date(date);
      weekDay.innerText = daysNames[dateFormat.getDay()];
    };
    if (weekTemperature) {
      weekTemperature.innerText = temperature + "°C";
    };
      // const dayElement = document.createElement('div');
      // dayElement.classList.add('card-right__widget--unactive');
      // dayElement.appendChild(weekDay);
      // dayElement.appendChild(weekTemperature);

      // weekDaysContainer.appendChild(dayElement);
  });
    if (cityElement) {
        cityElement.innerText = name + ", ";
    };
    if (countryElement) {
        countryElement.innerText = country;
    };
    if (percipitationElement) {
        percipitationElement.innerText = day.precipitation + "%";
    };
    if (humidityElement) {
        humidityElement.innerText = day.humidity + "%";
    };
    if (windElement) {
        windElement.innerText = day.wind + "km/h";
    };
});