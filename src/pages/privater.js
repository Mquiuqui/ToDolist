
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Cookies, useCookies } from 'react-cookie'
import Home from './home';


const PrivateRoute = () => {

    const [cookies, setCookie] = useCookies()
    var data = cookies.user;
    console.log(data)

    if(data === undefined || data >=0) { 

        return <Redirect to='/login' />
    } else { 
        return  <Route path="/home" /> 
            
    } 
}

export default PrivateRoute