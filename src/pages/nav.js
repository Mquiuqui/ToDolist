import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import { Redirect } from 'react-router-dom';
import { Cookies, useCookies } from 'react-cookie'
import '../sass/nav.scss'

export default function Nav() {
  const [cookies, setCookie,removeCookie] = useCookies()

  function Sair(){
    removeCookie("user")
    console.log("teste")
  }
  
  
  var data = cookies.user;
  console.log(data)

  if(data === undefined){
    return (
      <div className="nav">
        <div className="user">
            
        <Link className="link" to="/registro">Registro</Link>
        <Link className="link" to="/login">Login</Link>
      </div>
    </div>
    )
  }else{
    return (

      <div className="nav">
              
        <Link className="link" to="/home">Home</Link>
          
          <Link className="link" to="/home/tarefas">Tarefas</Link>
          <Link className="link" to="/home/concluidas">Concluidas</Link>
          <Link className="link" to="/home/users">Usuário</Link>
  
          <div className="user">
          
          <Link className="link" to="/" onClick={()=>Sair()}>Sair</Link>
          
          </div>
  
        </div>
    );    
  }


}
