import { gql } from "graphql-request";

export const verifyUser = gql`
    query($userLogin:String,$userSenha:String!){
        tbUsers(where:{userLogin:$userLogin,userSenha:$userSenha}){
            idUser
            userName
        }
    }
`

export const verifyTarefa = gql`
    query($idUser:String!){
        tarefas(where:{ idUser:$idUser,estadoTarefa:true}){
            idTarefa
            tituloTarefa
            tarefa
            dataTarefa
        }
    }
`

export const verifyTarefaCon = gql`
    query($idUser:String!){
        tarefas(where:{ idUser:$idUser,estadoTarefa:false}){
            idTarefa
            tituloTarefa
            tarefa
            dataTarefa
        }
    }
`

export const verifyPagConteudo = gql`
    query($idConteudo:String!){
        conteudo(where : {idConteudo:$idConteudo}){
        idConteudo
        pgConteudo
        titulo
        subtitulo
        introducao
        tipoConteudo
        dtConteudo
        
        }
    }
`
