const apiKey = "c40e088a7ce41a5d631379cdd1231ecd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const input = document.getElementById("input");
const button = document.querySelector("button");
const icon = document.querySelector("#icon");

async function getWeather() {
    let city = input.value;
    console.log (city);
    const result = await fetch(apiUrl+city+`&units=metric&appid=${apiKey}`);
    var data = await result.json();
    console.log(data);

    if(result.status == 404){
        document.getElementById("city").innerHTML = " ";
        input.value= " ";
        alert("Invalid city name");
    }

    document.getElementById("city").innerHTML = data.name;
    document.getElementById("celsius").innerHTML = Math.round(data.main.temp) + "°C";
    document.getElementById("percentage").innerHTML = data.main.humidity + "%";
    document.getElementById("speed").innerHTML = data.wind.speed + "km/hr";
    input.value= " ";

    if (data.weather[0].main==="Clouds"){
        icon.src = "images/cloudy.png";
    }
    else if (data.weather[0].main==="Clear"){
        icon.src = "images/sunny.png";
    }
    else if (data.weather[0].main==="Rain"){
        icon.src = "images/heavy rain.png";
    }
    else if (data.weather[0].main==="Drizzle"){
        icon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main==="Snow"){
        icon.src = "images/snow.png";
    }
    else {
        icon.src = "images/cloudy.png";
    }

 }

 button.addEventListener("click",getWeather);

 