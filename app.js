const weatherApi = {
    key: "2120cf41f9bc06717ccedc7e6543462f",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}

//firstly we will call an anonymous function after taking input
const searchInputBox = document.getElementById('input-box');

// Event Listener Function on keypress
searchInputBox.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }

});

// Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

// Show Weather Report
function showWeatherReport(weather){
    console.log(weather);  
    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp=document.getElementById('min-max');
    minMaxTemp.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.floor(weather.main.temp_max)}&deg;C (max)`;

    let weatherType=document.getElementById('weather');
    weatherType.innerText=`${weather.weather[0].main}`;

    let date=document.getElementById('date');
    let todayDate=new Date();
    date.innerText=dateManage(todayDate);

    if(weatherType.textContent=='Clear'){
        document.body.style.backgroundImage="url('images/clear.jpg')";
    }
    else if(weatherType.textContent=='Sunny'){
        document.body.style.backgroundImage="url('images/sunny.jpg')";
    }
    else if(weatherType.textContent=='Snow'){
        document.body.style.backgroundImage="url('images/snow.jpg')";
    }
    else if(weatherType.textContent=='Rain'){
        document.body.style.backgroundImage="url('images/rain.jpg')";
    }
    else if(weatherType.textContent=='Clouds'){
        document.body.style.backgroundImage="url('images/cloud.jpg')";
    }
    else if(weatherType.textContent == 'Thunderstorm') {
        document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
    } 
    else if(weatherType.textContent == 'Haze') {
        document.body.style.backgroundImage = "url('images/cloud.jpg')";
        
    } 
    else if(weatherType.textContent == 'Mist') {
        document.body.style.backgroundImage = "url('images/mist.jpg')";
        
    } 
    let weathericon=document.getElementById('temp-icon');
    weathericon.innerText=`${weather.weather[0].icon}`;
    
    if(weathericon.textContent =='01d')
    weathericon.src="icons/01d.png";
    else if(weathericon.textContent =='01n')
    weathericon.src="icons/01n.png";
    else if(weathericon.textContent =='02d')
    weathericon.src="icons/02dpng";
    else if(weathericon.textContent =='02n')
    weathericon.src="icons/02n.png";
    else if(weathericon.textContent =='03d')
    weathericon.src="icons/03d.png";
    else if(weathericon.textContent =='03n')
    weathericon.src="icons/03n.png";
    else if(weathericon.textContent =='04d')
    weathericon.src="icons/04d.png";
    else if(weathericon.textContent =='04n')
    weathericon.src="icons/04n.png";
    else if(weathericon.textContent =='09d')
    weathericon.src="icons/09d.png";
    else if(weathericon.textContent =='09n')
    weathericon.src="icons/09n.png";
    else if(weathericon.textContent =='10d')
    weathericon.src="icons/10d.png";
    else if(weathericon.textContent =='10n')
    weathericon.src="icons/10n.png";
    else if(weathericon.textContent =='11d')
    weathericon.src="icons/11d.png";
    else if(weathericon.textContent =='11n')
    weathericon.src="icons/11n.png";
    else if(weathericon.textContent =='13d')
    weathericon.src="icons/13d.png";
    else if(weathericon.textContent =='13n')
    weathericon.src="icons/13n.png";
    else if(weathericon.textContent =='50d')
    weathericon.src="icons/50d.png";
    else if(weathericon.textContent =='50n')
    weathericon.src="icons/50n.png";

}

//date manage 
function dateManage(dateArg){
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;


}