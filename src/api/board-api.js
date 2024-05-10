import axios from 'axios';


const authInstance = axios.create({
    baseURL: 'https://project-seventeam07.onrender.com/api',
});

const setToken = token => {
    if(token) {
        // return authInstance.defaults.headers.authorization = `Bearer ${token}`;
        return authInstance.defaults.headers.authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2M2U0MzA2NmQxNjI1ZmRjNDU3YWM3ZCIsImlhdCI6MTcxNTM2MDE3MywiZXhwIjoxNzE1NTMyOTczfQ.XQr2KSIAjIMr4Tl39IFhdLopBG85ZlWX3ufKKOedmpA`;
        
// token
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2M2U0MzA2NmQxNjI1ZmRjNDU3YWM3ZCIsImlhdCI6MTcxNTM2MDE3MywiZXhwIjoxNzE1NTMyOTczfQ.XQr2KSIAjIMr4Tl39IFhdLopBG85ZlWX3ufKKOedmpA

    }
    authInstance.defaults.headers.authorization = "";
}

export const getBoardById = async (id) => {
    console.log("object");
    // ?
    // const {data} = await authInstance.get(`/board${id}`);
    const {data} = await authInstance.get(`/boards/${id}`);
    // const {data} = await authInstance.get("/boards/${id}");
    setToken(data.token);
    return data;
};
