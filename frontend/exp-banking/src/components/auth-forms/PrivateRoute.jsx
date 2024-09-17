import React from 'react';
import { Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const PrivateRoute = ({ element }) => {
    const [cookies] = useCookies(['UserToken']);

    if (!cookies.UserToken) {
        return <Navigate to="/auth/login" />;
    }

    return element;
};

export default PrivateRoute;
