import React, {createContext, useEffect, useState} from "react";

export const AuthenticatedContext = createContext(null);

const { Provider } = AuthenticatedContext;

const AuthenticatedProvider = ({children}) => {


    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return <Provider value={[isAuthenticated, toggleIsAuthenticated]}>{children}</Provider>;

}

AuthenticatedProvider.context = AuthenticatedContext;

export default AuthenticatedProvider;
