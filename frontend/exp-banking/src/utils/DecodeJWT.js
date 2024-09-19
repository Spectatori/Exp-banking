import Cookies from 'js-cookie';

export function decodeJWT() {
    const token = Cookies.get('UserToken');
    
    if (!token) {
        console.error("No token is provided");
        return null;
    }

    try {
        const [, payloadEncoded] = token.split('.');
        const payload = JSON.parse(atob(payloadEncoded));
        return payload;
    } catch (error) {
        console.error("Error decoding JWT:", error);
        return null;
    }
}