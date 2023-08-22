import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import WeatherItem from './weather5-weather-item'

beforeAll(() => { })
afterEach(() => { })
afterAll(() => { })

test('Load weather item', async () => {
    const data = {
        dt: 45641621,
        weather: [
            {
                weather: "light rain",
                icon: "10d",
                id: 500,
                main: "Rain"
            }
        ],
        main: { temp: 20, feels_like: 22 },
        wind: { speed: 10 }
    }

    const settings = {
        'tempCelsius': true,
        'displayTemp': true,
        'displayFeel': true,
        'displayWind': true,
        'displayIcon': true,
        'displayHumidity': true
    }

    //Act
    render(<WeatherItem data={data} settings={settings} />)

    expect(screen.getByTestId('temp')).toBeInTheDocument()
    expect(screen.getByTestId('temp')).toHaveTextContent('Temperature: 20°C')

    expect(screen.getByTestId('feels')).toBeInTheDocument()
    expect(screen.getByTestId('feels')).toHaveTextContent('Feels Like: 22°C')

    expect(screen.getByTestId('wind')).toBeInTheDocument()
    expect(screen.getByTestId('wind')).toHaveTextContent('Wind Speed: 10 m/s')
})

test('Load weather item in Fahrenheit', async () => {
    const data = {
        dt: 45641621,
        weather: [
            {
                weather: "light rain",
                icon: "10d",
                id: 500,
                main: "Rain"
            }
        ],
        main: { temp: 68, feels_like: 70 },
        wind: { speed: 7 }
    }

    const settings = {
        'tempCelsius': false,
        'displayTemp': true,
        'displayFeel': true,
        'displayWind': true,
        'displayIcon': true,
        'displayHumidity': true
    }

    //Act
    render(<WeatherItem data={data} settings={settings} />)

    expect(screen.getByTestId('temp')).toHaveTextContent('Temperature: 68°F')

    expect(screen.getByTestId('feels')).toHaveTextContent('Feels Like: 70°F')

    expect(screen.getByTestId('wind')).toHaveTextContent('Wind Speed: 7 mph')
})


