import axios from 'axios';


const authInstance = axios.create({
    baseURL: 'https://project-seventeam07.onrender.com/api',
});

const setToken = token => {
    if(token) {
        return authInstance.defaults.headers.authorization = `Bearer ${token}`;
    }
    authInstance.defaults.headers.authorization = "";
}

export const getBoardById = async (id, user) => {
    setToken(user.token);
    const {data} = await authInstance.get(`/boards/${id}`);
    
    return data;
};
