import apiClient from './apiClient.jsx'
import { decodeJWT } from '../utils/DecodeJWT.js'

export const getUser = async() =>{
    try {
        const decoded = decodeJWT();
        const user = await apiClient.get(`/admin/getUser/`+decoded.sub)
        return user.data;
    }
    catch(error){
        console.log("The error is " + error)
    }
}