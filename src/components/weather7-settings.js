export default function Settings(props) {
    const handleTempUnitChange = (value) => {
        props.settingsChangeHandler({ tempCelsius: value })
    }
    const handleChange = (event) => {
        // console.log(event.target.value)
        const name = event.target.name;
        const value = event.target.checked;
        props.settingsChangeHandler({ [name]: value })
    }

    const celsius = props.settings['tempCelsius'];
    // console.log(celsius)
    return (
        <div className="card my-3 p-3 bg-info-subtle settingComp">
            {/* <i className='text-danger fw-bold'>Settings component</i> */}
            <div className="card-body">
                <h4>Settings</h4>
                <div className="form-check form-check-inline">
                    <input data-testid='tempUnit1' className="form-check-input" type="radio" name="tempCelsius" id='tempUnit1'
                        checked={celsius} onChange={() => handleTempUnitChange(true)} />
                    <label className="form-check-label" htmlFor="tempUnit1">
                        Celsius
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input data-testid='tempUnit2' className="form-check-input" type="radio" name="tempCelsius" id='tempUnit2'
                        checked={!celsius} onChange={() => handleTempUnitChange(false)} />
                    <label className="form-check-label" htmlFor="tempUnit2">
                        Fahrenheit
                    </label>
                </div>

                <CheckBox name='displayTemp' checked={props.settings['displayTemp']}
                    text='Temperature' handleChange={handleChange} />

                <CheckBox name='displayFeel' checked={props.settings['displayFeel']}
                    text='Feels like' handleChange={handleChange} />

                <CheckBox name='displayHumidity' checked={props.settings['displayHumidity']}
                    text='Humidity' handleChange={handleChange} />

                <CheckBox name='displayWind' checked={props.settings['displayWind']}
                    text='Wind Speed' handleChange={handleChange} />

                <CheckBox name='displayCloud' checked={props.settings['displayCloud']}
                    text='Cloudiness' handleChange={handleChange} />

                <CheckBox name='displayPrecipitation' checked={props.settings['displayPrecipitation']}
                    text='Precipitation' handleChange={handleChange} />

                <CheckBox name='displayIcon' checked={props.settings['displayIcon']}
                    text='Icon' handleChange={handleChange} />


            </div>
        </div>
    );
}

function CheckBox(props) {
    return (
        <div className="my-3">
            {/* <i className='text-danger fw-bold'>CheckBox component</i> */}
            <div className="form-check ">
                <input className="form-check-input" type="checkbox" id={props.name}
                    checked={props.checked} onChange={props.handleChange} name={props.name}
                />
                <label className="form-check-label" htmlFor={props.name}>
                    {props.text}
                </label>
            </div>
        </div >
    );
}
