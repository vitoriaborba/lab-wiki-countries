import './App.css';
import Navbar from './Components/Navbar/Navbar';
import CountriesList from './Components/CountriesList/CountriesList';
import CountryDetails from './Components/CountryDetails/CountryDetails';
import countriesData from './countries.json'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  <Navbar />
  <div className="container">
    <div className="row">
      <CountriesList countries={countriesData} />
      <Routes>
        <Route path="/:alpha3Code" element={<CountryDetails />} />
      </Routes>
    </div>
  </div>
</div>

  );
}

export default App;
