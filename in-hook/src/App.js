import { useState, useEffect } from 'react';
import Accordion from './Accordion';
import './App.css';
import Pagination from './Pagination';

function App() {

  const [countries, setCountries] = useState([]);
  const contriesPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(()=>{
      fetch('https://countriesnow.space/api/v0.1/countries/capital')
      .then((res)=>res.json())
      .then((res)=>{
          console.log(res.data);
          setCountries(res.data)
      })
  },[])

  const lastCountriesIndex = currentPage * contriesPerPage;
  const firstCountriesIndex = lastCountriesIndex - contriesPerPage;
  const currentCountries = countries.slice(firstCountriesIndex, lastCountriesIndex)

  return (
    <div className="App">
      {currentCountries.map((value, index)=> {
        return (
          <Accordion name={value.name} capital={value.capital} index={index} />
        )
      })}
      <Pagination totalCountries={countries.length} contriesPerPage={contriesPerPage} paginate={(value)=> setCurrentPage(value)}/>
    </div>
  );
}

export default App;
