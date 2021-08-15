import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './sass/app.scss'

import TarefasConcluidas from './pages/concluidas'
import Nav from "./pages/nav";
import Home from "./pages/home";
import Users from "./pages/users";
import Tarefas from "./pages/tarefas";
import Login from "./pages/login";
import Registro from "./pages/registro";
import PrivateRoute from "./pages/privater";

export default function App() {
  return (
  <main>
    <Router>
      <Nav/>
        <Switch>
            <Route path="/home/concluidas">
              <TarefasConcluidas />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/registro">
              <Registro />
            </Route>
            <Route path="/home/tarefas">
              <Tarefas />
            </Route>
            <Route path="/home/users">
              <Users />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
        </Switch>
    </Router>
  </main>  

  );
}


