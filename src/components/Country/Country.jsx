import { useState } from 'react';
import './Country.css'
const Country = ({country, handelVisitedCountry, handelVisitedCountryFlags}) => {
    const {name, flags, population, area, cca3} = country
    const [visited, setVisited] = useState(false)
    const handelVisitedBtn = () => {
        setVisited(!visited)
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h2 style={{color: visited? 'purple': 'black'}}>Name:- {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population:- {population}</p>
            <p>Area:- {area}</p>
            <p>Code:- {cca3}</p>
            <button onClick={()=>handelVisitedCountry(country)}>Mark as visited</button><br/> <br/>
            <button onClick={()=>handelVisitedCountryFlags(country.flags.png)}>Add Flag</button>
            <button onClick={handelVisitedBtn}>{visited? 'Visited': 'Going'}</button>
            <p>{visited? 'I have visited this country' : 'I want to go this country'}</p>
        </div>
    );
};

export default Country;