import apiClient from './apiClient.jsx'
import {useUserStore} from '../stores/AuthStore.js'
import { getUser } from './userService.jsx';
import Cookies from 'js-cookie'

export const registerUser = async (UserData) =>{
    const setUser = useUserStore.getState().setUser;
    try{
        const response = await apiClient.post('/authentication/register', UserData);

        const token = response.data.token;
        Cookies.set('UserToken', token, { path: '/' });
        
        const user = await getUser();
        setUser(user);

        return token; 
    } catch(error){
        throw error;
    }
}

export const loginUser = async (UserData) => {
    const setUser = useUserStore.getState().setUser;
    try {
        const response = await apiClient.post('/authentication/authenticate', UserData)

        const token = response.data.token;
        Cookies.set('UserToken', token, { path: '/' });
        
        const user = await getUser();
        setUser(user);

        return token; 
    } catch (error) {
        console.error('Error during login:', error);
        throw error;    
    }
};