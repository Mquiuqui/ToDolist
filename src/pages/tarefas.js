import { React, useState, useRef, useEffect } from 'react';
import { getTarefas } from '../graphql/usuario'
import { editTarefaCon } from '../graphql/usuario'
import { useCookies } from 'react-cookie'
import uuid from 'react-uuid'

import '../sass/tarefas.scss'


//varaivel para armazenar os dados vindos do bd
let taref


export default function Tarefas(){
    const [cookies, setCookie, remove]= useCookies()
    const[load, setLoad] = useState(true)
    

    async function GetTarefas(){

        async function verificaConteudo(response){
            taref = response.tarefas
            console.log(taref)

        }

        let idUser = cookies.user
        await verificaConteudo(await getTarefas(idUser))
        
    }

    async function validaTarefa(id){
        let idTarefa ={
            idTarefa:id
        }

        console.log(idTarefa)
        await editTarefaCon(idTarefa)
        
    }

    useEffect(() => {

        GetTarefas()
        
        const interval = setInterval(()=>{
            setLoad(false)
            
        },3000)
        return()=>interval
        
    },[]);

    if(load === false){
        console.log(taref) 
        return(
            <div className="telaTarefa">
                <div className="container2">
                    <h1>Suas Tarefas Pendentes</h1>
                    { taref.map(
                        (c) => {
                            return (
                                <div className="formTarefaCad">
                                    <div key={uuid()} className="tarefasCad">
                                        <button onClick={() => validaTarefa(c.idTarefa)}>OK</button>
                                        <h4 id="data">{c.dataTarefa}</h4>
                                        <h3 id="titulo">{c.tituloTarefa} </h3>   
                                        <h3 id="desc">{c.tarefa}</h3>   
                                    </div>
                                </div>
                                    )
                            
                        }
                    )}
                </div>
            </div>    
        )
    }else{
        return(<div>Carregando</div>)
    }
}
