import { useEffect, useState } from "react";

function Weather() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [currWeather, setCurrWeather] =
    useState("창 밖으로 손 내밀어보는 중...");
  const [url, setUrl] = useState("");
  const APIkey = process.env.REACT_APP_APIKEY;

  function success(location) {
    setLat(location.coords.latitude);
    setLon(location.coords.longitude);
  }

  function error(error) {
    console.log(error);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);

    async function getWeather() {
      if (lat) {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`
        );
        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setUrl(
            `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`
          );
          setCurrWeather(`  ${Math.floor(json.main.temp - 273.15)}℃`);
        }
      }
    }

    getWeather();
  }, [lat, lon, APIkey]);

  return (
    <>
      {!url ? "" : <img id="wicon" src={url} alt="Weather icon" />}
      {currWeather}
    </>
  );
}

export default Weather;
