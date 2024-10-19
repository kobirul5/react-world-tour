import { useEffect } from 'react';
import { useState } from 'react'
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handelVisitedCountry = country => {
        console.log(country)
        const newVisitedCountry = [...visitedCountry, country]
        setVisitedCountry(newVisitedCountry)
        
    }

    return (
        <div>
            <h1>Countries:- {countries.length}</h1>
            <div>
                <h3>Visited Country:- {visitedCountry.length}</h3>
                <ul>
                    {visitedCountry.map(country=> <li key={country.cca3}>{country.name.common}</li>)}
                </ul>
            </div>
            <div className='country-container'>
                {countries.map(country => <Country 
                key={country.cca3} 
                handelVisitedCountry = {handelVisitedCountry}
                country={country}></Country>)}
            </div>
        </div>
    );
};

export default Countries;