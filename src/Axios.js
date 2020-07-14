import axios from 'axios';

const instance =  axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
});
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

//we can add interceptors for axios instance
// instance.interceptors.request.use(requestConfig =>{
//     console.log(requestConfig);
//     //Need to always return request config other wise its blocking request.
//     return requestConfig;
// }, error =>{
//     console.log("Error :" + error);
//     return Promise.reject(error);
// })
export default instance;