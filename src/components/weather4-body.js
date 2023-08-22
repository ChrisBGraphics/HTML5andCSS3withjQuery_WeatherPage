import React from 'react';
import WeatherItem from './weather5-weather-item';
import Settings from './weather7-settings';
import Graph from './weather6-graph';

export default function Body(props) {
    const [settings, setSettings] = React.useState({
        'tempCelsius': true,
        'displayTemp': true,
        'displayFeel': true,
        'displayWind': true,
        'displayIcon': true,
        'displayCloud': true,
        'displayHumidity': true,
        'displayPrecipitation': true
    });
    const [weatherObj, setWeatherObj] = React.useState(null);
    const [dayIndex, setDayIndex] = React.useState(0);

    React.useEffect(() => {
        // API docs https://openweathermap.org/forecast5
        const Weather_API_key = process.env.REACT_APP_WEATHER_API_KEY
        const url = 'https://api.openweathermap.org/data/2.5/forecast';
        let unit = settings.tempCelsius ? "metric" : "imperial";
        if(props.city)
        {
            let cityStr = props.city.replace(/\s+/g, '');
            console.log(`City Location: ${cityStr}`);
            // Read about Fetch API here: https://javascript.info/fetch
            fetch(`${url}?q=${cityStr}&appid=${Weather_API_key}&units=${unit}`)
                .then(response => {
                    if(response.status >= 400){
                        throw new Error("Server Error")
                    }
                    return response.json()})
                .then(data => {
                    console.log(data);
                    setWeatherObj(data);
                    console.log('API data came mounted')
                })
                .catch(error => {
                    alert(`City not found`, error );
                });
        }

    }, [settings.tempCelsius, props.city]);

    const handleSettingsChange = (settingsUpdate) => {
        console.log(settingsUpdate)
        setSettings(() => { return { ...settings, ...settingsUpdate } });
        // console.log(this.state)
    }

    const handleDayChange = (choice) => {
        setDayIndex(choice);
    }

    return (
        <div className="container p-3 bodyComp">
            {/* <i className='text-danger fw-bold'>Body component</i> */}
            {weatherObj &&
                <h4 data-testid='city'>{props.city}</h4>}
            <div className='row'>
                <div data-testid='weatherItem' className='col'>
                    {weatherObj && <WeatherItem data={weatherObj.list[dayIndex*8]} settings={settings}/>}
                </div>
                <div className='col'>
                    <Settings settings={settings} settingsChangeHandler={handleSettingsChange} />
                </div>
            </div>
            <div data-testid='graph' className='row'>
                {weatherObj && <Graph data={weatherObj} dayIndex={dayIndex} dayChangeHandler={handleDayChange}/>}
            </div>
        </div>
    );
}
