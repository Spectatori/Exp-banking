import apiClient from './apiClient.jsx'
import { decodeJWT } from '../utils/DecodeJWT.js'

export const getUser = async() =>{
    try {
        const decoded = decodeJWT();
        const user = await apiClient.get(`api/admin/getUser/${decoded.sub}`)
        return user.data;
    }
    catch(error){
        console.log("The error is " + error)
    }
}
export const onSave = async (user, updatedData) => {
    try {
        const decoded = decodeJWT();

        // Construct the full payload based on user and updatedData
        const payload = {
            firstname: user.firstname,
            password: updatedData.password || user.password,
            secondname: user.secondname,
            lastname: user.lastname,
            email: updatedData.email || user.email,
            phoneNumber: updatedData.phoneNumber || user.phoneNumber,
            dateOfBirth: user.dateOfBirth,
            employmentType: {
                employmentType: updatedData.employment || user.employmentType.employmentType,
            },
            egn: user.egn,
            idCardNumber: user.idCardNumber,
            expDate: user.expDate,
        };
        const addressPayload = {
            postcode: user.address.postcode,
            cityName: user.address.cityName,
            street: updatedData.address || user.address.street,
        }
        const response = await apiClient.put(`user/update/${decoded.userId}`, payload);
        const addressResponse = await apiClient.put(`api/address/update/${decoded.userId}`, addressPayload)
    } catch (error) {
        console.error('Error updating user:', error);
    }
};
