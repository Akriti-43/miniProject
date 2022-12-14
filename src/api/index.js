import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' })

// API.interceptors.request.use((req) =>{
//     if(localStorage.getItem('profile')){
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//     } 

//     return req;
// });


export const registerRestaurant = (formData) => API.post('/registerRestaurant', formData);
export const signIn = (formData) => API.post('/vendorSignIn', formData);
export const signUp = (formData) => API.post('/vendorSignUp', formData);


export const payUsingPaytm = (data) => API.post('/payment', data);
