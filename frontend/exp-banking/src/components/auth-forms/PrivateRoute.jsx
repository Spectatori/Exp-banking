import React from 'react';
import { Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const PrivateRoute = ({ element,  authRequired = true }) => {
    const [cookies] = useCookies(['UserToken']);
    const isAuthenticated = !!cookies.UserToken;

    if (authRequired && !isAuthenticated) {
        return <Navigate to="/auth/login" />;
    }
    if(!authRequired && isAuthenticated){
        return <Navigate to="/profile"/>
    }

    return element;
};

export default PrivateRoute;
