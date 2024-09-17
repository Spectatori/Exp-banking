import apiClient from './apiClient.jsx'

export const registerUser = async (UserData) =>{
    try{
        console.log(UserData)
        const response = await apiClient.post('/authentication/register', UserData)
        
        return response.data.token;
    } catch(error){
        throw error;
    }
}
export const loginUser = async (UserData) => {
    try {
        const response = await apiClient.post('/authentication/authenticate', UserData)

        const token = await response.data.token; 

        return token;  // Return the token to be stored in cookies
    } catch (error) {
        console.error('Error during login:', error);
        throw error; 
    }
};