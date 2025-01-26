let url = "https://api.weatherapi.com/v1/forecast.json?key=574f7dc6c34c4e6ab0393349252401&q="

let input = document.querySelector("#search-text");
let search = document.querySelector("#searchbtn");
async function getInfo(link){
    try {
        let res =await axios.get(link);
        console.log(res);
        return res;
    } catch (e) {
        console.log(e);
    }
}
search.addEventListener("click" ,async ()=>{
    let link=url+input.value+"&days=1&aqi=yes&alerts=no";
    let res= await getInfo(link);
    // let location = res.data.location;
    // let details = res.data.current;
    document.querySelector("#writen-location").innerText = res.data.location.name+", "+res.data.location.region+", "+res.data.location.country;
    document.querySelector("#written-temp").innerHTML = res.data.current.temp_c+"&deg;";
    document.querySelector("#Wheather-logo").src="https:"+res.data.current.condition.icon;
    document.querySelector("#timezone").innerHTML="Timezone: "+ res.data.location.tz_id ; 
    document.querySelector("#feeltemp").innerHTML="Temprature Feels like : "+ res.data.current.feelslike_c +" &deg;";
    // lower fills
    document.querySelector("#feelsLike").innerHTML = res.data.current.feelslike_c + " &deg;";
    document.querySelector("#wind").innerHTML = res.data.current.wind_kph + " Km/h";
    document.querySelector("#visibility").innerHTML = res.data.current.vis_km + " Km";
    document.querySelector("#humidity").innerHTML = res.data.current.humidity;
    document.querySelector("#uv").innerHTML = res.data.current.uv ;
    document.querySelector("#airPressure").innerHTML = res.data.current.pressure_mb;
    // console.dir(res.data.forecast.forecastday[0]);
    document.querySelector("#sunrise").innerHTML = res.data.forecast.forecastday[0].astro.sunrise;
    document.querySelector("#sunset").innerHTML = res.data.forecast.forecastday[0].astro.sunset;
    document.querySelector("#moonrise").innerHTML = res.data.forecast.forecastday[0].astro.moonrise;
    document.querySelector("#moonset").innerHTML = res.data.forecast.forecastday[0].astro.moonset;
});
let detailsbtn = document.querySelector("#detailsbtn");
let astrobtn = document.querySelector("#astrobtn");
astrobtn.addEventListener("click", ()=>{
    document.querySelector("#astro-container").style.display = "flex";
    document.querySelector("#details-container").style.display = "none";
});
detailsbtn.addEventListener("click", ()=>{
    document.querySelector("#astro-container").style.display = "none";
    document.querySelector("#details-container").style.display = "flex";
});