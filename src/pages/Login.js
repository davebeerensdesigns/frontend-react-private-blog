import React, {useContext, useState} from 'react';
import PageTitle from "../components/pageTitle/PageTitle";
import {useForm} from "react-hook-form";
import users from '../data/users.json';
import {AuthenticatedContext} from "../providers/AuthenticatedProvider";
import {useNavigate} from "react-router-dom";

function Login() {

    const [authenticatedValue, setAuthenticatedValue] = useContext(AuthenticatedContext);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    const onSubmit = async data => {
        if (users.find(user => user.email === data.email && user.password === data.password)) {
            setAuthenticatedValue(true);
            navigate('/', {replace: true});
        } else {
            setErrorMessage('Verkeerd email en/of wachtwoord. Probeer het nog eens.');
        }
        reset();
    };

    return (
        <>
            <PageTitle title='Login'/>
            <div className='userList'>
                {users.map((user) => {
                    return (
                        <div className='user' key={user.id}>
                            <b>example user {user.id}</b><br/>
                            email: {user.email}<br/>
                            password: {user.password}
                        </div>
                    );
                })}
            </div>
            <form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    {...register("email", {
                        required: "required",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Entered value does not match email format"
                        }
                    })}
                    type="email"
                />
                {errors.email && <span role="alert">{errors.email.message}</span>}
                <label htmlFor="password">Password</label>
                <input
                    autoComplete='true'
                    id="password"
                    {...register("password", {
                        required: "required",
                        minLength: {
                            value: 5,
                            message: "min length is 5"
                        }
                    })}
                    type="password"
                />
                {errors.password && <span role="alert">{errors.password.message}</span>}
                <button type="submit">SUBMIT</button>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
        </>
    );
}

export default Login;