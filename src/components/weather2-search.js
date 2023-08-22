// Use this API to search for cities:
// https://openweathermap.org/api/geocoding-api
import React from 'react';
import Select from './weather3-select';

export default function Search(props) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  const handleChange = (event) => {
    // Get the input from the user and save it in a state variable
    // event.target is the input element
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log("The form submitted with input: " + searchTerm);
    fetchCities();
    event.preventDefault(); // Prevent default form submission behavior
  };
  
  function fetchCities() {
    const Weather_API_key = process.env.REACT_APP_WEATHER_API_KEY
    const url = 'http://api.openweathermap.org/geo/1.0/direct';

    console.log(`Fetch city: ${searchTerm}`);
    if(searchTerm){
      fetch(`${url}?q=${searchTerm}&limit=5&appid=${Weather_API_key}`)
      .then(response => {
        if(response.status >= 400){
            throw new Error("Server Errror")
        }
        return response.json()})
      .then(data => {
          console.log(data);
          setSearchResults(data);
          console.log('API data came mounted')
      });
    }


  }


  return (
    <div className="container p-3 searchComp">
      {/* <i className="text-danger fw-bold">Search component</i> */}
      <form onSubmit={handleSubmit} className="my-3 row g-3">
        <label className="col-sm-4 col-form-label">
          Please enter city name:
        </label>
        <div className="col-sm-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="col-sm-4">
          <button type="submit" value="Search" className="btn btn-primary mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
      </form>
      <Select data={searchResults} cityHandler={props.cityChangeHandler}/>
    </div>
  );
}
