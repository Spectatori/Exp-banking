import apiClient from './apiClient.jsx'

export const registerUser = async (UserData) =>{
    try{
        console.log(UserData)
        const response = await apiClient.post('/authentication/register', UserData)
        
        return response.post;
    } catch(error){
        throw error;
    }
}
