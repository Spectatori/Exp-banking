import apiClient from './apiClient.jsx'
import { decodeJWT } from '../utils/DecodeJWT.js'

const authToken = cookies().get("UserToken")?.value 

export const getUser = async() =>{
    try {
        const decoded = decodeJWT(authToken);
        console.log(decoded.sub)
        const user = await apiClient.get(`/admin/getUser/`,decoded.sub)
        console.log(user)
    }
    catch(error){
        console.log("The error is " + error)
    }
}