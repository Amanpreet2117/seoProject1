import axios from 'axios';
import Cookies from 'js-cookie';


// export const baseURL = 'https://usinside.com/backend/api'
 export const baseURL = "http://localhost:4000"

const instance = axios.create({
  baseURL: baseURL
});

instance.interceptors.request.use(function (config) {
  const token = Cookies.get('token');
  // if (token) {
  //   const parseToken = JSON.parse(token)
  //   config.headers.Authorization = `Bearer ${parseToken}`
  // }
  return config;
}, function (error: any) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response: any) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  // console.log(response)
  return response;
}, function (error: { response: { status: number; }; }) {
  console.log('error', error)
  if(error?.response?.status === 401){
    Cookies.remove('token')
    window.location.href = '/'
  }
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default instance;