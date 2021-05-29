import React from 'react'
import Search from './Components/Searchbar/Search'
import './App.scss'
import Catalogue from './Components/Catalogue/Catalogue'
function App() {
  return (
    <div className="container-main full-width column">
      <div>
      <Search/>
      </div>
      <div className="container-results">
        <Catalogue />
      </div>
    </div>
  );
}

export default App;
