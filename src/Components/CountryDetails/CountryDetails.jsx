import React from 'react'
import { Link, useParams } from 'react-router-dom';
import countriesData from '../../countries.json'


function CountryDetails() {
    const { alpha3Code } = useParams();
    const foundCountry = countriesData.find((oneCountry) => {
        return oneCountry.alpha3Code === alpha3Code;
      });

  return ( 
 <div key={foundCountry.alpha3Code} className="col-7">
            <h1>France</h1>
            {!foundCountry && <h1>No Country Found!</h1>}
            {foundCountry && (
                <>
              <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{foundCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {foundCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {foundCountry.borders.map((country) => {
                            return   <li><Link to={`/${country}`}>{country}</Link></li>
                        })}
                     
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>    
                </>
            )}
          </div>
  )
}

export default CountryDetails
