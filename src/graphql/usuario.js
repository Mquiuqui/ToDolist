import { Cookies } from "react-cookie";
import client from "./client";
import { createTarefaMutation } from "./mutations";
import { createUserMutation } from "./mutations";
import { editTarefa } from "./mutations";
import { deleteTarefaMutation } from "./mutations";
import { verifyUser} from './querys'
import {verifyTarefa} from './querys'
import {verifyTarefaCon} from './querys'



export const getUser = async (credentials) => {
    return await client.request(verifyUser, credentials)
}


export const getTarefas = async (content) => {
    return await client.request(verifyTarefa, content)
}

export const getTarefasCon = async (content) => {
    return await client.request(verifyTarefaCon, content)
}

export const cadastroTarefa = async (content) => {
    return await client.request(createTarefaMutation, content)

}
export const cadastroUser = async (content) => {
    return await client.request(createUserMutation, content)

}
export const editTarefaCon = async (idTarefa) => {
    return await client.request(editTarefa, idTarefa )

}
export const deleteTarefaCon = async (idTarefa) => {
    return await client.request(deleteTarefaMutation, idTarefa )

}