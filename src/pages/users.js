import React, { Component } from 'react';
import { useCookies } from 'react-cookie'

export default function Users(){
    const [cookies, setCookie, remove]= useCookies()
    return(
        <h1>Logado como:{cookies.user.userName}</h1>
    )
}
