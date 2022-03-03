import './App.css';
import Navbar from './Components/Navbar/Navbar';
import CountriesList from './Components/CountriesList/CountriesList';
import CountryDetails from './Components/CountryDetails/CountryDetails';
// import countriesData from './countries.json'
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [getCountries, setGetCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setGetCountries(response.data)
      })
      .catch((err) => {
        console.log(err);
      })
  },[])
  return (
    <div className="App">
  <Navbar />
  <div className="container">
    <div className="row">
      <CountriesList countries={getCountries} />
      <Routes>
        <Route path="/:alpha3Code" element={<CountryDetails countries={getCountries}/>} />
      </Routes>
    </div>
  </div>
</div>

  );
}

export default App;
