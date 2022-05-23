import React, {useContext} from 'react';
import {AuthenticatedContext} from "../../providers/AuthenticatedProvider";
import {useNavigate} from "react-router-dom";

function Authenticate({label, value, location}) {

    const [authenticatedValue, setAuthenticatedValue] = useContext(AuthenticatedContext);

    const navigate = useNavigate();

    const authenticate = () => {
        setAuthenticatedValue(value);
        navigate(location, { replace: true });
    }
    return (
        <button onClick={authenticate}>{label}</button>
    );
}

export default Authenticate;