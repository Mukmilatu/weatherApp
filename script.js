let submitBtn = document.querySelector('.submitBtn');
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let date = new Date();
let today = `${months[date.getMonth()]}`;
console.log(date.getUTCFullYear())
console.log(today);

async function getWeather(userName, city) {
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0f2d99b0ba5f9b1b176aabd3634d0b32`);
    let data = await res.json();
    
    document.getElementById('weatherInfo').textContent = data.weather[0].main +  " " + Math.round(data.main.temp) + "°C";
    let temp =  document.createElement('p').textContent;
    temp =  data.weather[0].description;
    document.querySelector('.weatherInfo').append(temp)
    // hum = data.weather[0].main;

    document.getElementById('userInfo').textContent= "Welcome! " + userName;
    

   console.log(data)
}

// let  promise = new  Promise()

getWeather('Mukmilat', 'Lagos')

submitBtn.addEventListener('click', () => {
    
    let userName = document.getElementById('userName').value; 
    let location = document.getElementById('location').value; 
    getWeather(userName, location)
    

 
})