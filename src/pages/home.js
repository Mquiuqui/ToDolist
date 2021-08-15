import { React, useState, useRef, useEffect } from 'react';
import '../sass/home.scss'
import uuid from 'react-uuid' 

import { useCookies } from 'react-cookie'

import {cadastroTarefa} from '../graphql/usuario'


export default function Home(){
    const [cookies, setCookie, remove]= useCookies()
    const[load, setLoad] = useState(false)

    const tarefaCont = useRef()
    const tarefaTitu = useRef()
    const tarefaData = useRef()
    
    async function CadTarefa(){
        setLoad(true)

        let content={
            idUser: cookies.user.idUser,
            titulo:tarefaTitu.current.value,
            tarefa:tarefaCont.current.value,
            idTarefa:uuid(),
            data:tarefaData.current.value,
            estadoTarefa:true

        }

        console.log(content)
        await cadastroTarefa(content)
        setLoad(false)
    }


    

if(load === false){

    return(
        <main>
            <div className="tela">
                <h3>Cadastre suas Tarefas</h3>
                <div className="container">
                    <div className="formTarefa">    
                        <input type="text" maxLength="30" placeholder="Titulo da Tarefa" ref={tarefaTitu}/>
                        <input type="text" maxLength="30" placeholder="Descrição da tarefa" ref={tarefaCont}/>
                        <input type="date" ref={tarefaData}/>
                        <button onClick={() => {CadTarefa()
                                                }}>Enviar</button>
                    </div>
                </div>
            </div>
        </main>

    )

}else{

    
    return(
        <main>
            <div className="tela">
                <h3>Cadastre suas Tarefas</h3>
                <div className="container">
                    <div className="formTarefa">    
                        <input type="text" maxLength="30" placeholder="Titulo da Tarefa" ref={tarefaTitu}/>
                        <input type="text" maxLength="30" placeholder="Descrição da tarefa" ref={tarefaCont}/>
                        <input type="date" ref={tarefaData}/>
                        <button disabled>Enviando</button>
                    </div>
                </div>
            </div>
        </main>

    )

}

}

