export default function WeatherItem({ data, settings }) {
  const date = new Date(data.dt * 1000);
  const dt = data && date.toLocaleTimeString();
  const day = data && date.toLocaleDateString('en-us', {month:"long", day:"numeric"});
  console.log(day)
  const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const weatherDesc = data.weather[0].main + ", " + data.weather[0].description;
  const unitDisplay = settings.tempCelsius ? "C" : "F";
  const speed = settings.tempCelsius ? " m/s" : " mph";

  return (
    <div className="container p-3 weatherComp">
      {/* <i className="text-danger fw-bold">Weather Item component</i> */}
      {data && (
        <ul>
        <h4>{day}</h4>
        {settings.displayIcon &&
          <figure>
            <img id="weatherIcon" src={icon} alt={weatherDesc} width="200" />
            <figcaption id="weatherDesc">{weatherDesc}</figcaption>
          </figure>}
          {settings.displayTemp && <li data-testid='temp'>Temperature: {data.main.temp}<span>&#176;</span>{unitDisplay}</li>}
          {settings.displayFeel && <li data-testid='feels'>Feels Like: {data.main.feels_like}<span>&#176;</span>{unitDisplay}</li>}
          {settings.displayHumidity && <li>Humidity: {data.main.humidity}%</li>}
          {settings.displayWind && <li data-testid='wind'>Wind Speed: {data.wind.speed}{speed}</li>}
          {settings.displayCloud && <li>Cloudiness: {data.clouds.all}%</li>}
          {settings.displayPrecipitation && <li>Precipitation: {data.pop}%</li>}


        </ul>
      )}
    </div>
  );
}
