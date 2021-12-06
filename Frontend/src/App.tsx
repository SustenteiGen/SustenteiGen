import React from 'react';
import './App.css';
import Navbar from './componentes/estatico/navbar/Navbar';
import Navbarr from './componentes/estatico/segnavbar/Navbarr';
import Footer from './componentes/estatico/footer/Footer';
import Home from './paginas/home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sobre from './paginas/sobre/Sobre';
import CadastroUsuario from './paginas/cadastro/CadastroUsuario';
import Login from './paginas/login/Login';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Navbarr />
        <Switch>
          <div>
          <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/home'>
              <Home />
            </Route>

            <Route path='/sobre'>
              <Sobre />
            </Route>
            
            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/cadastro'>
              <CadastroUsuario />
            </Route>

          </div>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
