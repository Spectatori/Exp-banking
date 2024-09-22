import React from 'react';
import { Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useUserStore } from '../../stores/AuthStore';

const PrivateRoute = ({ element,  authRequired = true }) => {
    const [cookies] = useCookies(['UserToken']);
    const isAuthenticated = !!cookies.UserToken;
    const user  = useUserStore();

    if (authRequired && !isAuthenticated || !user) {
        return <Navigate to="/auth/login" />;
    }
    else if(authRequired == false && isAuthenticated && user){
        return <Navigate to="/account-overview"/>;  
    }
    
    return element;
};

export default PrivateRoute;
