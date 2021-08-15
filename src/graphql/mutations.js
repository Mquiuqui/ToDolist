import { gql } from "graphql-request";

export const createUserMutation = gql`

mutation($userName:String,$userLogin:String,$userSenha:String,$idUser:String){
  createTbUser(data:{
    idUser:$idUser,
    userName:$userName,
    userLogin:$userLogin,
    userSenha:$userSenha
  })
  {
	createdAt
  }publishTbUser(where:{idUser:$idUser} to: PUBLISHED){
    createdAt
  }
  
}

`
export const createTarefaMutation = gql`

mutation($idUser:String!,$tarefa:String,$titulo:String,$idTarefa:String!,$data:Date,$estadoTarefa:Boolean){
  createTarefa(data:{
    idUser:$idUser,
    tarefa:$tarefa,
    tituloTarefa:$titulo,
    idTarefa:$idTarefa,
    dataTarefa:$data,
    estadoTarefa:$estadoTarefa
  }){
	createdAt
  }publishTarefa(where:{idTarefa:$idTarefa}){
    createdAt
  }
}
`


export const deleteTarefaMutation = gql`
  mutation($idTarefa:String!){
      deleteTarefa(where:{idTarefa:$idTarefa}){
      idTarefa
    }
  }
`

export const editTarefa = gql`
  mutation($idTarefa:String!){
    updateTarefa(    
      where: { idTarefa: $idTarefa }
      data: { estadoTarefa: false }){
        estadoTarefa
    }publishTarefa(where: { idTarefa: $idTarefa }){
      createdAt
    }
}
`