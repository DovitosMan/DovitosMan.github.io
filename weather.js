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

const daysNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
window.addEventListener("load", function(){
    const [currentLocation] = locations;
    const { name, country, days } = currentLocation;
    const [firstDay] = days;
    const weekElement = document.getElementById('week');
    // const dateElement = document.getElementById('date');
    const cityElement = document.getElementById('city');
    const countryElement = document.getElementById('country');
    const percipitationElement = document.getElementById('percipitation-percent');
    const humidityElement = document.getElementById('humidity-percent');
    const windElement = document.getElementById('wind-percent');
    const weekDaysContainer = document.querySelector('.card-right__week-day');
    days.forEach((day) => {
        const { temperature, date } = day;
        const dateFormat = new Date(date);

        const weekDay = document.createElement('div');
        weekDay.classList.add('card-right__week-day-text');
        weekDay.innerText = daysNames[dateFormat.getDay()];

        const weekTemperature = document.createElement('div');
        weekTemperature.classList.add('card-right__week-day-temperature');
        weekTemperature.innerText = `${temperature} °C`;
    };
    if (weekElement) {
        const formattedDate = new Date(firstDay.date);
        debugger;
        weekElement.innerText = daysName[formattedDate.getDay()];
    };
    if (cityElement) {
        cityElement.innerText = name + ", ";
        console.log(name);
    };
    if (countryElement) {
        countryElement.innerText = country;
        console.log(country);
    };
    if (percipitationElement) {
        percipitationElement.innerText = firstDay.precipitation + "%";
        console.log(firstDay.precipitation);
    };
    if (humidityElement) {
        humidityElement.innerText = firstDay.humidity + "%";
        console.log(firstDay.humidity);
    };
    if (windElement) {
        windElement.innerText = firstDay.wind + "km/h";
        console.log(firstDay.wind);
    };
});
function changeLocation() {
    console.log('clicked');
};
    // days.forEach((day) => {
    //     const { temperature, date } = day;
    //     const dateFormat = new Date(date);

    //     const weekDay = document.createElement('div');
    //     weekDay.classList.add('card-right__week-day-text');
    //     weekDay.innerText = dateFormat.getDay();

    //     const weekTemperature = document.createElement('div');
    //     weekTemperature.classList.add('card-right__week-day-temperature');
    //     weekTemperature.innerText = temperature;
    //     const dayElement = document.createElement('div');
    //     dayElement.classList.add('card-right__week-day--unactive');
        dayElement.appendChild(weekDay);
        dayElement.appendChild(weekTemperature);

        weekDaysContainer.appendChild(dayElement);
    });
});


// fn1();

// function fn1 (arg1, arg2){

//     console.log('1');
// }x
// const fn2 = function(arg1, arg2) {
    //     console.log('2');
    // }
// const fn3 = (arg1, arg2) => {
//     console.log('3');
// }

// const fn4 = fn1;