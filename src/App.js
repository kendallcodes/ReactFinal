import React, { useState } from 'react'; 
import AddCity from './components/AddCity';
import Search from './components/Search';
import './App.css';
import HeaderLink from './components/Header';
import Home from './components/Home';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import SearchCities from './components/SearchCities';
import CitiesList from './components/CitiesList';
import Cities from './components/Cities';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

const [cities, setCities] = useState(JSON.parse(localStorage.getItem('citieslist')));

const [newCity, setNewCity] = useState('')
const [search, setSearch] = useState(''); 

const setAndSaveCities = (newCities) => { 
  setCities(newCities);
  localStorage.setItem('citieslist', JSON.stringify(newCities));
}

const addCity = (city) => { 
  const id = cities.length ? cities[cities.length - 1].id + 1 : 1;
  const myNewCity = { id, checked: false, city};
  const listedCities = [...cities, myNewCity]; 
  setAndSaveCities(listedCities);
}

const handleCheck = (id) => { 
  const listedCities = cities.map((city) => city.id === id ? { ...city, checked: !city.checked} : city);
  setAndSaveCities(listedCities);
}
 
const handleDelete = (id) => { 
  const listedCities = cities.filter((city) => city.id !== id); 
  setCities(listedCities);
  localStorage.setItem('citieslist', JSON.stringify(listedCities));
}

const handleSubmit = (e) => { 
  e.preventDefault(); 
  if(!newCity) return;
  addCity(newCity);
  setNewCity("");
}


  
        return (
          <div className="App"> 
          
          <Router>
            <Route path='/:page' component={Header} />
            <Route exact path='/' component={Header} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/addCity' component={AddCity} />
            <Route exact path='/cities' component={Cities} />
          </Router>
        
       
         
          <AddCity
          newCity={newCity}
          setNewCity={setNewCity}
          handleSubmit={handleSubmit} />
          <Content 
          cities={cities.filter(city => ((city.city).toLowerCase()).includes(search.toLowerCase()))} 
          handleCheck={handleCheck}
          handleDelete={handleDelete}/>
          <Footer length={cities.length} />
         
          </div>
           
            
        )
        
    };

  
export default App;
