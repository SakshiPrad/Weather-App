
const weatherApiKey = "1d7ab0d12a4ebfdc90d94a3ddc4b6180";

async function Weather(){
    let city = document.getElementById("cityName").value ;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric` ;
    const response = await fetch(apiUrl + `&appid=${weatherApiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        
        var data = await response.json();

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+`°C`;
        document.querySelector(".city").innerHTML = city
        document.querySelector(".humidity").innerHTML = data.main.humidity + `%`
        document.querySelector(".wind").innerHTML = data.wind.speed + ` km/h`

        const weatherIcon = document.querySelector('.weather-icon')
        if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "images/mist.png"
        }
        else if(data.weather[0].main == "Snow"){
                weatherIcon.src = "images/snow.png"
        }
        
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        }
    
    console.log(data);
}

