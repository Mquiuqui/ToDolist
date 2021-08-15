import { React, useState, useRef, useEffect } from 'react';
import { getTarefasCon } from '../graphql/usuario'
import { deleteTarefaCon } from '../graphql/usuario'
import { useCookies } from 'react-cookie'
import uuid from 'react-uuid'

import '../sass/tarefas.scss'

//varaivel para armazenar os dados vindos do bd
let taref

export default function TarefasConcluidas(){
    const [cookies, setCookie, remove]= useCookies()
    const[load, setLoad] = useState(true)
    

    async function GetTarefas(){

    async function verificaConteudo(response){
        taref = response.tarefas
        console.log(taref)
    }
    let idUser = cookies.user
    await verificaConteudo(await getTarefasCon(idUser))
    
    }

    async function deleteTarefa(id){
        let idTarefa ={
            idTarefa:id
        }

        console.log(idTarefa)
        await deleteTarefaCon(idTarefa)
        
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
                    <h1>Suas Tarefas Concluidas</h1>
                    { taref.map(
                        (c) => {
                            return (
                                <div className="formTarefaCad">
                                    <div key={uuid()} className="tarefasCad">
                                        <button id="dell"onClick={() => deleteTarefa(c.idTarefa)}>OK</button>
                                        <h3 id="data">{c.dataTarefa}</h3>
                                        <h3 id="titulo">{c.tituloTarefa} </h3>   
                                        <h3>{c.tarefa}</h3>   
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
