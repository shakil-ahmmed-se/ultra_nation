import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);
  const [country_add, setCountry_Add] = useState([]);
  useEffect(() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>{ 
      setCountries(data);
      // console.log(data);
      // const  names = data.map(country => country.name.common);
      // console.log(names);
      
    })
    .catch(error => console.log(error))
  },[]);

  const handleAddCountry = (country) => {
    const newCountry_add = [...country_add, country];
    setCountry_Add(newCountry_add)
  };
  
  return (
    <div className="App">
      <h1>Country Loaded: {countries.length}</h1>
      <h3>Country Added: {country_add.length}</h3>
      <ul>
        {
          countries.map(country => <Country country= {country} handleAddCountry ={handleAddCountry}  key={country.name.common}></Country>)  
        }
        
      </ul>
   
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
