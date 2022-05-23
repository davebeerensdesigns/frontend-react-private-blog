import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import {AuthenticatedContext} from "../../providers/AuthenticatedProvider";
import Authenticate from "../authenticate/Authenticate";

function Navbar() {

    const [authenticatedValue, setAuthenticatedValue] = useContext(AuthenticatedContext);

    return (
        <nav className='mainNav'>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                {authenticatedValue && (
                    <>
                        <li>
                            <NavLink to='/blogposts'>Blogposts</NavLink>
                        </li>
                        <li>
                            <Authenticate label='logout' value={false} location='/'/>
                        </li>
                    </>
                )}
                {!authenticatedValue && (
                    <li>
                        <NavLink to='/login'>Login</NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;