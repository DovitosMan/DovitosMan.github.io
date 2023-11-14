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
    const daysNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const [currentLocation] = locations;
    const { name, country, days } = currentLocation;
    const dateElement = document.getElementById('date');
    const cityElement = document.getElementById('city');
    const countryElement = document.getElementById('country');
    const percipitationElement = document.getElementById('percipitation-percent');
    const humidityElement = document.getElementById('humidity-percent');
    const windElement = document.getElementById('wind-percent');
    const weekDay = document.getElementById('current-day');
    const weekTemperature = document.getElementById('current-temperature');
    const weekDaysContainer = document.querySelector('.card-right__widget');
    days.forEach(day => {
      const {temperature, date} = day;
      const dateFormat = new Date(date);
      if (day.id = 1){
        const dayElement = createDivElement('card-right__widget--active');
      } else {const dayElement = createDivElement('card-right__widget--unactive');}
      const weekDayEl = createDivElement('card-right__widget-text', daysNames[dateFormat.getDay()])
      const tempDayEl = createDivElement('card-right__widget-temperature', temperature + " °C");
      dayElement.append(weekDayEl);
      dayElement.append(tempDayEl);
      weekDaysContainer.append(dayElement);
      if (weekDay) {
          weekDay.innerText = daysNames[dateFormat.getDay()];
      };
      if (dateElement) {
          dateElement.innerText = daysNames[dateFormat.getDay()];
      }
      if (weekTemperature) {
        weekTemperature.innerText = temperature + "°C";
      };
      if (percipitationElement) {
        percipitationElement.innerText = days[0].precipitation + "%";
        console.log (days);
      };
      if (humidityElement) {
          humidityElement.innerText = days[0].humidity + "%";
      };
      if (windElement) {
          windElement.innerText = days[0].wind + "km/h";
      };
  });    
    if (cityElement) {
        cityElement.innerText = name + ", ";
    };
    if (countryElement) {
        countryElement.innerText = country;
    };
    
    const modalElement = this.document.getElementById('pop-up'); 

    if (modalElement) {
      document.querySelectorAll('.open-modal').forEach(button => {
        button.addEventListener('click', () => {
          modalElement.classList.remove('closed');
        })
      });
    }
    if (modalElement){
      document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click',()=>{
          modalElement.classList.add('closed');
        })
      })
    }
});


function createDivElement(className, innerText) {
  const element = document.createElement('div');
  element.classList.add(className);

  if (innerText) {
    element.innerText = innerText;
  }

  return element;
}