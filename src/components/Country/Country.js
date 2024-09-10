import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, population, flags, region} = props.country;
    return (
        <div className='country_container'>
        <h2>{name.common}</h2>
        <img src={flags.png} alt="" />
        <p>Population:{population}</p>
        <p>Region: {region}</p>
        <button onClick={() => props.handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;