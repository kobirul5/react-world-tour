import { useEffect } from 'react';
import { useState } from 'react'
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([])
    const [visitedCountryFlags, setVisitedCountryFlags] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handelVisitedCountry = country => {
        const newVisitedCountry = [...visitedCountry, country]
        setVisitedCountry(newVisitedCountry)
    }
    
    const handelVisitedCountryFlags = flags => setVisitedCountryFlags([...visitedCountryFlags, flags])


    return (
        <div>
            <h1>Countries:- {countries.length}</h1>
            <div>
                <h3>Visited Country:- {visitedCountry.length}</h3>
                <ul>
                    {
                        visitedCountry.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            {/* flags container */}
            <div className='flags-container-img'>
                {
                    visitedCountryFlags.map((flag, idx)=> <img key={idx} src={flag}></img>)
                }
            </div>
            {/* display country */}
            <div className='country-container'>
                {countries.map(country => <Country
                    key={country.cca3}
                    handelVisitedCountryFlags = {handelVisitedCountryFlags}
                    handelVisitedCountry={handelVisitedCountry}
                    country={country}></Country>)}
            </div>
        </div>
    );
};

export default Countries;
