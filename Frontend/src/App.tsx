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
import CadastroProd from './componentes/produtos/cadastroProd/CadastroProd';
import ListaProd from './componentes/produtos/listaProd/ListaProd';
import ListarCategoria from './componentes/categorias/listaCategoria/ListarCategoria';
import CadastroCategoria from './componentes/categorias/cadastroCategoria/CadastroCategoria';
import DeletarCategoria from './componentes/categorias/deletarCategoria/DeletarCategoria';
import DeletarProd from './componentes/produtos/deletarProd/DeletarProd';
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

            <Route exact path='/prod'>
              <ListaProd />
            </Route>
            <Route exact path='/categoria'>
              <ListarCategoria />
            </Route>

            <Route exact path='/formularioCategoria'>
              <CadastroCategoria />
            </Route>
            <Route exact path='/formularioCategoria/:id'>
              <CadastroCategoria />
            </Route>

            <Route exact path='/formularioprod'>
              <CadastroProd />
            </Route>

            <Route exact path='/formularioprod/:id'>
              <CadastroProd />
            </Route>

            <Route path='/deletarCategoria/:id'>
              <DeletarCategoria />
            </Route>
            <Route path='/deletarProduto/:id'>
            <DeletarProd />
          </Route>



          </div>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
