import React from 'react';
import Search from './weather2-search';
import Body from './weather4-body';

export default function Main() {
    const [selectedCity, setSelectedCity] = React.useState('');

    const handleSelectedCity = (cityUpdate) => {
        console.log(`City Update: ${cityUpdate}`);
        setSelectedCity(cityUpdate);
    }


    return (
        <div className="container p-5 bg-light">
            {/* <i className='text-danger fw-bold'>Main component</i> */}
            <h2 className='m-3'>My React Weather Application</h2>
            <Search cityChangeHandler={handleSelectedCity}/>
            <hr />
            <Body city={selectedCity}/>
        </div>
    );
}