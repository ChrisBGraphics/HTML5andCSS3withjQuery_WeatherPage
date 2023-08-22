import React from "react";

const states = [
    { name: 'Alabama', abbrev: 'AL' },
    { name: 'Alaska', abbrev: 'AK' },
    { name: 'Arizona', abbrev: 'AZ' },
    { name: 'Arkansas', abbrev: 'AR' },
    { name: 'California', abbrev: 'CA' },
    { name: 'Colorado', abbrev: 'CO' },
    { name: 'Connecticut', abbrev: 'CT' },
    { name: 'Delaware', abbrev: 'DE' },
    { name: 'Florida', abbrev: 'FL' },
    { name: 'Georgia', abbrev: 'GA' },
    { name: 'Hawaii', abbrev: 'HI' },
    { name: 'Idaho', abbrev: 'ID' },
    { name: 'Illinois', abbrev: 'IL' },
    { name: 'Indiana', abbrev: 'IN' },
    { name: 'Iowa', abbrev: 'IA' },
    { name: 'Kansas', abbrev: 'KS' },
    { name: 'Kentucky', abbrev: 'KY' },
    { name: 'Louisiana', abbrev: 'LA' },
    { name: 'Maine', abbrev: 'ME' },
    { name: 'Maryland', abbrev: 'MD' },
    { name: 'Massachusetts', abbrev: 'MA' },
    { name: 'Michigan', abbrev: 'MI' },
    { name: 'Minnesota', abbrev: 'MN' },
    { name: 'Mississippi', abbrev: 'MS' },
    { name: 'Missouri', abbrev: 'MO' },
    { name: 'Montana', abbrev: 'MT' },
    { name: 'Nebraska', abbrev: 'NE' },
    { name: 'Nevada', abbrev: 'NV' },
    { name: 'New Hampshire', abbrev: 'NH' },
    { name: 'New Jersey', abbrev: 'NJ' },
    { name: 'New Mexico', abbrev: 'NM' },
    { name: 'New York', abbrev: 'NY' },
    { name: 'North Carolina', abbrev: 'NC' },
    { name: 'North Dakota', abbrev: 'ND' },
    { name: 'Ohio', abbrev: 'OH' },
    { name: 'Oklahoma', abbrev: 'OK' },
    { name: 'Oregon', abbrev: 'OR' },
    { name: 'Pennsylvania', abbrev: 'PA' },
    { name: 'Rhode Island', abbrev: 'RI' },
    { name: 'South Carolina', abbrev: 'SC' },
    { name: 'South Dakota', abbrev: 'SD' },
    { name: 'Tennessee', abbrev: 'TN' },
    { name: 'Texas', abbrev: 'TX' },
    { name: 'Utah', abbrev: 'UT' },
    { name: 'Vermont', abbrev: 'VT' },
    { name: 'Virginia', abbrev: 'VA' },
    { name: 'Washington', abbrev: 'WA' },
    { name: 'West Virginia', abbrev: 'WV' },
    { name: 'Wisconsin', abbrev: 'WI' },
    { name: 'Wyoming', abbrev: 'WY' }
];

const stateMap = new Map(states.map((obj) => [obj.name, obj.abbrev]));


export default function Select(props) {
    const [userInput, setUserInput] = React.useState('');
    // const [selectedValue, setSelectedValue] = React.useState(null);

    const handleChange = (event) => {
        // console.log(event.target);
        console.log(`Switch to ${event.target.value}`)
        setUserInput(event.target.value);
    }

    const handleSubmit = (event) => {
        console.log('The form submitted with input: ' + userInput);
        if(userInput){
            props.cityHandler(userInput);
        }

        event.preventDefault(); // Prevent default form submission behavior 
    }

    const cities = props.data;
    const cityCode = (state) => {
        return stateMap.get(state);
    }

    const options = cities.map((city, index) =>
    <option data-testid='select-option' key={city.country + index} value={`${city.name}, ${city.country === 'US' ? cityCode(city.state) + ", " : ""}${city.country}`}>
        {city.name},
        {city.state &&
            <span> {city.state},</span> //Will display a warning for <span> cannot appears as a child of <option>
        } {city.country}</option>
    );



    return (
        <div className="container p-3 selectComp">
            {/* <i className='text-danger fw-bold'>Select component</i> */}
            <form onSubmit={handleSubmit} className=' row g-3'>
                <label className="col-sm col-form-label">
                    Choose your country:</label>
                    <select data-testid='select' value={userInput} onChange={handleChange}
                    className='form-select col-md'>
                    <option value="">--Select city--</option>
                    {options}
                </select>
                <div className="col-sm col-form-label">
                    <input type="submit" value="Submit" className="btn btn-primary mb-3" />
                </div>
            </form>

            {
                userInput &&
                <div> You selected {userInput} </div>
            }
        </div>
    );
}
