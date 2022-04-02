import React from "react";
// import Button from "react-bootstrap/Button";
import Campsites from './Campsites/Campsites.jsx'

import Individualsite from './Campsites/Individualsite.jsx'
import { Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div>
        <Routes>
          <Route exact path='/' element={<Campsites />} />
          <Route exact path='/:id' element ={<Individualsite />}/>
        </Routes>
    </div>
  );
}


export default App;
