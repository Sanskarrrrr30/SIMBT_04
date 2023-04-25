// const url =  'https://api.openweathermap.org/data/2.5/weather?q=London&appid={API_key}' 
const API_key = "ce7c2b6af654b6ad61d7a95e2c39591b";
// const IMG = "https://openweathermap.org/img/wn/10d@2x.png"
const form = document.querySelector("form");
const weather = document.querySelector(".weather");
const search = document.querySelector("input");
const submit = document.querySelector("button");

const GET =  async(city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
    const res  = await fetch(url);
     console.log(res);
     const getdata = await res.json();
     console.log(getdata);
     return displaydata(getdata);
}

const displaydata = (getdata) =>{
weather.innerHTML = `      

                         <div class="img">
                          <img src=" https://openweathermap.org/img/wn/${getdata.weather[0].icon}@2x.png" alt="">
                          </div>
                          <div class="feels">
                          ${getdata.weather[0].description}
                          </div>
                          <div id="Temp">
                          Temp -
                          ${getdata.main.temp} ° C
                          </div> 
                          <div class = wind>
                          Wind Speed - ${getdata.wind.speed} meter/sec
                          </div>`}
                 


form.addEventListener(
    "submit",
    function(event){
        GET(search.value);
          event.preventDefault();
          
    }
)

