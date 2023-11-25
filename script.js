let submitBtn = document.querySelector('.submitBtn');
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let date = new Date();
let today = `${months[date.getMonth()]}`;
console.log(date.getUTCFullYear())
console.log(today);

async function getWeather(city) {
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0f2d99b0ba5f9b1b176aabd3634d0b32`);
    let data = await res.json();
    console.log(data.weather[0].description);
}

let  promise = new  Promise()



submitBtn.addEventListener('click', () => {
    let userName = document.getElementById("userName").value; 
    let location = document.getElementById("location").value;
    let userInfo  = document.querySelector('.userInfo')
    let weatherInfo = document.querySelector('.weatherInfo');
    weatherInfo.textContent = "Welcome to  " + location;
    userInfo.textContent = "Welcome Oh! you " + userName;
    

 
})