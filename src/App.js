import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Custom components
import CustomFooter from './components/CustomFooter';
import NormalHeader from './components/NormalHeader';

//Scenes
import Home from './components/Scenes/Home';
import AboutUs from './components/Scenes/AboutUs';
import NotFound from './components/Scenes/NotFound';

function App() {

  const [ search, setSearch ] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
        <NormalHeader search={e => { setSearch(e.target.value) } }/>
        <div style={{width: '100%'}}>
          <Switch>

            {/* Se pasan los props en el método render de la ruta */}
            <Route
              exact path="/"
              render={ () => (
                <Home 
                  search={ search }
                />
              )}
            />             
            <Route exact path="/aboutUs" component={ AboutUs }/>
            <Route component={ NotFound }/>
          </Switch>
        </div>
        <CustomFooter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
