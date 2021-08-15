import { React, useState, useRef, useEffect } from 'react';
import '../sass/home.scss'
import uuid from 'react-uuid' 

import { useCookies } from 'react-cookie';

import {cadastroUser} from '../graphql/usuario'
import { Redirect } from 'react-router-dom';


export default function Registro(){

    const[load, setLoad] = useState(false)
    const [cookies, setCookie] = useCookies();
    
    const valnome = useRef();
    const vallogin = useRef();
    const valsenha = useRef();

    
    async function LoginVer(){
        
        let content={
            userName:valnome.current.value,
            userLogin:vallogin.current.value,
            userSenha:valsenha.current.value,
            idUser:uuid()
        }

        await cadastroUser(content)
        setLoad(true)
 
    }


    

    if(load === false){

        return(
            <main>
                <div className="tela">
                    <h3>Registro</h3>
                    <div className="container">
                        <div className="formTarefa">    
                            <input type="text" placeholder="Nome" ref={valnome}/>
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
            <Redirect to='/login'/>
        )

    }

}

