import React from 'react';
import {Navigate} from "react-router-dom";

const ProtectedRoute = ({authenticated, children}) => {

    return !authenticated ? <Navigate to="/login"/> : children

}

export default ProtectedRoute;