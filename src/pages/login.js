import { React, useState, useRef, useEffect } from 'react';
import '../sass/home.scss'
import uuid from 'react-uuid' 

import { useCookies } from 'react-cookie';

import {getUser} from '../graphql/usuario'
import { Redirect } from 'react-router-dom';


export default function Login(){
    const [cookies, setCookie, removeCookie] = useCookies();
    
    const [load, setLoad] = useState(false)

    const vallogin = useRef();
    const valsenha = useRef();

    async function LoginVer(){
        

        let userLogin = vallogin.current.value
        let userSenha = valsenha.current.value

        function verificaLogin (response){
            if(response.tbUsers.length > 0){
                setCookie('user', response.tbUsers[0] , {path: '/'})
                console.log(cookies.user)
            }
            else{
                alert("Cadastro não encontrado")
            } 
        }
        
        verificaLogin(await getUser({userLogin, userSenha}))
        setLoad(true)
    }


    

    if(load === false){

        return(
            <main>
                <div className="tela">
                    <h3>Login</h3>
                    <div className="container">
                        <div className="formTarefa">    
                            <input type="text" placeholder="Login" ref={vallogin}/>
                            <input type="password" placeholder="Senha" ref={valsenha}/>
                            <button onClick={() => {LoginVer()}}>Enviar</button>
                        </div>
                    </div>
                </div>
            </main>

        )

    }else{
        return(
            <Redirect to='/home'/>
        )

    }

}

