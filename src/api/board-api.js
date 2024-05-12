// import axios from 'axios';
// import { setToken } from './auth-api';

// const authInstance = axios.create({
//     baseURL: 'https://project-seventeam07.onrender.com/api',
// });

// const setToken = token => {
//     if (token) {
//         return authInstance.defaults.headers.authorization = `Bearer ${token}`;
//     }
//     authInstance.defaults.headers.authorization = "";
// }

// export const getBoardById = async (id, user) => {
//     setToken(user.token);
//     const { data } = await authInstance.get(`/boards/${id}`);

//     return data;
// };

// token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2M2U0MzA2NmQxNjI1ZmRjNDU3YWM3ZCIsImlhdCI6MTcxNTM2NDI4MCwiZXhwIjoxNzE1NTM3MDgwfQ.Ie7DcuIqKslxu07lqSesutjYYe7xSm2CR7B6zzJTy0Q

// User:
// _id '663e43066d1625fdc457ac7d'
// name 'qwerty'
// password "$2b$10$T2hyCpd0wXZlvEqDhQOhdOZN1avHNoPehnDyCP130RB/Lhdr0YwBa"
// email "witchep222@gmail.com"
// token "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2M2U0MzA2NmQxNjI1ZmRjNDU3YWM3ZCIsImlhdCI6MTcxNTM2NDI4MCwiZXhwIjoxNzE1NTM3MDgwfQ.Ie7DcuIqKslxu07lqSesutjYYe7xSm2CR7B6zzJTy0Q"

// Борда:
// _id : '663e636c0ebfde3777089cd6'
// title : "Project Board"
