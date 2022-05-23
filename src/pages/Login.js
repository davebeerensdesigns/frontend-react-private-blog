import React from 'react';
import PageTitle from "../components/pageTitle/PageTitle";
import Authenticate from "../components/authenticate/Authenticate";

function Login() {

    return (
        <>
            <PageTitle title='Login'/>
            <p>Druk op de knop om in te loggen!</p>
            <Authenticate label='login' value={true} location='/' />
        </>
    );
}

export default Login;