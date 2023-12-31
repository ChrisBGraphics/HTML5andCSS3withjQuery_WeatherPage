import React from 'react'
import { render, fireEvent, waitFor, screen, getAllByTestId } from '@testing-library/react'
import '@testing-library/jest-dom'
import Select from './weather3-select'

beforeAll(() => { })
afterEach(() => { })
afterAll(() => { })

const searchResults = [
    {
        "name": "London",
        "local_names": {
            "af": "Londen",
            "ar": "لندن",
            "ascii": "London",
            "az": "London",
            "bg": "Лондон",
            "ca": "Londres",
            "da": "London",
            "de": "London",
            "el": "Λονδίνο",
            "en": "London",
            "eu": "Londres",
            "fa": "لندن",
            "feature_name": "London",
            "fi": "Lontoo",
            "fr": "Londres",
            "gl": "Londres",
            "he": "לונדון",
            "hi": "लंदन",
            "hr": "London",
            "hu": "London",
            "id": "London",
            "it": "Londra",
            "ja": "ロンドン",
            "la": "Londinium",
            "lt": "Londonas",
            "mk": "Лондон",
            "nl": "Londen",
            "no": "London",
            "pl": "Londyn",
            "pt": "Londres",
            "ro": "Londra",
            "ru": "Лондон",
            "sk": "Londýn",
            "sl": "London",
            "sr": "Лондон",
            "th": "ลอนดอน",
            "tr": "Londra",
            "vi": "Luân Đôn",
            "zu": "ILondon"
        },
        "lat": 51.5085,
        "lon": -0.1257,
        "country": "GB"
    },
    {
        "name": "London",
        "local_names": {
            "ar": "لندن",
            "ascii": "London",
            "bg": "Лондон",
            "de": "London",
            "en": "London",
            "fa": "لندن، انتاریو",
            "feature_name": "London",
            "fi": "London",
            "fr": "London",
            "he": "לונדון",
            "ja": "ロンドン",
            "lt": "Londonas",
            "nl": "London",
            "pl": "London",
            "pt": "London",
            "ru": "Лондон",
            "sr": "Лондон"
        },
        "lat": 42.9834,
        "lon": -81.233,
        "country": "CA"
    },
    {
        "name": "London",
        "local_names": {
            "ar": "لندن",
            "ascii": "London",
            "en": "London",
            "fa": "لندن، اوهایو",
            "feature_name": "London",
            "sr": "Ландон"
        },
        "lat": 39.8865,
        "lon": -83.4483,
        "country": "US",
        "state": "OH"
    },
    {
        "name": "London",
        "local_names": {
            "ar": "لندن",
            "ascii": "London",
            "en": "London",
            "fa": "لندن، کنتاکی",
            "feature_name": "London",
            "sr": "Ландон"
        },
        "lat": 37.129,
        "lon": -84.0833,
        "country": "US",
        "state": "KY"
    },
    {
        "name": "London",
        "local_names": {
            "ascii": "London",
            "ca": "Londres",
            "en": "London",
            "feature_name": "London"
        },
        "lat": 36.4761,
        "lon": -119.4432,
        "country": "US",
        "state": "CA"
    }
];

const cityHandler = jest.fn();

test('Load 5 cities', async () => {
    render(<Select data={searchResults} cityHandler={cityHandler}/>)

    expect(screen.getByTestId('select').length).toBe(5);

});

test('Select different cities', async () => {
    render(<Select data={searchResults} cityHandler={cityHandler}/>)

    fireEvent.change(screen.getByTestId('select'), {target: {value: 'London, GB'}})
    expect(screen.getByRole('option', {name: 'London, GB'}).selected).toBe(true);

    fireEvent.change(screen.getByTestId('select'), {target: {value: 'London, CA, US'}})
    expect(screen.getByRole('option', {name: 'London, CA, US'}).selected).toBe(true);

});