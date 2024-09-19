export function decodeJWT (token) {
    if(!token){
        console.error("No token is provided")
        return null;
    }
    try{
        const[headerEncoded, payloadEncoded, signature] = token.split('.');

        const payload = JSON.parse(atob(payloadEncoded));
        return payload;
    }catch{
        console.error("Error decoding JWT: ", error);
        return null;
    }
}