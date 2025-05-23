

function search(){
   const searchInput = document.getElementById("search-input");
   const searchbtn = document.getElementById("button-addon2");

   searchbtn.addEventListener('click',function(){

      const city = searchInput.value;

      if(!city == ''){
      async function getWeather() {

   const location = document.getElementById("location");
   const dateTime = document.getElementById("date");
   const temp = document.getElementById("temp");
   const wDescription = document.getElementById("w-description");
   const feelLike = document.getElementById("feels-like-temp");
   const uv = document.getElementById("uv");
   const wind = document.getElementById("wind");
   const humidity = document.getElementById("humidity");
   
   apiKey = "bb1c6b4470ea4f9d871110027250302"; // your actual key
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

   try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data);
      const todayDay = new Date().toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          });
      
      location.innerHTML = data.location.region;
      dateTime.innerHTML = todayDay;
      temp.innerHTML = Math.floor(data.current.temp_c);
      wDescription.innerHTML = data.current.condition.text;
      feelLike.innerHTML = Math.floor(data.current.feelslike_c);
      uv.innerHTML = Math.floor(data.current.uv);
      wind.innerHTML = Math.floor(data.current.wind_kph);
      humidity.innerHTML = Math.floor(data.current.humidity);
   } catch (error) {
      console.log(error)
   }
}
getWeather();
      }else{
         alert("Please enter valid city...")
      }
   
   })
}
search();
