import { useEffect, useState } from "react";

function Weather() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [currWeather, setCurrWeather] = useState("Loading...");
  const APIkey = process.env.REACT_APP_APIKEY;

  function success(location) {
    setLat(location.coords.latitude);
    setLon(location.coords.longitude);
  }

  function error(error) {
    console.log(error);
  }

  navigator.geolocation.getCurrentPosition(success, error);

  useEffect(() => {
    async function getWeather() {
      // if (lat) {
      //   const response = await fetch(
      //     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`
      //   );
      //   if (response.ok) {
      //     const json = await response.json();
      //     console.log(json);
      //     setCurrWeather(
      //       `${json.weather[0].main}, ${Math.floor(json.main.temp - 273.15)}℃`
      //     );
      //   }
      // }
    }

    getWeather();
  }, [lat, lon, APIkey]);

  return <div>{currWeather}</div>;
}

export default Weather;
